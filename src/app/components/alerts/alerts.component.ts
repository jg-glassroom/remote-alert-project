import { Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SubaccountComponent } from '../form/subaccount/subaccount.component';

import { DV360ReportService } from '../../services/reports/dv360/dv360-report.service';
import { FacebookReportService } from '../../services/reports/facebook/facebook-report.service';
import { GoogleAdsReportService } from '../../services/reports/google-ads/google-ads-report.service';
import { BingReportService } from '../../services/reports/bing/bing-report.service';
import { AlertsService } from '../../services/alerts/alerts.service';

import { ToastrService } from 'ngx-toastr';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  toaster = inject(ToastrService);
  private selectedAccountId: any = '';
  displayedColumns: string[] = [
    'name',
    'startDate',
    'endDate',
    'platforms',
    'budget',
    'spend',
    'estimatedSpend',
    'overallPacing',
    'pacing',
    'spendPerDay',
    'yesterdaySpent'
  ];
  headerColumns = [{
    name:'Campaign Name', startDate:'Start Date', endDate:'End Date', platforms:'Platforms', budget:'Budget'
  }];
  platforms: any = {
    'facebook': 'Facebook',
    'googleAds': 'Google Ads',
    'bing': 'Bing',
    'dv360': 'Display & Video 360',
  };
  panelOpenState = false;

  constructor (
    private db: AngularFirestore, 
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private DV360ReportService: DV360ReportService,
    private facebookReportService: FacebookReportService,
    private bingReportService: BingReportService,
    private googleAdsReportService: GoogleAdsReportService,
    public alertsService: AlertsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const accountId = params.get('accountId');
      if (accountId !== this.selectedAccountId) {
        this.selectedAccountId = accountId;
        await this.getData();
      }
    });
  }

  async getData() {
    await this.getAlerts();
    await this.getSubaccounts();
  }

  getFilteredAlerts(subaccountId: string | null): any[] {
    if (!subaccountId) {
      return this.alertsService.pacingAlerts.filter(alert => !alert.subaccount).sort((a, b) => a.campaignName.localeCompare(b.campaignName));
    }
    return this.alertsService.pacingAlerts.filter(alert => alert.subaccount && alert.subaccount.id === subaccountId).sort((a, b) => a.campaignName.localeCompare(b.campaignName));
  }

  async getAlerts() {
    return new Promise<void>((resolve, reject) => {
      this.alertsService.pacingAlerts = [];
      this.db.collection('userSearch', ref => ref.where('accountId', '==', this.selectedAccountId)).get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const pacingAlert = {
            id: doc.id,
            ...doc.data() as any
          };
          this.alertsService.pacingAlerts.push(pacingAlert);
        });
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  async getSubaccounts() {
    return new Promise<void>((resolve, reject) => {
      this.alertsService.subaccounts = [];
      this.db.collection('subaccount', ref => ref.where('accountId', '==', this.selectedAccountId)).get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const subaccount = {
            id: doc.id,
            ...doc.data() as any
          };
          this.alertsService.subaccounts.push(subaccount);
        });
        this.alertsService.subaccounts.sort((a, b) => a.name.localeCompare(b.name));
        if (this.alertsService.subaccounts.length > 0 && this.getFilteredAlerts(null).length > 0) {
          this.alertsService.subaccounts.push({ id: null, name: 'Without Subaccounts' });
        }
        resolve();
      }, error => {
        reject(error);
      });
    });
  }   

  createAlert() {
    this.matDialog.open(DialogComponent, {
      width: '70%',
      height: '90vh'
    }).afterClosed().subscribe(async () => {
      await this.getData();
    });
  }

  deleteAlert(row: any, event: any) {
    event.stopPropagation();

    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '20%',
      data: { message: "Are you sure to delete " + row.name + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.db.doc(`userSearch/${row.id}`).delete()
          .then(async () => {
            await this.getData();
          })
          .catch(error => {
            this.toaster.error('Failed to delete alert rule');
            console.error('Error deleting alert rule:', error);
          });
      }
    });
  }
  
  editAlert(row: any, event: any) {
    event.stopPropagation();

    const dataCopy = JSON.parse(JSON.stringify(row));

    const dialogRef = this.matDialog.open(DialogComponent, {
      width: '70%',
      height: '90vh',
      data: dataCopy
    });
  
    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.getData();
      }
    });
  }

  deleteSubaccount(row: any) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '25%',
      data: { message: "Are you sure to delete " + row.name + "?" }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const searchRef = this.db.collection('userSearch', ref => ref.where('subaccount.id', '==', row.id));
        searchRef.get().subscribe(querySnapshot => {
          const batch = this.db.firestore.batch();
          querySnapshot.forEach(doc => {
            batch.update(doc.ref, { subaccount: null });
          });
  
          batch.commit().then(() => {
            this.db.doc(`subaccount/${row.id}`).delete()
              .then(async () => {
                await this.getData();
              })
              .catch(error => {
                this.toaster.error('Failed to delete subaccount');
                console.error('Error deleting subaccount:', error);
              });
          }).catch(error => {
            this.toaster.error('Failed to update userSearch entries');
            console.error('Error updating userSearch entries:', error);
          });
        });
      }
    });
  }
  
  editSubaccount(row: any) {
    const dataCopy = JSON.parse(JSON.stringify(row));

    const dialogRef = this.matDialog.open(SubaccountComponent, {
      width: '40%',
      data: dataCopy
    });
  
    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.getData();
      }
    });
  }

  processReport(campaign: any, event: MouseEvent) {
    event.stopPropagation();
    campaign.platforms.forEach(async (platform: any, index: number) => {
      let data = campaign;
      data.platforms[index].loading = true;
      const pacingAlert = this.alertsService.pacingAlerts.find(p => p.id === campaign.id);
      if (pacingAlert && pacingAlert.platforms[index]) {
        pacingAlert.platforms[index].loading = true;
      }
      this.db.collection(`userSearch`).doc(campaign.id).update(data).then(() => {
        if (platform.platform === 'dv360') {
          this.DV360ReportService.processReport(campaign, index).then(success => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === 'facebook') {
          this.facebookReportService.processReport(campaign, index).then(success => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === 'bing') {
          this.bingReportService.processReport(campaign, index).then(success => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === 'googleAds') {
          this.googleAdsReportService.processReport(campaign, index).then(success => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
      });
    });
  }
}
