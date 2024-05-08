import { Component, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SubaccountComponent } from '../form/subaccount/subaccount.component';

import { ToastrService } from 'ngx-toastr';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  toaster = inject(ToastrService);
  public pacingAlerts: any[] = [];
  public subaccounts: any[] = [];
  private selectedAccountId: any = '';
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'platforms', 'budget'];
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
    private route: ActivatedRoute
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
    await this.getSubaccounts();
    await this.getAlerts();
  }

  getFilteredAlerts(subaccountId: string): any[] {
    if (!subaccountId) {
      return this.pacingAlerts.filter(alert => !alert.subaccount).sort((a, b) => a.campaignName.localeCompare(b.campaignName));
    }
    return this.pacingAlerts.filter(alert => alert.subaccount && alert.subaccount.id === subaccountId).sort((a, b) => a.campaignName.localeCompare(b.campaignName));
  }

  async getAlerts() {
    return new Promise<void>((resolve, reject) => {
      this.pacingAlerts = [];
      this.db.collection('userSearch', ref => ref.where('accountId', '==', this.selectedAccountId)).get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const pacingAlert = {
            id: doc.id,
            ...doc.data() as any
          };
          this.pacingAlerts.push(pacingAlert);
        });
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  async getSubaccounts() {
    return new Promise<void>((resolve, reject) => {
      this.subaccounts = [];
      this.db.collection('subaccount', ref => ref.where('accountId', '==', this.selectedAccountId)).get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const subaccount = {
            id: doc.id,
            ...doc.data() as any
          };
          this.subaccounts.push(subaccount);
        });
        this.subaccounts.sort((a, b) => a.name.localeCompare(b.name));
        if (this.subaccounts.length > 0) {
          this.subaccounts.push({ id: null, name: 'Without Subaccounts' });
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
            this.toaster.success('Alert rule successfully deleted');
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
  
    dialogRef.afterClosed().subscribe(async () => {
      await this.getData();
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
                this.toaster.success('Subaccount successfully deleted');
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
  
    dialogRef.afterClosed().subscribe(async () => {
      await this.getData();
    });
  }
}
