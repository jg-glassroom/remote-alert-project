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

import { Dv360FormComponent } from '../dv360-form/dv360-form.component';
import { FacebookFormComponent } from '../facebook-form/facebook-form.component';
import { GoogleAdsFormComponent } from '../google-ads-form/google-ads-form.component';

import { ToastrService } from 'ngx-toastr';

import { of } from 'rxjs';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';


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
    MatTabsModule,
    Dv360FormComponent,
    FacebookFormComponent,
    GoogleAdsFormComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChildren(Dv360FormComponent) dv360Forms!: QueryList<Dv360FormComponent>;
  @ViewChildren(FacebookFormComponent) facebookForms!: QueryList<FacebookFormComponent>;
  @ViewChildren(GoogleAdsFormComponent) googleAdsForms!: QueryList<GoogleAdsFormComponent>;

  formGroup = new FormGroup({
    campaignName: new FormControl('', Validators.required),
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

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private DV360ReportService: DV360ReportService,
    private db: AngularFirestore,
    private facebookReportService: FacebookReportService,
    private googleAdsReportService: GoogleAdsReportService,
    public platformsCommon: CommonService,
    private cdRef: ChangeDetectorRef
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.formGroup.get('campaignName')!.setValue(data.campaignName);
      this.documentId = data.id;
      this.tabs = []
      if (data && data.platforms) {
        this.selectPlatforms = data.platforms;
      }
      this.selectPlatforms.forEach((platform: any) => {
        if (platform === 'dv360') {
          this.tabs.push({ name: 'Display & Video 360', value: platform });
        } else if (platform === 'facebook') {
          this.tabs.push({ name: 'Facebook', value: platform });
        } else if (platform === 'googleAds') {
          this.tabs.push({ name: 'Google Ads', value: platform });
        }
      });
    }
  }

  ngOnInit() {}

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };
  
  onSubmit(execute: boolean = false) {
    let allFormData: any = {
      campaignName: this.formGroup.get('campaignName')!.value,
    };
    this.platformsCommon.validateAllFormFields(this.formGroup);
    let platforms: any = [];
    let doSubmit = true;

    if (this.formGroup.get('campaignName')!.value === '') {
      doSubmit = false;
      this.toaster.error('Enter a name for the alert rule');
    }

    if (this.dv360Forms.length === 0 && this.facebookForms.length === 0 && this.googleAdsForms.length === 0) {
      doSubmit = false;
      this.toaster.error('Please select a platform');
    }

    this.dv360Forms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        allFormData = {
          ...formData,
          ...allFormData,
        };
        if (!platforms.includes('dv360')) {
          platforms.push('dv360');
        }
      } else {
        doSubmit = false;
        this.toaster.error('A DV360 form is not valid');
      }
    });

    this.facebookForms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        allFormData = {
          ...formData,
          ...allFormData,
        };
        if (!platforms.includes('facebook')) {
          platforms.push('facebook');
        }
      } else {
        doSubmit = false;
        this.toaster.error('A Facebook form is not valid');
      }
    });

    this.googleAdsForms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        allFormData = {
          ...formData,
          ...allFormData,
        };
        if (!platforms.includes('googleAds')) {
          platforms.push('googleAds');
        }
      } else {
        doSubmit = false;
        this.toaster.error('A Google Ads form is not valid');
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

  prepareUpdateData(platforms: any, allFormData: any) {
    let dataToUpdate: any = allFormData;

    if (!platforms.includes('googleAds')) {
      dataToUpdate.googleAdsAccount = deleteField();
      dataToUpdate.googleAdsBudget = deleteField();
      dataToUpdate.googleAdsCampaign = deleteField();
      dataToUpdate.googleAdsEndDate = deleteField();
      dataToUpdate.googleAdsPlatform = deleteField();
      dataToUpdate.googleAdsStartDate = deleteField();
    }

    if (!platforms.includes('dv360')) {
      dataToUpdate.dv360Advertiser = deleteField();
      dataToUpdate.dv360Budget = deleteField();
      dataToUpdate.dv360CampaignId = deleteField();
      dataToUpdate.dv360EndDate = deleteField();
      dataToUpdate.dv360Partner = deleteField();
      dataToUpdate.dv360Platform = deleteField();
      dataToUpdate.dv360StartDate = deleteField();
    }

    if (!platforms.includes('facebook')) {
      dataToUpdate.facebookAdAccount = deleteField();
      dataToUpdate.facebookBudget = deleteField();
      dataToUpdate.facebookCampaign = deleteField();
      dataToUpdate.facebookEndDate = deleteField();
      dataToUpdate.facebookPlatform = deleteField();
      dataToUpdate.facebookStartDate = deleteField();
    }

    return dataToUpdate;
  }

  async saveData(execute: boolean = false, platforms: any = [], allFormData: any) {
    if (this.isEditMode && this.documentId) {
      const updateData = this.prepareUpdateData(platforms, allFormData);

      return this.db.collection('userSearch').doc(this.documentId).update(updateData).then(() => {
        this.toaster.success('Alert rule updated successfully', 'Success');
        if (execute) {
          if (platforms.includes('dv360')) {
            this.DV360ReportService.processReport({ id: this.documentId, ...updateData });
          }
          if (platforms.includes('facebook')) {
            this.facebookReportService.processReport({ id: this.documentId, ...updateData });
          }
          if (platforms.includes('googleAds')) {
            this.googleAdsReportService.processReport({ id: this.documentId, ...updateData });
          }
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
            if (platforms.includes('dv360')) {
              this.DV360ReportService.processReport(data);
            }
            if (platforms.includes('facebook')) {
              this.facebookReportService.processReport(data);
            }
            if (platforms.includes('googleAds')) {
              this.googleAdsReportService.processReport(data);
            }
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

  refreshData() {
    this.dv360Forms.forEach(form => form.refreshData());
    this.facebookForms.forEach(form => form.refreshData());
    this.googleAdsForms.forEach(form => form.refreshData());
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
    if (!this.selectPlatforms.includes('googleAds')) {
    }
    this.cdRef.detectChanges();
  }

  getPlatform(platform: string, index: number) {
    const platforms: any = {
      'dv360': 'Display & Video 360',
      'facebook': 'Facebook',
      'googleAds': 'Google Ads',
    };
    this.selectPlatforms.push(platform);
    this.tabs[index] = ({ name: platforms[platform], value: platform });
  }

  get showAddTabButton(): boolean {
    const hasDv360 = this.tabs.some((t: any) => t.value === 'dv360');
    const hasFacebook = this.tabs.some((t: any) => t.value === 'facebook');
    const hasGoogleAds = this.tabs.some((t: any) => t.value === 'googleAds');
    return !(hasDv360 && hasFacebook && hasGoogleAds);
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
    }
    return false;
  }
}
