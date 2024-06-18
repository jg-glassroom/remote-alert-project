import { Component, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';

import { DialogComponent } from '../dialog/dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SubaccountComponent } from '../form/subaccount/subaccount.component';

import { LineChartComponent } from '../line-chart/line-chart.component';

import { DV360ReportService } from '../../services/reports/dv360/dv360-report.service';
import { FacebookReportService } from '../../services/reports/facebook/facebook-report.service';
import { GoogleAdsReportService } from '../../services/reports/google-ads/google-ads-report.service';
import { BingReportService } from '../../services/reports/bing/bing-report.service';
import { LinkedinReportService } from '../../services/reports/linkedin/linkedin-report.service';
import { AlertsService } from '../../services/alerts/alerts.service';
import { CommonService } from '../../services/common/common.service';

import { ToastrService } from 'ngx-toastr';

import { firstValueFrom, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import moment from 'moment';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    LineChartComponent
  ],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  animations: [
    trigger('rotateIcon', [
      state('in', style({ transform: 'rotate(180deg)' })),
      state('out', style({ transform: 'rotate(0deg)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class AlertsComponent {
  @ViewChild('subaccountSelect') subaccountSelect!: MatSelect;
  @ViewChild('platformSelect') platformSelect!: MatSelect;
  @ViewChild('userSelect') userSelect!: MatSelect;
  @ViewChild('alertSelect') alertSelect!: MatSelect;

  toaster = inject(ToastrService);
  private selectedAccountId: any = '';
  users: any = [];
  headerColumns = [{
    name: 'Campaign Name', startDate: 'Start Date', endDate: 'End Date', platforms: 'Platforms', budget: 'Budget'
  }];
  platforms: any = {
    'facebook': 'Facebook',
    'googleAds': 'Google Ads',
    'bing': 'Bing',
    'dv360': 'Display & Video 360',
    'linkedin': 'LinkedIn'
  };
  panelOpenState = false;

  selectedSubaccounts: string[] = [];
  selectedPlatforms: string[] = [];
  selectedUsers: string[] = [];
  selectedAlerts: string[] = [];

  subaccountFilter = new FormControl('');
  platformFilter = new FormControl('');
  userFilter = new FormControl('');
  alertFilter = new FormControl('');

  filteredSubaccountOptions!: Observable<any[]>;
  filteredPlatformOptions!: Observable<any[]>;
  filteredUserOptions!: Observable<any[]>;
  filteredAlertOptions!: Observable<any[]>;

  openPanels: Set<string> = new Set<string>();
  loadingGraphs: Set<string> = new Set();

  isLoading: boolean = false;
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  tooltipData: { [alertId: string]: any } = {};

  accordionStates: any = {};

  constructor(
    private db: AngularFirestore,
    private fns: AngularFireFunctions,
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private DV360ReportService: DV360ReportService,
    private linkedinReportService: LinkedinReportService,
    private facebookReportService: FacebookReportService,
    private bingReportService: BingReportService,
    private googleAdsReportService: GoogleAdsReportService,
    public alertsService: AlertsService,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const accountId = params.get('accountId');
      if (accountId !== this.selectedAccountId) {
        this.selectedAccountId = accountId;
        this.isLoading = true;
        await this.getData();
        this.applyFilters();
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });

    this.filteredUserOptions = this.userFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.users, 'email'))
    );
  }

  async fetchTooltips(alerts: any[]) {
    for (const alert of alerts) {
      await this.getTooltipAlert(alert);
    }
  }

  async getTooltipAlert(alert: any) {
    const userId = alert.originalPlatforms[0].formData.userId;
    try {
      const user = this.users.find((user: any) => user.id === userId);
      let userEmail = '';
      if (user && user.email) {
        userEmail = user.email;
      }

      let tooltipLabel: any = {};

      if (userEmail) {
        tooltipLabel.creator = `Creator: ${userEmail}\n`;
      }

      if (alert.last_refreshed) {
        const lastUpdated = moment(alert.last_refreshed.toDate()).format('MM/DD/YYYY');
        tooltipLabel.lastUpdated = `Last updated: ${lastUpdated}\n`;
      }

      const processSuccessfully = alert.platforms.every(
        (platform: any) => 
          platform.pacingAlerts &&
          platform.pacingAlerts[platform.platform + '_overall_delta_value']
      );
      tooltipLabel.process = `Process: ${processSuccessfully ? 'Success' : 'Failed'}`;

      this.tooltipData[alert.id] = tooltipLabel;
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.tooltipData[alert.id] = 'Error fetching tooltip data';
    }
  }

  getPacingInfo(alert: any, index: any): any {
    const platform = alert.platforms[index];
    return `Last seven days: ${platform.pacingAlerts[platform.platform + '_seven_days_delta_value'].toLocaleString()}%\nYesterday: ${platform.pacingAlerts[platform.platform + '_yesterday_delta_value'].toLocaleString()}%`;
  }

  onSelectionChange(event: any, type: string) {
    switch (type) {
      case 'subaccount':
        this.selectedSubaccounts = event.value;
        break;
      case 'platform':
        this.selectedPlatforms = event.value;
        break;
      case 'user':
        this.selectedUsers = event.value;
        break;
      case 'alert':
        this.selectedAlerts = event.value;
        break;
    }
    this.applyFilters();
  }

  hasOverallDeltaValue(pacingAlert: any): boolean {
    return pacingAlert.platforms &&
        pacingAlert.platforms.some((platform: any) => platform.pacingAlerts && platform.pacingAlerts.hasOwnProperty(platform.platform + '_overall_delta_value'));
  }

  private _filter(value: any, options: any[], field: string): any[] {
    const filterValue = value.toLowerCase();
    const selectedOptions = options.filter(option => 
      this.selectedSubaccounts.includes(option.id) || 
      this.selectedPlatforms.includes(option.key) || 
      this.selectedUsers.includes(option.id) || 
      this.selectedAlerts.includes(option.id)
    );
    const filteredOptions = options.filter(option => option && option[field] && option[field].toLowerCase().includes(filterValue));
  
    const combinedOptions = [...selectedOptions, ...filteredOptions];
    const uniqueOptions = Array.from(new Set(combinedOptions.map(option => JSON.stringify(option))))
                                .map(option => JSON.parse(option));
  
    return uniqueOptions;
  }

  private getFilters(): any {
    this.filteredSubaccountOptions = this.subaccountFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.alertsService.subaccounts, 'name'))
    );

    this.filteredPlatformOptions = this.platformFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.platformKeys().map(key => ({ key, name: this.platforms[key] })), 'name'))
    );

    this.filteredUserOptions = this.userFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.users, 'email'))
    );
  }

  async getData() {
    this.isLoading = true;
    this.cdr.detectChanges();
    await this.getAlerts();
    await this.getSubaccounts();
    await this.getUsers();
    this.getFilters();
    this.applyFilters();
    await this.fetchTooltips(this.alertsService.pacingAlerts);
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  getFilteredAlerts(subaccountId: string | null): any[] {
    return this.alertsService.pacingAlerts
      .filter(alert => {
        if (this.selectedSubaccounts.length > 0 && subaccountId !== null && !this.selectedSubaccounts.includes(subaccountId)) {
          return false;
        }
        if (this.selectedAlerts.length > 0 && !this.selectedAlerts.includes(alert.id)) {
          return false;
        }
        if (this.selectedUsers.length > 0 && !alert.platforms.some((platform: any) => this.selectedUsers.includes(platform.formData.userId))) {
          return false;
        }
        return true;
      })
      .map(alert => {
        if (this.selectedPlatforms.length > 0) {
          alert.platforms = alert.originalPlatforms.filter((p: any) => this.selectedPlatforms.includes(p.platform));
        } else {
          alert.platforms = alert.originalPlatforms;
        }
        return alert;
      })
      .filter(alert => alert.platforms.length > 0 && (subaccountId ? alert.subaccount && alert.subaccount.id === subaccountId : !alert.subaccount))
      .sort((a, b) => a.campaignName.localeCompare(b.campaignName));
  }

  filteredSubaccounts(): any[] {
    if (this.selectedSubaccounts.length > 0) {
      return this.alertsService.subaccounts.filter(subaccount => this.selectedSubaccounts.includes(subaccount.id));
    }
    return this.alertsService.subaccounts;
  }

  async getAlerts() {
    return new Promise<void>((resolve, reject) => {
      this.alertsService.pacingAlerts = [];
      this.db.collection('userSearch', ref => ref.where('accountId', '==', this.selectedAccountId))
        .snapshotChanges().subscribe(async querySnapshot => {
          let alerts: any = [];
          querySnapshot.forEach(snapshot => {
            const data = snapshot.payload.doc.data() as any;
            const pacingAlert = {
              id: snapshot.payload.doc.id,
              ...data,
              originalPlatforms: data.platforms
            };
            alerts.push(pacingAlert);
          });

          for (const alert of alerts) {
            for (const [index, platform] of alert.platforms.entries()) {
              const collectionName = `${platform.platform}Report`;
              const result: any = await this.db.collection(collectionName, ref => ref.where('userSearchId', '==', alert.id + '_' + index)).get().toPromise();
              const report = result.docs.map((doc: any) => doc.data());
              if (report.length > 0) {
                alert.platforms[index].report = report[0];
                alert.originalPlatforms[index].report = report[0];
              }
            }
          }

          this.alertsService.pacingAlerts = alerts;
          this.cdr.detectChanges();
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  async getUsers() {
    this.users = [];
    const userIds = Array.from(new Set(this.alertsService.pacingAlerts.flatMap(alert => alert.platforms.map((platform: any) => platform.formData.userId))));

    if (userIds.length > 0) {
      const getUserEmails = this.fns.httpsCallable('getUserEmails');
      const emailResponse = await firstValueFrom(getUserEmails({ userIds }));
      this.users = emailResponse.emails.map((user: any) => ({
        id: user.uid,
        email: user.email,
      }));
    }
  }

  async getSubaccounts() {
    return new Promise<void>((resolve, reject) => {
      this.alertsService.subaccounts = [];
      this.db.collection('subaccount', ref => ref.where('accountId', '==', this.selectedAccountId))
        .snapshotChanges().subscribe(querySnapshot => {
          this.alertsService.subaccounts = querySnapshot.map(snapshot => ({
            id: snapshot.payload.doc.id,
            ...snapshot.payload.doc.data() as any
          }));
          this.alertsService.subaccounts.sort((a, b) => a.name.localeCompare(b.name));
          if (this.alertsService.subaccounts.length > 0 && this.getFilteredAlerts(null).length > 0) {
            this.alertsService.subaccounts.push({ id: 0, name: 'Without Subaccounts' });
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
      data: { message: "Are you sure to delete " + row.campaignName + "?" }
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
      this.db.collection(`userSearch`).doc(campaign.id).update(data).then(async () => {
        if (platform.platform === 'dv360') {
          await this.DV360ReportService.processReport(campaign, index);
        }
        if (platform.platform === 'linkedin') {
          await this.linkedinReportService.processReport(campaign, index);
        }
        if (platform.platform === 'facebook') {
          await this.facebookReportService.processReport(campaign, index);
        }
        if (platform.platform === 'bing') {
          await this.bingReportService.processReport(campaign, index);
        }
        if (platform.platform === 'googleAds') {
          await this.googleAdsReportService.processReport(campaign, index);
        }

        data.platforms[index].loading = false;
        if (pacingAlert && pacingAlert.platforms[index]) {
          pacingAlert.platforms[index].loading = false;
        }  
        this.cdr.detectChanges();
      });
    });
  }

  platformKeys(): string[] {
    return Object.keys(this.platforms).sort();
  }

  private filterUsers(): any[] {
    const filteredAlerts = this.alertsService.pacingAlerts
      .filter(alert => {
        if (this.selectedSubaccounts.length > 0 && alert.subaccount) {
          return this.selectedSubaccounts.includes(alert.subaccount.id);
        }
        return true;
      })
      .filter(alert => {
        if (this.selectedPlatforms.length > 0) {
          return alert.platforms.some((platform: any) => this.selectedPlatforms.includes(platform.platform));
        }
        return true;
      });

    const userIds = Array.from(new Set(filteredAlerts.flatMap(alert => alert.platforms.map((platform: any) => platform.formData.userId))));
    return this.users.filter((user: any) => userIds.includes(user.id));
  }

  applyFilters() {
    const filteredAlerts = this.alertsService.pacingAlerts
      .filter(alert => {
        if (this.selectedSubaccounts.length > 0 && alert.subaccount) {
          return this.selectedSubaccounts.includes(alert.subaccount.id);
        }
        return true;
      })
      .filter(alert => {
        if (this.selectedPlatforms.length > 0) {
          return alert.platforms.some((platform: any) => this.selectedPlatforms.includes(platform.platform));
        }
        return true;
      })
      .filter(alert => {
        if (this.selectedUsers.length > 0) {
          return alert.platforms.some((platform: any) => this.selectedUsers.includes(platform.formData.userId));
        }
        return true;
      })
      .filter(alert => {
        if (this.selectedAlerts.length > 0) {
          return this.selectedAlerts.includes(alert.id);
        }
        return true;
      });

    this.alertsService.filteredPacingAlerts = filteredAlerts;

    this.filteredAlertOptions = this.alertFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.alertsService.pacingAlerts.filter(alert =>
        this.selectedSubaccounts.length === 0 || this.selectedSubaccounts.includes(alert.subaccount?.id)
      ).filter(alert =>
        this.selectedPlatforms.length === 0 || alert.platforms.some((platform: any) => this.selectedPlatforms.includes(platform.platform))
      ).sort((a: any, b: any) => a.campaignName.localeCompare(b.campaignName)), 'campaignName'))
    );

    const userIds = Array.from(new Set(filteredAlerts.flatMap(alert => alert.platforms.map((platform: any) => platform.formData.userId))));
    
    const filteredUsers = this.filterUsers();
    this.filteredUserOptions = this.userFilter.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, filteredUsers, 'email'))
    );
  }

  openSelect(selectName: string) {
    switch (selectName) {
      case 'subaccountSelect':
        this.subaccountSelect.open();
        break;
      case 'platformSelect':
        this.platformSelect.open();
        break;
      case 'userSelect':
        this.userSelect.open();
        break;
      case 'alertSelect':
        this.alertSelect.open();
        break;
    }
  }

  toggleAccordion(alertId: string) {
    this.accordionStates[alertId] = !this.accordionStates[alertId];
    if (this.accordionStates[alertId]) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }, 1500);
    }
  }
}
