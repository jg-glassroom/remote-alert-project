import { Injectable, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { getAuth } from 'firebase/auth';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import moment from 'moment-timezone';
import * as Papa from 'papaparse';

import { firstValueFrom } from 'rxjs';

import { ExternalPlatformsService } from '../../external-platforms.service';


@Injectable({
  providedIn: 'root'
})
export class BingReportService {
  toaster = inject(ToastrService);
  reportJson: any = [];
  reportId: string = '';
  reportURL: string = '';

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    public externalPlatforms: ExternalPlatformsService
  ) { }

  async generateReport(campaign: any, retryCount = 2): Promise<void> {
    try {
      const generateBingReport = this.fns.httpsCallable('generateBingReport');
      
      const accessToken = localStorage.getItem('microsoftAccessToken');
      const customerId = campaign.bingCustomer.id;
      const accountId = campaign.bingAccount.id;
      const startDate = campaign.bingStartDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2");
      let endDate: any = new Date(campaign.bingEndDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2"));
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (endDate > today) {
        endDate = today;
      }
      endDate = endDate.toISOString().split('T')[0];
      const campaignIds = campaign.bingCampaign.map((c: any) => c.id);

      const result = await firstValueFrom(generateBingReport({
          accessToken,
          customerId,
          accountId,
          reportName: `Alert project - ${today.toISOString()} - ${campaign.campaignName}`,
          startDate,
          endDate,
          campaignIds
      }));
      this.reportId = result['s:Envelope']['s:Body'][0]['SubmitGenerateReportResponse'][0]['ReportRequestId'][0];
    } catch (error: any) {
      console.error("Error generating Bing report:", error);
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.generateReport(campaign, retryCount - 1);
      } else {
        this.toaster.error('Failed to fetch Bing Ads report', 'Error');
      }
    }
  }

  async getReportStatus(campaign: any, retryCount = 4): Promise<void> {
    try {
      const getPollReportStatus = this.fns.httpsCallable('getPollReportStatus');
      
      const accessToken = localStorage.getItem('microsoftAccessToken');
      const customerId = campaign.bingCustomer.id;
      const accountId = campaign.bingAccount.id;

      const result = await firstValueFrom(getPollReportStatus({
          accessToken,
          customerId,
          accountId,
          reportRequestId: this.reportId
      }));

      if (result['s:Envelope']['s:Body'][0]['PollGenerateReportResponse'][0]['ReportRequestStatus'][0]['Status'][0] === 'Success') {
        this.reportURL = result['s:Envelope']['s:Body'][0]['PollGenerateReportResponse'][0]['ReportRequestStatus'][0]['ReportDownloadUrl'][0];
      } else {
        return this.getReportStatus(campaign, retryCount - 1);
      }
    } catch (error: any) {
      console.error("Error getting Bing report status:", error);
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.getReportStatus(campaign, retryCount - 1);
      } else {
        this.toaster.error('Failed to fetch Bing Ads report', 'Error');
      }
    }
  }

  async getReport(campaign: any, retryCount = 2): Promise<void> {
    try {
      const getBingReport = this.fns.httpsCallable('getBingReport');
      const result = await firstValueFrom(getBingReport({ reportUrl: this.reportURL }));
      const reportData = result.csv;

      const csvStartIndex = reportData.indexOf('\"TimePeriod\"');
      const csvData = reportData.substring(csvStartIndex);
      const parsedData: any = Papa.parse(csvData, { header: true, skipEmptyLines: true });
      this.reportJson = parsedData.data.reduce((acc: any, cur: any) => {
        const key = cur.TimePeriod;
        if (campaign.bingCampaign.map((c: any) => c.id).includes(cur.CampaignId)) {
          if (!acc[key]) {
            acc[key] = {
              TimePeriod: cur.TimePeriod,
              AccountName: cur.AccountName,
              AccountId: cur.AccountId,
              CampaignIds: [cur.CampaignId],
              Impressions: parseInt(cur.Impressions),
              Clicks: parseInt(cur.Clicks),
              Conversions: parseInt(cur.Conversions),
              Spend: parseInt(cur.Spend)
            };
          } else {
            acc[key].CampaignIds.push(cur.CampaignId);
            acc[key].Impressions += parseInt(cur.Impressions);
            acc[key].Clicks += parseInt(cur.Clicks);
            acc[key].Conversions += parseInt(cur.Conversions);
            acc[key].Spend += parseInt(cur.Spend);
          }
        }
        if (acc[key]) {
          acc[key].CampaignIds = [...new Set(acc[key].CampaignIds)];
        }
        return acc;
      }, {});
      this.reportJson = Object.values(this.reportJson);
    } catch (error: any) {
      console.error("Error getting Bing report:", error);
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.getReport(campaign, retryCount - 1);
      } else {
        this.toaster.error('Failed to fetch Bing Ads report', 'Error');
      }
    }
  }

  async processReport(campaign: any) {
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;

      await this.generateReport(campaign);
      await this.getReportStatus(campaign);
      await this.getReport(campaign);
      let reportToSave = {
        report: this.reportJson,
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        userId: userId
      };
      this.db.collection('bingReport').add(reportToSave);

      const BingPacingAlerts = this.fns.httpsCallable('BingPacingAlerts');

      if (this.reportJson) {
        const BingPacingAlerts$ = BingPacingAlerts({
          userSearchId: userSearchId, 
          reportJson: this.reportJson, 
          userId: userId
        });

        try {
          await firstValueFrom(BingPacingAlerts$);
          this.resetReportVariables();
        } catch (error) {
          console.error('Error calling Firestore function: ', error);
          this.resetReportVariables();
        }
      } else {
        console.error('reportJson is null, skipping Firestore insertion.');
        this.resetReportVariables();
      }
    } catch (error) {
      console.error('Error processing Bing report: ', error);
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
    this.reportId = '';
    this.reportURL = '';
  }
}
