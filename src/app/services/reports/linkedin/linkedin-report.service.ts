import { Injectable } from '@angular/core';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';

import { HttpClient } from '@angular/common/http';

import { CommonService } from '../../common/common.service';


@Injectable({
  providedIn: 'root'
})
export class LinkedinReportService {
  reportJson: any = [];

  constructor(
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  convertDateFormat(dateObject: any) {
    const year = dateObject.end.year;
    const month = dateObject.end.month < 10 ? `0${dateObject.end.month}` : dateObject.end.month;
    const day = dateObject.end.day < 10 ? `0${dateObject.end.day}` : dateObject.end.day;
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  }

  async getReport(campaign: any) {
    this.reportJson = [];

    const accessToken = localStorage.getItem('linkedinAccessToken');
    if (!accessToken) {
      console.error('No LinkedIn access token found');
      return;
    }
    const startDate = moment(campaign.linkedinStartDate, "MM/DD/YYYY").toDate();
    const endDate = moment(campaign.linkedinEndDate, "MM/DD/YYYY").toDate();
    const campaignIds = campaign.linkedinCampaign.map((c: any) => `urn:li:sponsoredCampaign:${c.id}`).join(',');
    
    const url = `https://api.linkedin.com/v2/adAnalyticsV2?q=analytics&dateRange.start.month=${startDate.getMonth() + 1}&dateRange.start.day=${startDate.getDate()}&dateRange.start.year=${startDate.getFullYear()}&dateRange.end.month=${endDate.getMonth() + 1}&dateRange.end.day=${endDate.getDate()}&dateRange.end.year=${endDate.getFullYear()}&timeGranularity=DAILY&campaigns=${campaignIds}&fields=impressions,clicks,costInLocalCurrency,dateRange`;
    
    try {
      const getLinkedinReport = this.fns.httpsCallable('getLinkedinReport');
      const response: any = await firstValueFrom(getLinkedinReport({ url: url, accessToken: accessToken }));

      this.reportJson = response.elements.map((element: any) => ({
        date: this.convertDateFormat(element.dateRange),
        impressions: element.impressions,
        clicks: element.clicks,
        spend: element.costInLocalCurrency,
      }));
      console.log('LinkedIn report response:', this.reportJson);
    } catch (error) {
      console.error('Error fetching campaign metrics:', error);
    }
  }

  private transformReport(dataArray: any) {
    if (!dataArray) return null;
    let transformedData: any = {};
  
    dataArray.forEach((item: any) => {
      const formattedDate = item.date;
      const campaignData = {
        date: item.date,
        clicks: item.clicks,
        impressions: item.impressions,
        spend: item.spend
      };
  
      transformedData[formattedDate] = campaignData;
    });
  
    return transformedData;
  }

  async processReport(campaign: any, index: number) {
    try {
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;

      await this.getReport(campaign.platforms[index].formData);
      let reportToSave = {
        report: this.transformReport(this.reportJson),
        date: moment.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userId: userId,
        userSearchId: userSearchId + '_' + index,
      };

      this.db.collection('linkedinReport', ref => ref.where('userSearchId', '==', userSearchId + '_' + index))
        .get()
        .subscribe(querySnapshot => {
          if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
              this.db.collection('linkedinReport').doc(doc.id).set(reportToSave)
                .catch(error => {
                  console.error('Error updating report: ', error);
                });
            });
          } else {
            this.db.collection('linkedinReport').add(reportToSave)
              .catch(error => {
                console.error('Error adding report: ', error);
              });
          }
        }, error => {
          console.error('Error checking for existing report: ', error);
        });

      const AllPacingAlerts = this.fns.httpsCallable('AllPacingAlerts');

      const AllPacingAlerts$ = AllPacingAlerts({
        userSearchId: userSearchId, 
        reportJson: this.reportJson, 
        userId: userId,
        platform: "linkedin",
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
    } catch (error) {
      console.error('Error processing Facebook report: ', error);
      return false;
    }
  }

  resetReportVariables() {
    this.reportJson = [];
  }
}
