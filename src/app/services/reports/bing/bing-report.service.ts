import { Injectable, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { getAuth } from 'firebase/auth';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import moment from 'moment-timezone';
import * as Papa from 'papaparse';

import { firstValueFrom } from 'rxjs';

import { ExternalPlatformsService } from '../../external-platforms.service';
import { CommonService } from '../../common/common.service';


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
    public externalPlatforms: ExternalPlatformsService,
    private commonService: CommonService
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
        let key = cur.TimePeriod;
        if (campaign.bingCampaign.map((c: any) => c.id).includes(cur.CampaignId)) {
          key = moment(key).format("YYYY/MM/DD");
          if (!acc[key]) {
            acc[key] = {
              TimePeriod: moment(cur.TimePeriod).format("YYYY/MM/DD"),
              AccountName: cur.AccountName,
              AccountId: cur.AccountId,
              CampaignIds: [cur.CampaignId],
              Impressions: parseInt(cur.Impressions),
              Clicks: parseInt(cur.Clicks),
              Conversions: parseInt(cur.Conversions),
              Spend: parseFloat(cur.Spend)
            };
          } else {
            acc[key].CampaignIds.push(cur.CampaignId);
            acc[key].Impressions += parseInt(cur.Impressions);
            acc[key].Clicks += parseInt(cur.Clicks);
            acc[key].Conversions += parseInt(cur.Conversions);
            acc[key].Spend += parseFloat(cur.Spend);
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

  async processReport(campaign: any, index: number): Promise<boolean> {
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;

      await this.generateReport(campaign.platforms[index].formData);
      await this.getReportStatus(campaign.platforms[index].formData);
      await this.getReport(campaign.platforms[index].formData);

      let dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
      let resultatAgregat: any = {};

      this.reportJson.forEach((line: any) => {
        if (!resultatAgregat[line.TimePeriod]) {
          resultatAgregat[line.TimePeriod] = {...line, Nombre: 1};
        } else {
          Object.keys(line).forEach(cle => {
            if (typeof line[cle] === 'number') {
              resultatAgregat[line.TimePeriod][cle] += line[cle];
            }
          });
          resultatAgregat[line.TimePeriod].Nombre += 1;
        }
      });
      let filteredObj = Object.entries(resultatAgregat)
        .filter(([key, _]) => dateRegex.test(key))
        .reduce((acc: any, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      let reportToSave = {
        report: filteredObj,
        userSearchId: userSearchId + '_' + index,
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userId: userId
      };

      this.db.collection('bingReport', ref => ref.where('userSearchId', '==', userSearchId + '_' + index))
        .get()
        .subscribe(querySnapshot => {
          if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
              this.db.collection('bingReport').doc(doc.id).set(reportToSave)
                .catch(error => {
                  console.error('Error updating report: ', error);
                });
            });
          } else {
            this.db.collection('bingReport').add(reportToSave)
              .catch(error => {
                console.error('Error adding report: ', error);
              });
          }
        }, error => {
          console.error('Error checking for existing report: ', error);
        });

      const AllPacingAlerts = this.fns.httpsCallable('AllPacingAlerts');

      if (this.reportJson) {
        const AllPacingAlerts$ = AllPacingAlerts({
          userSearchId: userSearchId, 
          reportJson: this.reportJson, 
          userId: userId,
          platform: "bing",
          platformIndex: index,
          accountId: this.commonService.selectedAccount.id
        });

        try {
          await firstValueFrom(AllPacingAlerts$);
          this.resetReportVariables();
          return true;
        } catch (error) {
          console.error('Error calling Firestore function: ', error);
          this.resetReportVariables();
          return false;
        }
      } else {
        console.error('reportJson is null, skipping Firestore insertion.');
        this.resetReportVariables();
        return false;
      }
    } catch (error) {
      console.error('Error processing Bing report: ', error);
      return false;
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
    this.reportId = '';
    this.reportURL = '';
  }
}
