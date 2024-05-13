import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { firstValueFrom } from 'rxjs';

import { ExternalPlatformsService } from '../../external-platforms.service';
import { CommonService } from '../../common/common.service';

import { ToastrService } from 'ngx-toastr';

import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';


@Injectable({
  providedIn: 'root'
})
export class GoogleAdsReportService {
  toaster = inject(ToastrService);
  reportJson: any = [];

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore, 
    private http: HttpClient,
    public externalPlatforms: ExternalPlatformsService,
    private commonService: CommonService
  ) { }

  convertDateFormat(dateStr: string) {
    const [month, day, year] = dateStr.split('/');
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  async getReport(campaign: any, retryCount = 2): Promise<void> {
    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}`,
        'Content-Type': 'application/json',
        'developer-token': 'mkH52QA2KonyxSyJy8TFUw',
        'login-customer-id': '2681551676'
      });
  
      const startDate = this.convertDateFormat(campaign.googleAdsStartDate);
      const endDate = this.convertDateFormat(campaign.googleAdsEndDate); 
      const customerId = campaign.googleAdsAccount.id;
      const campaignIds = Array.from(new Set(campaign.googleAdsCampaign.map((c: any) => c.id)));
      const formattedCampaignIds = `('${campaignIds.join("', '")}')`;

      const url = `https://googleads.googleapis.com/v16/customers/${customerId}/googleAds:searchStream`;
      const body = {
        query: `
          SELECT
            campaign.id,
            campaign.name,
            segments.date,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros
          FROM campaign
          WHERE campaign.id IN ${formattedCampaignIds}
          AND segments.date BETWEEN '${startDate}' AND '${endDate}'
          ORDER BY campaign.id`
      };

      const response: any = await firstValueFrom(this.http.post(url, body, { headers }));
      if (response.error) {
        console.error('Error fetching Google Ads report:', response.error);
        return;
      }

      if (response && response.length > 0) {
        this.reportJson = response[0].results;
        this.reportJson = this.aggregateCampaignData(this.reportJson);
      }
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error);
        return this.getReport(campaign, retryCount - 1);
      } else {
        this.toaster.error('Failed to fetch Google Ads report', 'Error');
      }
    }
  }

  aggregateCampaignData(data: any) {
    const aggregatedData: any = {};

    data.forEach((item: any) => {
        const date = item.segments.date;

        if (!moment(date, "YYYY-MM-DD", true).isValid()) {
            return;
        }

        if (!aggregatedData[date]) {
            aggregatedData[date] = {
                "Date": date,
                "Campaign IDs": new Set(),
                "Campaign Names": new Set(),
                "Clicks": 0,
                "Cost": 0,
                "Impressions": 0
            };
        }

        const entry = aggregatedData[date];
        entry["Campaign IDs"].add(item.campaign.id);
        entry["Campaign Names"].add(item.campaign.name);
        entry.Clicks += parseInt(item.metrics.clicks) || 0;
        entry.Cost += parseFloat(item.metrics.costMicros) / 1000000 || 0;
        entry.Impressions += parseInt(item.metrics.impressions) || 0;
    });

    Object.values(aggregatedData).forEach((item: any) => {
      item["Campaign IDs"] = Array.from(item["Campaign IDs"]);
      item["Campaign Names"] = Array.from(item["Campaign Names"]);
    });

    return Object.values(aggregatedData);
  }

  async processReport(campaign: any, index: number) {
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;

      await this.getReport(campaign.platforms[index].formData);
      let reportToSave = {
        report: this.reportJson,
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userId: userId,
        platform: "googleAds"
      };
      this.db.collection('googleAdsReport').add(reportToSave);

      const AllPacingAlerts = this.fns.httpsCallable('AllPacingAlerts');

      if (this.reportJson) {
        const AllPacingAlerts$ = AllPacingAlerts({
          userSearchId: userSearchId, 
          reportJson: this.reportJson, 
          userId: userId,
          platformIndex: index,
          platform: "googleAds",
          accountId: this.commonService.selectedAccountId
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
      console.error('Error processing Google Ads report: ', error);
      return false;
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
  }  
}
