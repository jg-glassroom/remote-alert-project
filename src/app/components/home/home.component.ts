import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DV360ReportService } from '../../services/reports/dv360/dv360-report.service';
import { FacebookReportService } from '../../services/reports/facebook/facebook-report.service';
import { GoogleAdsReportService } from '../../services/reports/google-ads/google-ads-report.service';

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

  public displayedColumns: string[] = ['campaignName', 'platform', 'campaignId', 'startDate', 'endDate', 'budget', 'icon'];
  public dataSource = new MatTableDataSource<any>([]);

  constructor (
    private db: AngularFirestore, 
    private matDialog: MatDialog, 
    private authService: AuthService, 
    private DV360ReportService: DV360ReportService,
    private facebookReportService: FacebookReportService,
    private googleAdsReportService: GoogleAdsReportService
  ) {}

  ngOnInit(): void {
    this.getSearch()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.matDialog.open(DialogComponent, {
      width: '70%',
      height: '90vh'
    }).afterClosed().subscribe(() => {
      this.getSearch();
    });
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

  getConcatenatedCampaignIds(element: any, platform: string): string {
    if (platform === 'dv360') {
      return element.dv360CampaignId.map((c: any) => c.campaignId).join(', ');
    } else if (platform === 'facebook') {
      return element.facebookCampaign.map((c: any) => c.id).join(', ');
    } else if (platform === 'googleAds') {
      return element.googleAdsCampaign.map((c: any) => c.id).join(', ');
    }
    return '';
  }
  
  editRule(row: any) {
    this.matDialog.open(DialogComponent, {
      width: '70%',
      height: '90vh',
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

  processReport(campaign: any, event: MouseEvent) {
    if (campaign.platforms.includes('dv360')) {
      this.DV360ReportService.processReport(campaign, event);
    }
    if (campaign.platforms.includes('facebook')) {
      this.facebookReportService.processReport(campaign);
    }
    if (campaign.platforms.includes('googleAds')) {
      this.googleAdsReportService.processReport(campaign);
    }
  }

  getButtonTopPosition(element: any): number {
    if (element.platforms.length === 1) {
      return 1;
    } else {
      return 20;
    }
  }  
}
