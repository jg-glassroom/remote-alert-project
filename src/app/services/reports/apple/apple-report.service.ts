import { Injectable } from '@angular/core';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';

import { CommonService } from '../../common/common.service';

interface CampaignData {
  date_stop: string;
  account_id: string;
  outbound_clicks: { action_type: string; value: string }[];
  impressions: string;
  spend: string;
}

interface TransformedData {
  [key: string]: CampaignData;
}


@Injectable({
  providedIn: 'root'
})
export class AppleReportService {
  reportJson: any = [];

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private commonService: CommonService
  ) { }

  convertDateFormat(dateString: string) {
    const parts = dateString.split('/');
    const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
    return formattedDate;
  }

  async getReport(campaign: any) {
    return null;
    /*
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
    */
  }

  private transformReport(dataArray: any): TransformedData | null {
    return null;
    /*
    if (!dataArray) return null;
    let transformedData: TransformedData = {};

    dataArray.forEach((item: any) => {
      const formattedDate = item.date_start.replace(/-/g, '/');
      const campaignData: CampaignData = {
        date_stop: item.date_stop,
        account_id: item.account_id,
        outbound_clicks: item.outbound_clicks.map((click: any) => ({
            action_type: click.action_type,
            value: click.value
        })),
        impressions: item.impressions,
        spend: item.spend
      };

      transformedData[formattedDate] = campaignData;
    });

    return transformedData;
    */
  }

  async processReport(campaign: any, index: number) {
    return null;
    /*
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;

      await this.getReport(campaign.platforms[index].formData);
      let reportToSave = {
        report: this.transformReport(this.reportJson),
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userId: userId
      };
      this.db.collection('facebookReport').add(reportToSave);

      const AllPacingAlerts = this.fns.httpsCallable('AllPacingAlerts');

      const AllPacingAlerts$ = AllPacingAlerts({
        userSearchId: userSearchId,
        reportJson: this.reportJson,
        userId: userId,
        platform: "facebook",
        platformIndex: index,
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
    } catch (error) {
      console.error('Error processing Facebook report: ', error);
      return false;
    }
    */
  }

  resetReportVariables() {
    this.reportJson = [];
  }
}