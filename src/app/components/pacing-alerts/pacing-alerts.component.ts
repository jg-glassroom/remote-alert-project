import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from '../../services/auth.service';

import { LineChartComponent } from '../line-chart/line-chart.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { forkJoin, of } from 'rxjs';
import { switchMap, map, take, filter } from 'rxjs/operators';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LineChartComponent,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  templateUrl: './pacing-alerts.component.html',
  styleUrl: './pacing-alerts.component.css'
})
export class PacingAlertsComponent {

  public displayedColumnsAlerts: string[] = ["campaignName", "lineChart", "platform", "budget", "overall", "yesterday", "daily_estimated_cost"];
  public dataSource = new MatTableDataSource<any>([]);
  public originalDataSource = new MatTableDataSource<any>([]);

  campaignNameFilter = new FormControl();
  campaignNames: string[] = [];
  selectedCampaignNames: string[] = [];

  campaignIdFilter = new FormControl();
  campaignIds: string[] = [];
  selectedCampaignIds: string[] = [];

  userFilter = new FormControl();
  users: string[] = [];
  selectedUsers: string[] = [];

  constructor (
    private authService: AuthService,
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(filter((params: any) => params.campaignName)).subscribe((params: any) => {
      this.selectedCampaignNames = [params.campaignName];
      this.campaignNameFilter.setValue(params.campaignName);
    });
    this.getAlerts();
    this.campaignNameFilter.valueChanges.subscribe(value => {
      this.applyFilters();
    });
    this.campaignIdFilter.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  public round(value: number): number {
    return Math.round(value);
  }
  
  public getAlerts() {
    this.authService.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user || !user.uid) {
          return of(null);
        }

        const alerts$ = this.db.collection('Pacing_alerts_datamart', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
          take(1),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as object;
            return { id: a.payload.doc.id, ...(data as any) };
          }))
        );

        const dv360Reports$ = this.db.collection<Report>('dv360Report', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
          take(1),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as object;
            return { id: a.payload.doc.id, ...(data as any) };
          }))
        );

        const facebookReports$ = this.db.collection<Report>('facebookReport', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
          take(1),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as object;
            return { id: a.payload.doc.id, ...(data as any) };
          }))
        );

        const googleAdsReports$ = this.db.collection<Report>('googleAdsReport', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
          take(1),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as object;
            return { id: a.payload.doc.id, ...(data as any) };
          }))
        );

        const bingReports$ = this.db.collection<Report>('bingReport', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
          take(1),
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as object;
            return { id: a.payload.doc.id, ...(data as any) };
          }))
        );

        return forkJoin({
          alerts: alerts$,
          dv360Reports: dv360Reports$,
          facebookReports: facebookReports$,
          googleAdsReports: googleAdsReports$,
          bingReports: bingReports$
        });
      }),
      map((result) => {
        if (!result) {
          return [];
        }

        const { alerts, dv360Reports, facebookReports, googleAdsReports, bingReports } = result;
        return alerts.map(alert => {
          let modifiedAlert = { ...alert };
          const dv360Report = dv360Reports.find(report => report.campaignName === alert.CampaignName);
          if (dv360Report) {
            modifiedAlert.dv360Report = dv360Report.report;
          }
          const facebookReport = facebookReports.find(report => report.campaignName === alert.CampaignName);
          if (facebookReport) {
            modifiedAlert.facebookReport = facebookReport.report;
          }
          const googleAdsReport = googleAdsReports.find(report => report.campaignName === alert.CampaignName);
          if (googleAdsReport) {
            modifiedAlert.googleAdsReport = googleAdsReport.report;
            modifiedAlert.googleAdsReport = this.transformReportData(googleAdsReport.report.results, "googleAds");
          }
          const bingReport = bingReports.find(report => report.campaignName === alert.CampaignName);
          if (bingReport) {
            modifiedAlert.bingReport = this.transformReportData(bingReport.report, "bing");
          }
          return modifiedAlert;
        });
      })
    ).subscribe(data => {
      this.campaignNames = Array.from(new Set(data.map(alert => alert.CampaignName)));
      this.campaignIds = [...new Set(data.flatMap(alert => {
        let ids: any = [];
        if (alert.facebookCampaignID) {
          ids = ids.concat(alert.facebookCampaignID.split(';'));
        }
        if (alert.dv360CampaignID) {
          ids = ids.concat(alert.dv360CampaignID.split(';'));
        }
        if (alert.googleAdsCampaignID) {
          ids = ids.concat(alert.googleAdsCampaignID.split(';'));
        }
        if (alert.bingCampaignID) {
          ids = ids.concat(alert.bingCampaignID.split(';'));
        }
        return ids;
      }))];
      this.users = Array.from(new Set(data.map(alert => alert.CreatedBy)));
      this.dataSource = new MatTableDataSource<any>(data);
      this.originalDataSource = new MatTableDataSource<any>(data);
      this.applyFilters();
    }, error => console.error("Failed to fetch data", error));
  }

  transformReportData(reports: any[], platform: any): any {
    const formattedData: { [key: string]: any } = {};
    if (platform === "googleAds") {
      reports.forEach(report => {
        const date = report.segments.date.replace(/-/g, '/');
        const costInMillions = parseFloat(report.metrics.costMicros) / 1e6;

        if (!formattedData[date]) {
            formattedData[date] = { costMicros: costInMillions };
        } else {
            formattedData[date].costMicros += costInMillions;
        }
      });
    } else if (platform === "bing") {
      reports.forEach(report => {
        const date = report.TimePeriod.replace(/-/g, '/');

        if (!formattedData[date]) {
            formattedData[date] = { Spend: report.Spend };
        } else {
            formattedData[date].Spend += report.Spend;
        }
      });
    }

    return formattedData;
  }

  removeCampaignName(name: string) {
    const index = this.selectedCampaignNames.indexOf(name);
    if (index >= 0) {
      this.selectedCampaignNames.splice(index, 1);
      this.applyFilters();
    }
  }

  toggleCampaignName(campaignName: string) {
    const index = this.selectedCampaignNames.indexOf(campaignName);
  
    if (index >= 0) {
      this.selectedCampaignNames.splice(index, 1);
    } else {
      this.selectedCampaignNames.push(campaignName);
    }
  }

  removeCampaignId(id: string) {
    const index = this.selectedCampaignIds.indexOf(id);
    if (index >= 0) {
      this.selectedCampaignIds.splice(index, 1);
      this.applyFilters();
    }
  }
  
  toggleCampaignId(id: string) {
    const index = this.selectedCampaignIds.indexOf(id);
    if (index >= 0) {
      this.selectedCampaignIds.splice(index, 1);
    } else {
      this.selectedCampaignIds.push(id);
    }
  }

  removeUser(user: string) {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
      this.applyFilters();
    }
  }
  
  toggleUser(user: string) {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  applyFilters() {
    this.dataSource.data = this.originalDataSource.data;

    if (this.selectedCampaignNames.length > 0) {
      this.dataSource.data = this.dataSource.data.filter(data => this.selectedCampaignNames.includes(data.CampaignName));
    }

    if (this.selectedCampaignIds.length > 0) {
      this.dataSource.data = this.dataSource.data.filter(data => {
        const fbCampaignIds = data.facebookCampaignID ? data.facebookCampaignID.split(';') : [];
        const dv360CampaignIds = data.dv360CampaignID ? data.dv360CampaignID.split(';') : [];
        const googleAdsCampaignIds = data.googleAdsCampaignID ? data.googleAdsCampaignID.split(';') : [];
        const bingCampaignIds = data.bingCampaignID ? data.bingCampaignID.split(';') : [];
        return this.selectedCampaignIds.some(id => {
          fbCampaignIds.includes(id) ||
          dv360CampaignIds.includes(id) ||
          googleAdsCampaignIds.includes(id) ||
          bingCampaignIds.includes(id);
        });
      }).map(data => {
        let modifiedData = { ...data };
        const fbCampaignIds = data.facebookCampaignID ? data.facebookCampaignID.split(';') : [];
        const dv360CampaignIds = data.dv360CampaignID ? data.dv360CampaignID.split(';') : [];
        const googleAdsCampaignIds = data.googleAdsCampaignID ? data.googleAdsCampaignID.split(';') : [];
        const bingCampaignIds = data.bingCampaignID ? data.bingCampaignID.split(';') : [];
        
        const fbSelected = this.selectedCampaignIds.some(id => fbCampaignIds.includes(id));
        const dv360Selected = this.selectedCampaignIds.some(id => dv360CampaignIds.includes(id));
        const googleAdsSelected = this.selectedCampaignIds.some(id => googleAdsCampaignIds.includes(id));
        const bingSelected = this.selectedCampaignIds.some(id => bingCampaignIds.includes(id));

        if (fbSelected && !dv360Selected && !googleAdsSelected && !bingSelected) {
            delete modifiedData.dv360Platform;
            delete modifiedData.googleAdsPlatform;
            delete modifiedData.bingPlatform;
        } else if (!fbSelected && dv360Selected && !googleAdsSelected && !bingSelected) {
            delete modifiedData.facebookPlatform;
            delete modifiedData.googleAdsPlatform;
            delete modifiedData.bingPlatform;
        } else if (!fbSelected && !dv360Selected && googleAdsSelected && !bingSelected) {
            delete modifiedData.facebookPlatform;
            delete modifiedData.dv360Platform;
            delete modifiedData.bingPlatform;
        } else if (!fbSelected && !dv360Selected && !googleAdsSelected && bingSelected) {
            delete modifiedData.facebookPlatform;
            delete modifiedData.dv360Platform;
            delete modifiedData.googleAdsPlatform;
        }

        return modifiedData;
      });
    }

    if (this.selectedUsers.length > 0) {
      this.dataSource.data = this.dataSource.data.filter(data => this.selectedUsers.includes(data.CreatedBy));
    }
  }
}
