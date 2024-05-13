import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';

import { ExternalPlatformsService } from '../../external-platforms.service';
import { CommonService } from '../../common/common.service';

import { ToastrService } from 'ngx-toastr';

import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class DV360ReportService {
  toaster = inject(ToastrService);
  queryId = null;
  reportId = null;
  reportLink = null;
  reportJson: any = [];

  constructor(
    private http: HttpClient, 
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    public externalPlatforms: ExternalPlatformsService,
    private commonService: CommonService
  ) { }

  async createQuery(campaign: any, campaignId: any, retryCount = 2) {
    try {
      const body = {
        "metadata": {
          "title": campaign.campaignName + " | " + campaign.dv360StartDate + " - " + campaign.dv360EndDate,
          "dataRange": {
              "range": "CUSTOM_DATES",
              "customStartDate": {
                "year": campaign.dv360StartDate.split('/')[2],
                "month": campaign.dv360StartDate.split('/')[0],
                "day": campaign.dv360StartDate.split('/')[1]
              },
              "customEndDate": {
                "year": campaign.dv360EndDate.split('/')[2],
                "month": campaign.dv360EndDate.split('/')[0],
                "day": campaign.dv360EndDate.split('/')[1]
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
            {"type": "FILTER_ADVERTISER", "value": campaign.dv360Advertiser.advertiserId},
            {"type": "FILTER_MEDIA_PLAN", "value": campaignId},
          ]
        },
        "schedule": {
          "startDate": {
            "year": campaign.dv360StartDate.split('/')[2],
            "month": campaign.dv360StartDate.split('/')[0],
            "day": campaign.dv360StartDate.split('/')[1]
          },
          "endDate": {
            "year": campaign.dv360EndDate.split('/')[2],
            "month": campaign.dv360EndDate.split('/')[0],
            "day": campaign.dv360EndDate.split('/')[1]
          },
          "frequency": "ONE_TIME",
        }
      };
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
      const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries`, body, { headers });
      const data: any = await firstValueFrom(response$);
      this.queryId = data.queryId;
      if (data && data.key) {
        this.reportId = data.key.reportId;
      }
    } catch (error: any) {
      if (retryCount > 0) {
          await this.externalPlatforms.handleGoogleError(error);
          this.createQuery(campaign, campaignId, retryCount - 1);
      } else {
          this.toaster.error('An error occurred while processing Display & Video 360 pacing alerts', 'Error');
      }
    }
  }

  async runQuery(retryCount = 2) {
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
      const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}:run`, {}, { headers });
      const data: any = await firstValueFrom(response$);
      if (data && data.key) {
        this.reportId = data.key.reportId;
      }
    } catch (error: any) {
      if (retryCount > 0) {
          await this.externalPlatforms.handleGoogleError(error);
          this.runQuery(retryCount - 1);
      } else {
          this.toaster.error('An error occurred while processing Display & Video 360 pacing alerts', 'Error');
      }
    }
  }

  async getReportLink(tries: number = 10) {
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
      const response$ = this.http.get(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}/reports/${this.reportId}`, { headers });
      const data: any = await firstValueFrom(response$);
      if (data && data.metadata && data.metadata.googleCloudStoragePath) {
        this.reportLink = data.metadata.googleCloudStoragePath;
        console.log("Report link found:", this.reportLink);
      } else {
        console.log("Report link not found in response:", data);
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

  aggregateData(data: any) {
    const aggregatedData: any = {};

    data.forEach((item: any) => {
        const date = item.Date;

        if (!moment(date, "YYYY/MM/DD", true).isValid()) {
            return;
        }

        if (!aggregatedData[date]) {
            aggregatedData[date] = {
                "Date": date,
                "Advertiser ID": item["Advertiser ID"],
                "Advertiser Currency": item["Advertiser Currency"],
                "CM360 Placement ID": new Set(),
                "Impressions": 0,
                "Billable Impressions": 0,
                "Active View: Eligible Impressions": 0,
                "Active View: Measurable Impressions": 0,
                "Active View: Viewable Impressions": 0,
                "Active View: Average Viewable Time (seconds)": 0,
                "Revenue (Adv Currency)": 0,
                "Clicks": 0,
                "Starts (Video)": 0,
                "Pauses (Video)": 0,
                "Midpoint Views (Video)": 0,
                "Complete Views (Video)": 0,
                "Skips (Video)": 0,
                "Total Conversions": 0,
                "viewableTimeCount": 0
            };
        }

        const entry = aggregatedData[date];
        entry["CM360 Placement ID"].add(item["CM360 Placement ID"]);
        entry["Impressions"] += Number(item["Impressions"]) || 0;
        entry["Billable Impressions"] += Number(item["Billable Impressions"]) || 0;
        entry["Active View: Eligible Impressions"] += Number(item["Active View: Eligible Impressions"]) || 0;
        entry["Active View: Measurable Impressions"] += Number(item["Active View: Measurable Impressions"]) || 0;
        entry["Active View: Viewable Impressions"] += Number(item["Active View: Viewable Impressions"]) || 0;
        entry["Revenue (Adv Currency)"] += Number(item["Revenue (Adv Currency)"]) || 0;
        entry["Clicks"] += Number(item["Clicks"]) || 0;
        entry["Starts (Video)"] += Number(item["Starts (Video)"]) || 0;
        entry["Pauses (Video)"] += Number(item["Pauses (Video)"]) || 0;
        entry["Midpoint Views (Video)"] += Number(item["Midpoint Views (Video)"]) || 0;
        entry["Complete Views (Video)"] += Number(item["Complete Views (Video)"]) || 0;
        entry["Skips (Video)"] += Number(item["Skips (Video)"]) || 0;
        entry["Total Conversions"] += Number(item["Total Conversions"]) || 0;
        entry["Active View: Average Viewable Time (seconds)"] += Number(item["Active View: Average Viewable Time (seconds)"]) || 0;
        entry["viewableTimeCount"] += (item["Active View: Average Viewable Time (seconds)"] !== null) ? 1 : 0;
    });

    Object.values(aggregatedData).forEach((item: any) => {
        if (item["viewableTimeCount"] > 0) {
            item["Active View: Average Viewable Time (seconds)"] /= item["viewableTimeCount"];
        }
        item["CM360 Placement ID"] = Array.from(item["CM360 Placement ID"]);
        delete item["viewableTimeCount"];
    });

    return Object.values(aggregatedData);
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
            this.reportJson = this.aggregateData(this.reportJson);
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
      campaignId: campaign.id,
      userId: userId
    };
    this.db.collection('DV360Report').add(reportToSave);
  }

  async processReport(campaign: any, index: number) {
    try {
      for (const item of campaign.platforms[index].formData.dv360CampaignId) {
        await this.createQuery(campaign.platforms[index].formData, item.campaignId);
        await this.runQuery();
        await this.getReportLink();
        await this.getReport();
      }

      const userSearchId = campaign.id;
      const userId = getAuth().currentUser?.uid;
      await this.saveReport(this.reportJson, campaign, userId);
      const AllPacingAlerts = this.fns.httpsCallable('AllPacingAlerts');

      if (this.reportJson) {
        const AllPacingAlerts$ = AllPacingAlerts({
          userSearchId: userSearchId, 
          reportJson: this.reportJson,
          userId: userId,
          platform: "dv360",
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
      } else {
        console.error('reportJson is null, skipping Firestore insertion.');
        this.resetReportVariables();
        return false;
      }
    } catch (error) {
      console.error('Error processing DV360 report: ', error);
      this.resetReportVariables();
      return false;
    }
  }
  
  resetReportVariables() {
    this.reportId = null;
    this.reportLink = null;
    this.queryId = null;
    this.reportJson = [];
  }  
}