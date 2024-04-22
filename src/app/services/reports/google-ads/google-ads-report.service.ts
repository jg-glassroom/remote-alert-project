import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';


@Injectable({
  providedIn: 'root'
})
export class GoogleAdsReportService {
  reportJson: any = [];

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore, 
    private http: HttpClient
  ) { }

  convertDateFormat(dateStr: string) {
    const [month, day, year] = dateStr.split('/');
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  async getReport(campaign: any) {
    try {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}`,
        'Content-Type': 'application/json',
        'developer-token': 'mkH52QA2KonyxSyJy8TFUw',
        'login-customer-id': '2681551676'
      });
  
      console.log('Fetching Google Ads report...', campaign);
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
        this.reportJson = response[0]
      }
    } catch (error) {
      console.error('Failed to fetch report:', error);
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
      this.db.collection('googleAdsReport').add(reportToSave);

      const GoogleAdsPacingAlerts = this.fns.httpsCallable('GoogleAdsPacingAlerts');

      if (this.reportJson) {
        const GoogleAdsPacingAlerts$ = GoogleAdsPacingAlerts({
          userSearchId: userSearchId, 
          reportJson: this.reportJson, 
          userId: userId
        });

        try {
          await firstValueFrom(GoogleAdsPacingAlerts$);
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
      console.error('Error processing Google Ads report: ', error);
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
  }  
}
