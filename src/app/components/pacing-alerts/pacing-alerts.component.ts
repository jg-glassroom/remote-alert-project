import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
import { switchMap, map, take } from 'rxjs/operators';


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

  constructor (private authService: AuthService, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.getAlerts();
    this.campaignNameFilter.valueChanges.subscribe(value => {
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

        const dv360Reports$ = this.db.collection<Report>('DV360Report', ref => ref.where('userId', '==', user.uid)).snapshotChanges().pipe(
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

        return forkJoin({ alerts: alerts$, dv360Reports: dv360Reports$, facebookReports: facebookReports$ });
      }),
      map((result) => {
        if (!result) {
          return [];
        }

        const { alerts, dv360Reports, facebookReports } = result;
        return alerts.map(alert => ({
          ...alert,
          dv360Report: dv360Reports.find(report => report.campaignName === alert.CampaignName)?.report,
          facebookReport: facebookReports.find(report => report.campaignName === alert.CampaignName)?.report,
        }));
      })
    ).subscribe(data => {
      this.campaignNames = data.map(alert => alert.CampaignName);
      this.dataSource = new MatTableDataSource<any>(data);
      this.originalDataSource = new MatTableDataSource<any>(data);
    }, error => console.error("Failed to fetch data", error));
  }

  addCampaignName(name: string) {
    if (!this.selectedCampaignNames.includes(name)) {
      this.selectedCampaignNames.push(name);
      this.applyFilters();
    }
  }

  removeCampaignName(name: string) {
    const index = this.selectedCampaignNames.indexOf(name);
    if (index >= 0) {
      this.selectedCampaignNames.splice(index, 1);
      this.applyFilters();
    }
  }

  applyFilters() {
    this.dataSource.data = this.originalDataSource.data
    if (this.selectedCampaignNames.length > 0) {
      this.dataSource.data = this.originalDataSource.data.filter(data => this.selectedCampaignNames.includes(data.CampaignName));
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
}
