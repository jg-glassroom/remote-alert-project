import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';

import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  queryId = null;
  reportId = null;
  reportLink = null;
  reportJson: any = [];

  constructor(
    private http: HttpClient, 
    private fns: AngularFireFunctions,
    private db: AngularFirestore
  ) { }

  async createQuery(campaign: any, campaignId: any, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    const body = {
      "metadata": {
        "title": campaign.campaignName + " | " + campaign.startDate + " - " + campaign.endDate,
        "dataRange": {
            "range": "CUSTOM_DATES",
            "customStartDate": {
              "year": campaign.startDate.split('/')[2],
              "month": campaign.startDate.split('/')[0],
              "day": campaign.startDate.split('/')[1]
            },
            "customEndDate": {
              "year": campaign.endDate.split('/')[2],
              "month": campaign.endDate.split('/')[0],
              "day": campaign.endDate.split('/')[1]
            }
        },
        "format": "CSV",
      },
      "params": {
        "type": "STANDARD",
        "groupBys": ['FILTER_DATE','FILTER_ADVERTISER','FILTER_ADVERTISER_CURRENCY','FILTER_CM360_PLACEMENT_ID'],
        "metrics": [
          'METRIC_IMPRESSIONS',
          'METRIC_BILLABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME',
          'METRIC_REVENUE_ADVERTISER',
          'METRIC_CLICKS',
          'METRIC_RICH_MEDIA_VIDEO_PLAYS',
          'METRIC_RICH_MEDIA_VIDEO_PAUSES',
          'METRIC_RICH_MEDIA_VIDEO_MIDPOINTS',
          'METRIC_RICH_MEDIA_VIDEO_COMPLETIONS',
          'METRIC_RICH_MEDIA_VIDEO_SKIPS',
          'METRIC_TOTAL_CONVERSIONS'
        ],
        "filters": [
          {"type": "FILTER_ADVERTISER", "value": campaign.advertiser.advertiserId},
          {"type": "FILTER_MEDIA_PLAN", "value": campaignId},
        ]
      },
      "schedule": {
        "startDate": {
          "year": campaign.startDate.split('/')[2],
          "month": campaign.startDate.split('/')[0],
          "day": campaign.startDate.split('/')[1]
        },
        "endDate": {
          "year": campaign.endDate.split('/')[2],
          "month": campaign.endDate.split('/')[0],
          "day": campaign.endDate.split('/')[1]
        },
        "frequency": "ONE_TIME",
      }
    };
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
    const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries`, body, { headers });
    const data: any = await firstValueFrom(response$);
    this.queryId = data.queryId;
  }

  async runQuery() {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
    const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}:run`, {}, { headers });
    const data: any = await firstValueFrom(response$);
    this.reportId = data.key.reportId;
  }

  async getReportLink(tries: number = 10) {
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
      const response$ = this.http.get(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}/reports/${this.reportId}`, { headers });
      const data: any = await firstValueFrom(response$);
      console.log("Report data:", data);
      if (data && data.metadata && data.metadata.googleCloudStoragePath) {
        this.reportLink = data.metadata.googleCloudStoragePath;
        console.log("Report link found:", this.reportLink);
      } else {
        throw new Error("googleCloudStoragePath not found in response");
      }
    } catch (error) {
      console.log(error);
      if (tries > 1) {
        console.log(`Attempt to retrieve report link, remaining tests: ${tries - 1}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        await this.getReportLink(tries - 1);
      } else {
        console.log("Failed to get the report link after 10 attempts.");
      }
    }
  }  

  async getReport(): Promise<void> {
    const proxyUrl = 'https://northamerica-northeast1-glassroom-firebase.cloudfunctions.net/downloadCSV';
    const fileUrl = encodeURIComponent(`${this.reportLink}`);

    return new Promise((resolve, reject) => {
      this.http.get(`${proxyUrl}?fileUrl=${fileUrl}`, { responseType: 'text' })
      .pipe(
        tap((response: any) => {
          try {
            response = this.csvToJSON(response);
            this.reportJson = this.reportJson.concat(response);
            resolve();
          } catch (error) {
            console.error("Error processing CSV file: ", error);
            reject(error);
          }
        }),
        catchError((error: any) => {
          console.error("Error downloading CSV file: ", error);
          reject(error);
          return of(null);
        })
      ).subscribe();
    });
  }  

  csvToJSON(text: string, quoteChar = '"', delimiter = ',') {
    var rows=text.split("\n");
    var headers=rows[0].split(",");

    const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, 'gs');
  
    const match = (line: any) => [...line.matchAll(regex)]
      .map(m => m[2]) 
      .slice(0, -1); 
  
    var lines = text.split('\n');
    const heads = headers ?? match(lines.shift());
    lines = lines.slice(1);
    
    return lines.map(line => {
      return match(line).reduce((acc, cur, i) => {
        const val = cur.length <= 0 ? null : Number(cur) || cur;
        const key = heads[i] ?? `{i}`;
        return { ...acc, [key]: val };
      }, {});
    });
  }

  async saveReport(report: any, campaign: any, userId: any) {
    let resultatAgregat: any = {};

    report.forEach((line: any) => {
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

    let dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;

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
      userId: userId
    };
    this.db.collection('DV360Report').add(reportToSave);
  }

  async processReport(campaign: any, event?: MouseEvent) {
    try {
      for (const item of campaign.campaignId) {
        await this.createQuery(campaign, item.campaignId, event);
        await this.runQuery();
        await this.getReportLink();
        await this.getReport();
      }
      
      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;
      await this.saveReport(this.reportJson, campaign, userId);
      const processDataAndInsertIntoFirestore = this.fns.httpsCallable('processDataAndInsertIntoFirestore');
  
      if (this.reportJson) {
        processDataAndInsertIntoFirestore({ userSearchId: userSearchId, reportJson: this.reportJson, userId: userId }).subscribe(
          () => {
            this.resetReportVariables();
          },
          (error) => {
            console.error('Error calling Firestore function: ', error);
            this.resetReportVariables();
          }
        );
      } else {
        console.error('reportJson is null, skipping Firestore insertion.');
        this.resetReportVariables();
      }
    } catch (error) {
      console.error('Error processing report: ', error);
      this.resetReportVariables();
    }
  }
  
  resetReportVariables() {
    this.reportId = null;
    this.reportLink = null;
    this.queryId = null;
    this.reportJson = [];
  }  
}