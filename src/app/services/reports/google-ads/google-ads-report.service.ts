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
        'Authorization': `Bearer ${localStorage.getItem('googleAdsAccessToken')}`,
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
        await this.externalPlatforms.handleGoogleError(error, 'googleAds');
        return this.getReport(campaign, retryCount - 1);
      } else {
        this.toaster.error('Failed to fetch Google Ads report', 'Error');
      }
    }
  }

  aggregateCampaignData(data: any) {
    const aggregatedData: any = {};

    data.forEach((item: any) => {
      let date = item.segments.date;

      if (!moment(date, "YYYY-MM-DD", true).isValid()) {
        return;
      }

      date = moment(date).format("YYYY/MM/DD");

      if (!aggregatedData[date]) {
        aggregatedData[date] = {
          "account_id": item.campaign.id,
          "Date": date,
          "impressions": 0,
          "clicks": 0,
          "cost": 0,
          "outbound_clicks": []
        };
      }
      const entry = aggregatedData[date];
      entry.impressions += parseInt(item.metrics.impressions) || 0;
      entry.clicks += parseInt(item.metrics.clicks) || 0;
      entry.cost += parseFloat(item.metrics.costMicros) / 1000000 || 0;
      entry.outbound_clicks.push({
        action_type: "click",
        value: item.metrics.clicks
      });
    });

    return Object.values(aggregatedData);
  }

  async processReport(campaign: any, index: number) {
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;
      await this.getReport(campaign.platforms[index].formData);

      let dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
      let resultatAgregat: any = {};

      this.reportJson.forEach((line: any) => {
        if (!resultatAgregat[line.Date]) {
          resultatAgregat[line.Date] = {...line, Nombre: 1};
        } else {
          Object.keys(line).forEach(cle => {
            if (typeof line[cle] === 'number') {
              resultatAgregat[line.Date][cle] += line[cle];
            }
          });
          resultatAgregat[line.Date].Nombre += 1;
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
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userSearchId: userSearchId + '_' + index,
        userId: userId,
        platform: "googleAds"
      };

      this.db.collection('googleAdsReport', ref => ref.where('userSearchId', '==', userSearchId + '_' + index))
        .get()
        .subscribe(querySnapshot => {
          if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
              this.db.collection('googleAdsReport').doc(doc.id).set(reportToSave)
                .catch(error => {
                  console.error('Error updating report: ', error);
                });
            });
          } else {
            this.db.collection('googleAdsReport').add(reportToSave)
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
          platformIndex: index,
          platform: "googleAds",
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
      console.error('Error processing Google Ads report: ', error);
      return false;
    }
  }
  
  resetReportVariables() {
    this.reportJson = [];
  }  
}
