import { Injectable } from '@angular/core';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';


@Injectable({
  providedIn: 'root'
})
export class FacebookReportService {
  reportJson: any = [];

  constructor(private fns: AngularFireFunctions, private db: AngularFirestore) { }

  convertDateFormat(dateString: string) {
    const parts = dateString.split('/');
    const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
    return formattedDate;
  }

  async getReport(campaign: any) {
    const fields = [
      'date_start',
      'date_stop',
      'account_id',
      'campaign_id',
      'outbound_clicks',
      'impressions',
      'spend',
    ].join(',');

    const adAccount = campaign.facebookAdAccount.id;
    const campaignIds = campaign.facebookCampaign.map((c: any) => c.id);
    const accessToken = localStorage.getItem('facebookAccessToken');
    const startDate = this.convertDateFormat(campaign.facebookStartDate);
    const endDate = this.convertDateFormat(campaign.facebookEndDate);

    const filtering = `[{'field':'campaign.id','operator':'IN','value':[${campaignIds.join(',')}] }]`;

    const timeRange = `{"since":"${startDate}","until":"${endDate}"}`;
    const url = `https://graph.facebook.com/v19.0/${adAccount}/insights?fields=${fields}&time_range=${timeRange}&access_token=${accessToken}&filtering=${encodeURIComponent(filtering)}&time_increment=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.reportJson = data.data;
    } catch (error) {
      console.error('Error fetching campaign metrics:', error);
    }
  }

  async processReport(campaign: any, event?: MouseEvent) {
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
      this.db.collection('facebookReport').add(reportToSave);

      const FacebookPacingAlerts = this.fns.httpsCallable('FacebookPacingAlerts');
  
      const FacebookPacingAlerts$ = FacebookPacingAlerts({
        userSearchId: userSearchId, 
        reportJson: this.reportJson, 
        userId: userId
      });
      try {
        await firstValueFrom(FacebookPacingAlerts$);
        this.resetReportVariables();
      } catch (error) {
        console.error('Error calling Firestore function: ', error);
        this.resetReportVariables();
      }
    } catch (error) {
      console.error('Error processing Facebook report: ', error);
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
  }  
}
