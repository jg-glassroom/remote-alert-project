import { Component, Inject, inject, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { deleteField } from "firebase/firestore";
 
import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
import { CommonService } from '../../services/common/common.service';
import { DV360ReportService } from '../../services/reports/dv360/dv360-report.service';
import { FacebookReportService } from '../../services/reports/facebook/facebook-report.service';
import { GoogleAdsReportService } from '../../services/reports/google-ads/google-ads-report.service';
import { BingReportService } from '../../services/reports/bing/bing-report.service';

import { Dv360FormComponent } from '../form/platforms/dv360-form/dv360-form.component';
import { FacebookFormComponent } from '../form/platforms/facebook-form/facebook-form.component';
import { GoogleAdsFormComponent } from '../form/platforms/google-ads-form/google-ads-form.component';
import { BingFormComponent } from '../form/platforms/bing-form/bing-form.component';

import { ToastrService } from 'ngx-toastr';

import { of, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule,
    Dv360FormComponent,
    FacebookFormComponent,
    GoogleAdsFormComponent,
    BingFormComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChildren(Dv360FormComponent) dv360Forms!: QueryList<Dv360FormComponent>;
  @ViewChildren(FacebookFormComponent) facebookForms!: QueryList<FacebookFormComponent>;
  @ViewChildren(GoogleAdsFormComponent) googleAdsForms!: QueryList<GoogleAdsFormComponent>;
  @ViewChildren(BingFormComponent) bingForms!: QueryList<BingFormComponent>;

  formGroup = new FormGroup({
    campaignName: new FormControl('', Validators.required),
    subaccount: new FormControl(null),
  });

  submitted: boolean = false;
  isEditMode: boolean = false;
  documentId: string | null = null;
  toaster = inject(ToastrService);
  isLoading: boolean = false;
  selectPlatforms: any[] = [];
  tabs: any = [{name: 'New platform', value: 'new'}];
  selectedTab = new FormControl(0);
  tabErrors: boolean[] = [];
  subaccounts: any = [];
  filteredSubaccounts!: Observable<any[]>;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    public authService: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private DV360ReportService: DV360ReportService,
    private db: AngularFirestore,
    private facebookReportService: FacebookReportService,
    private googleAdsReportService: GoogleAdsReportService,
    private bingReportService: BingReportService,
    public commonService: CommonService,
    private cdRef: ChangeDetectorRef
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.formGroup.get('campaignName')!.setValue(data.campaignName);
      this.formGroup.get('subaccount')!.setValue(data.subaccount);
      this.documentId = data.id;
      this.tabs = []
      if (data && data.platforms) {
        this.selectPlatforms = data.platforms.map((platformData: any, index: number) => ({
          platform: platformData.platform,
          index: index
        }));
      }
      this.selectPlatforms.forEach((platform: any) => {
        if (platform.platform === 'dv360') {
          this.tabs.push({ name: 'Display & Video 360', value: platform.platform, index: platform.index });
        } else if (platform.platform === 'facebook') {
          this.tabs.push({ name: 'Facebook', value: platform.platform, index: platform.index });
        } else if (platform.platform === 'googleAds') {
          this.tabs.push({ name: 'Google Ads', value: platform.platform, index: platform.index });
        } else if (platform.platform === 'bing') {
          this.tabs.push({ name: 'Bing', value: platform.platform, index: platform.index });
        }
      });
    }
  }

  ngOnInit() {
    this.getSubaccounts().then(() => {
      this.filteredSubaccounts = this.formGroup.get('subaccount')!.valueChanges.pipe(
        startWith(''),
        map((value: any) => {
          if (!value) {
            return '';
          }
          return typeof value === 'string' ? value : value.name;
        }),
        map(name => name ? this._filterSubaccounts(name) : this.subaccounts.slice())
      );
    });
  }

  private _filterSubaccounts(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.subaccounts ? this.subaccounts.filter((subaccount: any) => subaccount.name.toLowerCase().includes(filterValue)) : [];
  }

  displayFn(subaccount: any): string {
    return subaccount && subaccount.name ? subaccount.name : '';
  }

  addSubaccount() {
    const subaccountName: any = this.formGroup.get('subaccount')!.value;
    if (subaccountName !== null && subaccountName.trim() !== '') {
      const newSubaccount: any = { name: this.formGroup.get('subaccount')!.value, accountId: this.commonService.selectedAccountId };
      if (newSubaccount && !this.subaccounts.some((sub: any) => sub.name === newSubaccount.name)) {
        this.db.collection('subaccount').add(newSubaccount).then((docRef) => {
          this.subaccounts.push({ id: docRef.id, ...newSubaccount });
          this.formGroup.get('subaccount')!.setValue({ id: docRef.id, ...newSubaccount });
        }).catch(() => {
          this.toaster.error('Failed to add subaccount', 'Error');
        });
      }
    }
  }

  async getSubaccounts() {
    return new Promise<void>((resolve, reject) => {
      this.subaccounts = [];
      this.db.collection('subaccount', ref => ref.where('accountId', '==', this.commonService.selectedAccountId)).get().subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          const subaccount = {
            id: doc.id,
            ...doc.data() as any
          };
          this.subaccounts.push(subaccount);
        });
        resolve();
      }, error => {
        reject(error);
      });
    });
  }  

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  onSubmit(execute: boolean = false) {
    let allFormData: any = {
      campaignName: this.formGroup.get('campaignName')!.value,
      subaccount: this.formGroup.get('subaccount')!.value,
      accountId: this.commonService.selectedAccountId,
    };
    this.authService.user$.subscribe(user => {
      if (user) {
        allFormData.userId = user.uid;
      }
    });
    this.commonService.validateAllFormFields(this.formGroup);
    let platforms: any[] = [];
    let doSubmit = true;

    if (this.formGroup.get('campaignName')!.value === '') {
      doSubmit = false;
      this.toaster.error('Enter a name for the alert rule');
    }

    if (
      this.dv360Forms.length === 0 &&
      this.facebookForms.length === 0 &&
      this.googleAdsForms.length === 0 &&
      this.bingForms.length === 0
    ) {
      doSubmit = false;
      this.toaster.error('Please select a platform');
    }

    this.dv360Forms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: 'dv360', formData: formData });
      } else {
        doSubmit = false;
        this.toaster.error('A DV360 form is not valid');
      }
    });

    this.facebookForms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: 'facebook', formData: formData });
      } else {
        doSubmit = false;
        this.toaster.error('A Facebook form is not valid');
      }
    });

    this.googleAdsForms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: 'googleAds', formData: formData });
      } else {
        doSubmit = false;
        this.toaster.error('A Google Ads form is not valid');
      }
    });

    this.bingForms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: 'bing', formData: formData });
      } else {
        doSubmit = false;
        this.toaster.error('A Bing form is not valid');
      }
    });

    allFormData.platforms = platforms;

    this.updateValidity();
    this.cdRef.detectChanges();
    if (doSubmit) {
      this.saveData(execute, platforms, allFormData);
    }
    return of(null);
  }

  prepareUpdateData(platforms: any[], allFormData: any) {
    let dataToUpdate: any = allFormData;

    platforms.forEach(platformData => {
      const platform = platformData.platform;
      
      switch(platform) {
        case 'googleAds':
          if (!platforms.includes(platform)) {
            dataToUpdate.googleAdsAccount = deleteField();
            dataToUpdate.googleAdsBudget = deleteField();
            dataToUpdate.googleAdsCampaign = deleteField();
            dataToUpdate.googleAdsEndDate = deleteField();
            dataToUpdate.googleAdsPlatform = deleteField();
            dataToUpdate.googleAdsStartDate = deleteField();
          }
          break;
        case 'dv360':
          if (!platforms.includes(platform)) {
            dataToUpdate.dv360Advertiser = deleteField();
            dataToUpdate.dv360Budget = deleteField();
            dataToUpdate.dv360CampaignId = deleteField();
            dataToUpdate.dv360EndDate = deleteField();
            dataToUpdate.dv360Partner = deleteField();
            dataToUpdate.dv360Platform = deleteField();
            dataToUpdate.dv360StartDate = deleteField();
          }
          break;
        case 'facebook':
          if (!platforms.includes(platform)) {
            dataToUpdate.facebookAdAccount = deleteField();
            dataToUpdate.facebookBudget = deleteField();
            dataToUpdate.facebookCampaign = deleteField();
            dataToUpdate.facebookEndDate = deleteField();
            dataToUpdate.facebookPlatform = deleteField();
            dataToUpdate.facebookStartDate = deleteField();
          }
          break;
        case 'bing':
          if (!platforms.includes(platform)) {
            dataToUpdate.bingAccount = deleteField();
            dataToUpdate.bingBudget = deleteField();
            dataToUpdate.bingCampaign = deleteField();
            dataToUpdate.bingEndDate = deleteField();
            dataToUpdate.bingPlatform = deleteField();
            dataToUpdate.bingStartDate = deleteField();
          }
          break;
      }
    });
    return dataToUpdate;
  }

  async saveData(execute: boolean = false, platforms: any[] = [], allFormData: any) {
    if (this.isEditMode && this.documentId) {
      const updateData = this.prepareUpdateData(platforms, allFormData);

      return this.db.collection('userSearch').doc(this.documentId).update(updateData).then(() => {
        this.toaster.success('Alert rule updated successfully', 'Success');
        if (execute) {
          platforms.forEach(platformData => {
            const platform = platformData.platform;
            const data = updateData[platform];
            if (platform === 'dv360') {
              this.DV360ReportService.processReport({ id: this.documentId, ...data });
            } else if (platform === 'facebook') {
              this.facebookReportService.processReport({ id: this.documentId, ...data });
            } else if (platform === 'googleAds') {
              this.googleAdsReportService.processReport({ id: this.documentId, ...data });
            } else if (platform === 'bing') {
              this.bingReportService.processReport({ id: this.documentId, ...data });
            }
          });
        }
        localStorage.removeItem('partners');
        localStorage.removeItem('selectedPartner');
        localStorage.removeItem('adAccounts');
        this.dialogRef.close(updateData);
        return of(null);
      });
    } else {
      return this.db.collection('userSearch').add(allFormData).then((docRef: any) => {
        return docRef.get().then((doc: any) => {
          if (execute) {
            this.toaster.success('Alert rule created and executed successfully', 'Success');
            let data: any = doc.data();
            data.id = docRef.id;
            platforms.forEach(platformData => {
              const platform = platformData.platform;
              const data = allFormData.platforms[platform];
              if (platform === 'dv360') {
                this.DV360ReportService.processReport(data);
              } else if (platform === 'facebook') {
                this.facebookReportService.processReport(data);
              } else if (platform === 'googleAds') {
                this.googleAdsReportService.processReport(data);
              } else if (platform === 'bing') {
                this.bingReportService.processReport(data);
              }
            });
          } else {
            this.toaster.success('Alert rule created successfully', 'Success');
          }
          localStorage.removeItem('partners');
          localStorage.removeItem('selectedPartner');
          localStorage.removeItem('adAccounts');
          this.dialogRef.close(allFormData);
          return of(null);
        });
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  addTab() {
    this.tabs.push({name: 'New platform', value: 'new'});
    this.selectedTab.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.selectPlatforms = this.selectPlatforms.filter((platform: any) => platform !== this.tabs[index].value);
    this.tabs.splice(index, 1);
    this.selectedTab.setValue(index);
  }

  handlePlatformChange(index: number, newPlatform: string) {
    this.tabs[index].value = newPlatform;
    this.getPlatform(newPlatform, index);
    this.selectPlatforms = Array.from(new Set(this.tabs.map((tab: any) => tab.value)));
    this.cdRef.detectChanges();
  }

  getPlatform(platform: string, index: number) {
    const platforms: any = {
      'dv360': 'Display & Video 360',
      'facebook': 'Facebook',
      'googleAds': 'Google Ads',
      'bing': 'Bing'
    };
    this.selectPlatforms.push(platform);
    this.tabs[index] = ({ name: platforms[platform], value: platform });
  }

  updateValidity() {
    this.tabErrors = this.tabs.map((tab: any, index: any) => this.checkFormValidity(index));
  }

  checkFormValidity(index: number): boolean {
    if (this.tabs[index].value === 'dv360' && this.dv360Forms && this.dv360Forms.toArray().length > index) {
      return this.dv360Forms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === 'facebook' && this.facebookForms && this.facebookForms.toArray().length > index) {
      return this.facebookForms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === 'googleAds' && this.googleAdsForms && this.googleAdsForms.toArray().length > index) {
      return this.googleAdsForms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === 'bing' && this.bingForms && this.bingForms.toArray().length > index) {
      return this.bingForms.toArray()[index].formGroup.invalid;
    }
    return false;
  }
}