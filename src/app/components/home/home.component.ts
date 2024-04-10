import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ReportService } from '../../services/report.service';

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
    private reportService: ReportService
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
    } else {
      return element.facebookCampaign.map((c: any) => c.id).join(', ');
    }
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
    this.reportService.processReport(campaign, event);
  }

  getButtonTopPosition(element: any): number {
    if (element.platforms.length === 1) {
      return 1;
    } else {
      return 20;
    }
  }  
}
