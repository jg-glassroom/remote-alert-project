import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';

import { AngularFireFunctions } from '@angular/fire/compat/functions';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  queryId = null;
  reportId = null;
  reportLink = null;
  reportJson: any = null;

  constructor(
    private http: HttpClient, 
    private fns: AngularFireFunctions
  ) { }

  async createQuery(campaign: any, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    const body = {
      "metadata": {
        "title": campaign.campaignName + " | " + campaign.startDate + " - " + campaign.endDate,
        "dataRange": {
            "range": "LAST_7_DAYS"
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
    } 
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

  async getReportLink(tries: number = 5) {
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
      const response$ = this.http.get(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}/reports/${this.reportId}`, { headers });
      const data: any = await firstValueFrom(response$);
      
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
        console.log("Failed to get the report link after 3 attempts.");
      }
    }
  }  

  async getReport() {
    const proxyUrl = 'http://localhost:3000/download-csv';
    const fileUrl = encodeURIComponent(`${this.reportLink}`);
    this.http.get(`${proxyUrl}?fileUrl=${fileUrl}`, { responseType: 'text' })
    .subscribe(response => {
      console.log(this.csvToJSON(response));
      this.reportJson = this.csvToJSON(response);
    }, error => {
      console.error("Error uploading CSV file:", error);
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

  async processReport(campaign: any, event?: MouseEvent) {
    await this.createQuery(campaign, event);
    await this.runQuery();
    await this.getReportLink();
    await this.getReport();
    
    const userSearchId = campaign.id;
    const processDataAndInsertIntoFirestore = this.fns.httpsCallable('processDataAndInsertIntoFirestore');

    processDataAndInsertIntoFirestore({ userSearchId: userSearchId, reportJson: this.reportJson }).subscribe(
      (result) => {
        console.log(result);
        this.reportId = null;
        this.reportLink = null;
        this.queryId = null;
        this.reportJson = null;
      },
      (error) => {
        console.error('Error calling function: ', error);
        this.reportId = null;
        this.reportLink = null;
        this.queryId = null;
      }
    );
  }
}