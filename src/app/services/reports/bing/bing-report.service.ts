import { Injectable, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { getAuth } from 'firebase/auth';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import moment from 'moment-timezone';

import { firstValueFrom } from 'rxjs';

import { ExternalPlatformsService } from '../../external-platforms.service';


@Injectable({
  providedIn: 'root'
})
export class BingReportService {
  toaster = inject(ToastrService);
  reportJson: any = [];

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    public externalPlatforms: ExternalPlatformsService
  ) { }

  async getReport(campaign: any, retryCount = 2): Promise<void> {
    try {
      const startDate = new Date(campaign.bingStartDate);
      const endDate = new Date(campaign.bingEndDate);
      const campaignIds = campaign.bingCampaign.map((campaign: any) => ({ Id: campaign.id }));

      console.log('Getting Bing report for campaign: ', campaignIds);
      const getBingReport = this.fns.httpsCallable('getBingReport');
      const result = await firstValueFrom(getBingReport({
          accessToken: localStorage.getItem('microsoftAccessToken'),
          reportRequest: {
              Format: 'Csv',
              ReportName: 'Campaign Performance Report',
              ReturnOnlyCompleteData: false,
              ReportType: 'CampaignPerformanceReport',
              Time: {
                  CustomDateRangeStart: { Day: startDate.getDate(), Month: startDate.getMonth() + 1, Year: startDate.getFullYear() },
                  CustomDateRangeEnd: { Day: endDate.getDate(), Month: endDate.getMonth() + 1, Year: endDate.getFullYear() },
                  ReportAggregation: 'Daily'
              },
              Columns: ['TimePeriod', 'CampaignName', 'Impressions', 'Clicks', 'Spend'],
              Scope: {
                  AccountIds: [campaign.bingAccount.id],
                  Campaigns: campaignIds
              }
          }
      }));
      console.log('Bing report result: ', result);
    } catch (error: any) {
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

      await this.getReport(campaign);
      let reportToSave = {
        report: this.reportJson,
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        userId: userId
      };
      // this.db.collection('bingReport').add(reportToSave);

      // const BingPacingAlerts = this.fns.httpsCallable('BingPacingAlerts');

      // if (this.reportJson) {
      //   const BingPacingAlerts$ = BingPacingAlerts({
      //     userSearchId: userSearchId, 
      //     reportJson: this.reportJson, 
      //     userId: userId
      //   });

      //   try {
      //     await firstValueFrom(BingPacingAlerts$);
      //     this.resetReportVariables();
      //   } catch (error) {
      //     console.error('Error calling Firestore function: ', error);
      //     this.resetReportVariables();
      //   }
      // } else {
      //   console.error('reportJson is null, skipping Firestore insertion.');
      //   this.resetReportVariables();
      // }
    } catch (error) {
      console.error('Error processing Bing report: ', error);
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
  }
}
