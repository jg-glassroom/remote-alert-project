import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatPaginatorModule, MatIconModule, DialogComponent, ConfirmDialogComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumns: string[] = ['campaignName', 'campaignId', 'startDate', 'endDate', 'budget', 'icon'];
  public dataSource = new MatTableDataSource<any>([]);
  queryId = null;
  reportId = null;
  reportLink = null;

  constructor (private db: AngularFirestore, private matDialog: MatDialog, private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getSearch()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.matDialog.open(DialogComponent, {
      width: '70%'
    })
  }

  public getSearch() {
    this.authService.user$.pipe(take(1)).subscribe(user => {
      if (user && user.uid) {
        this.db.collection('userSearch', ref => ref.where('userId', '==', user.uid)).snapshotChanges().subscribe(actions => {
          const data = actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            if (data) {
              return { id, ...data };
            } else {
              return {};
            }
          });
          this.dataSource.data = data; 
        });
      }
    });
  }

  getConcatenatedCampaignIds(campaigns: any[]): string {
    return campaigns.map(c => c.campaignId).join(', ');
  }
  
  editRule(row: any) {
    this.matDialog.open(DialogComponent, {
      width: '70%',
      data: row,
    })
  }

  deleteRow(row: any, event: MouseEvent) {
    event.stopPropagation();

    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '20%',
      data: { message: "Are you sure to delete the alert rule for " + row.campaignName + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.collection('userSearch').doc(row.id).delete()
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
  }

  async createQuery(campaign: any, event: MouseEvent) {
    event.stopPropagation();

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
          'METRIC_CLICKS',
          'METRIC_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME',
          'METRIC_RICH_MEDIA_VIDEO_PLAYS',
          'METRIC_RICH_MEDIA_VIDEO_COMPLETIONS',
          'METRIC_REVENUE_ADVERTISER'
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
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries`, body, { headers });
    const data: any = await firstValueFrom(response$);
    this.queryId = data.queryId;
  }

  async runQuery() {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}:run`, {}, { headers });
    const data: any = await firstValueFrom(response$);
    this.reportId = data.key.reportId;
  }

  async getReportLink(tries: number = 3) {
    try {
      const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
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
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get(`${this.reportLink}`, { headers });
    const data: any = await firstValueFrom(response$);
    console.log("Data report link:", data);
    this.queryId = null;
    this.reportId = null;
    this.reportLink = null;
  }

  async processReport(campaign: any, event: MouseEvent) {
    await this.createQuery(campaign, event);
    await this.runQuery();
    await this.getReportLink();
    await this.getReport();
  }
}
