import { Component, Inject, ElementRef, ViewChild, inject, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Observable, of, firstValueFrom, BehaviorSubject } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../../services/auth.service';
import { ExternalPlatformsService } from '../../../../services/external-platforms.service';
import { CommonService } from '../../../../services/common/common.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-facebook-form',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './facebook-form.component.html',
  styleUrl: './facebook-form.component.css'
})
export class FacebookFormComponent {
  @Output() platformChange = new EventEmitter<string>();
  @Input() platformIndex: number = 0;

  formGroup!: FormGroup;
  submitted: boolean = false;
  isEditMode: boolean = false;
  documentId: string | null = null;
  toaster = inject(ToastrService);
  isLoading: boolean = false;

  public adAccounts: any[] = [];
  private adAccountsSubject = new BehaviorSubject<any[]>([]);
  public adAccounts$ = this.adAccountsSubject.asObservable();
  originalAdAccounts$!: Observable<any[]>;

  originalCampaigns$!: Observable<any[]>;
  campaigns$!: Observable<any[]>;
  campaigns: any = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selection = new SelectionModel<any>(true, []);

  announcer = inject(LiveAnnouncer);

  @ViewChild('campaignInput') campaignInput!: ElementRef<HTMLInputElement>;
  
  constructor(
    private formBuilder: FormBuilder, 
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    public platformsCommon: CommonService,
    private cdRef: ChangeDetectorRef
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }

  async ngOnInit() {
    if (this.isEditMode && this.data.platforms[this.platformIndex]) {
      this.data = this.data.platforms[this.platformIndex].formData;
    }
    this.createForm();
    await this.getAdAccounts();
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      facebookLabel: [this.data?.facebookLabel || null],
      facebookAdAccount: [this.data?.facebookAdAccount || null, [Validators.required]],
      facebookCampaign: [this.data?.facebookCampaign || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
      facebookPlatform: ['facebook', [Validators.required]],
      facebookStartDate: [this.data?.facebookStartDate ? new Date(this.data.facebookStartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      facebookEndDate: [this.data?.facebookEndDate ? new Date(this.data.facebookEndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      facebookBudget: [this.data?.facebookBudget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('facebookStartDate');
    const endDateControl = this.formGroup.get('facebookEndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.platformsCommon.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getAdAccounts();
      this.getAdAccountCampaigns(undefined, true);
    }
    this.cdRef.detectChanges();
  }

  async fetchAllAdAccounts(url: string, adAccounts: any[] = []): Promise<any[]> {
    try {
      const response = await firstValueFrom(this.http.get<any>(url));
      const fetchedAdAccounts = response.data;
      adAccounts = adAccounts.concat(fetchedAdAccounts);
  
      if (response.paging && response.paging.next) {
        return this.fetchAllAdAccounts(response.paging.next, adAccounts);
      } else {
        return adAccounts;
      }
    } catch (error) {
      console.error('Error fetching Facebook Ad Accounts:', error);
      this.toaster.error('Error fetching Facebook Ad Accounts', 'Error');
      throw error;
    }
  }
  
  async getAdAccounts(edit?: boolean) {
    this.isLoading = true;
    const cachedData = localStorage.getItem('adAccounts');
    if (cachedData) {
      this.adAccounts = JSON.parse(cachedData);
      this.adAccountsSubject.next(this.adAccounts);
      this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'facebookAdAccount', 'name', localStorage.getItem("adAccounts"));
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        facebookCampaign: [],
        facebookStartDate: null,
        facebookEndDate: null,
        facebookBudget: null,
      })
      this.campaigns = []
    }
  
    const fields = 'account_id,id,name, business';
    const url = `https://graph.facebook.com/v19.0/me/adaccounts?fields=${fields}&access_token=${localStorage.getItem('facebookAccessToken')}`;
  
    try {
      const allAdAccounts = await this.fetchAllAdAccounts(url);
      const sortedAdAccounts = allAdAccounts.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.adAccounts = sortedAdAccounts;
      this.adAccountsSubject.next(sortedAdAccounts);
      localStorage.setItem('adAccounts', JSON.stringify(allAdAccounts));
      this.isLoading = false;
      this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'facebookAdAccount', 'name', localStorage.getItem("adAccounts"));
    } catch (error) {
      console.error('Error fetching all Facebook Ad Accounts:', error);
      this.isLoading = false;
    }
  }

  async fetchAllCampaigns(url: string, campaigns: any[] = []): Promise<any[]> {
    try {
      const response = await firstValueFrom(this.http.get<any>(url));
      const fetchedCampaigns = response.data;
      campaigns = campaigns.concat(fetchedCampaigns);

      if (response.paging && response.paging.next) {
        return this.fetchAllCampaigns(response.paging.next, campaigns);
      } else {
        return campaigns;
      }
    } catch (error) {
      console.error('Error fetching Facebook Campaigns:', error);
      this.toaster.error('Error fetching Facebook Campaigns', 'Error');
      throw error;
    }
  }

  async getAdAccountCampaigns(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    this.isLoading = true;
    const fields = 'id,name,status';
    let adAccount: any = null
    if (event) {
      adAccount = event.option.value;
    } else {
      adAccount = this.data?.facebookAdAccount;
    }
    if (!adAccount) {
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        facebookCampaign: [],
        facebookStartDate: null,
        facebookEndDate: null,
        facebookBudget: null,
      })
      this.campaigns = []
    } else {
      this.campaigns = this.data?.facebookCampaign;
    }

    const url = `https://graph.facebook.com/v19.0/${adAccount.id}/campaigns?fields=${fields}&access_token=${localStorage.getItem('facebookAccessToken')}`;
    
    try {
      const allCampaigns = await this.fetchAllCampaigns(url);
      const sortedCampaigns = allCampaigns.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.campaigns$ = of(sortedCampaigns);
      this.originalCampaigns$ = of(sortedCampaigns);
      this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, 'facebookCampaign', this.originalCampaigns$, 'name');
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching all Facebook Campaigns:', error);
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  displayFn(facebookAdAccount: any): string {
    return facebookAdAccount && facebookAdAccount.name ? facebookAdAccount.name : '';
  }

  combineAndTruncateName(campaign: any, num: number): string {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }

  refreshData() {
    localStorage.removeItem('adAccounts');
    this.formGroup.patchValue({
      facebookAdAccount: null,
      facebookStartDate: null,
      facebookEndDate: null,
      facebookBudget: null,
      facebookCampaign: [],
    });
    this.originalCampaigns$ = of([]);
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.selection.clear();
  }

  public getFormData(): any {
    if (this.formGroup.valid) {
      const user = getAuth().currentUser;
      if (user)  {
        const formData = {
          ...this.formGroup.value,
          facebookStartDate: this.platformsCommon.formatDate(this.formGroup.value.facebookStartDate),
          facebookEndDate: this.platformsCommon.formatDate(this.formGroup.value.facebookEndDate),
          userId: user.uid
        };
        return formData;
      } else {
        throw new Error('User not logged in');
      }
    } else {
      this.platformsCommon.validateAllFormFields(this.formGroup);
      return null;
    }
  }

  changePlatform(newPlatform: string) {
    this.platformChange.emit(newPlatform);
  }
}
