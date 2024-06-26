import { Component, Inject, ElementRef, ViewChild, inject, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  selector: 'app-google-ads-form',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './google-ads-form.component.html',
  styleUrl: './google-ads-form.component.css'
})
export class GoogleAdsFormComponent {
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
      googleAdsLabel: [this.data?.googleAdsLabel || null],
      googleAdsAccount: [this.data?.googleAdsAccount || null, [Validators.required]],
      googleAdsCampaign: [this.data?.googleAdsCampaign || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
      googleAdsPlatform: ['googleAds', [Validators.required]],
      googleAdsStartDate: [this.data?.googleAdsStartDate ? new Date(this.data.googleAdsStartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      googleAdsEndDate: [this.data?.googleAdsEndDate ? new Date(this.data.googleAdsEndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      googleAdsBudget: [this.data?.googleAdsBudget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('googleAdsStartDate');
    const endDateControl = this.formGroup.get('googleAdsEndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.platformsCommon.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getAdAccounts();
      this.getAdAccountCampaigns(2, undefined, true);
    }
    this.cdRef.detectChanges();
  }
  
  async getAdAccounts(retryCount = 2): Promise<any> {
    this.isLoading = true;
    const cachedData = localStorage.getItem('googleAdsAccounts');
    if (cachedData) {
        this.adAccounts = JSON.parse(cachedData);
        this.adAccountsSubject.next(this.adAccounts);
        this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'googleAdsAccount', 'descriptiveName', localStorage.getItem("googleAdsAccounts"));
        this.isLoading = false;
        return;
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('googleAdsAccessToken')}`,
        'Content-Type': 'application/json',
        'developer-token': 'mkH52QA2KonyxSyJy8TFUw'
    });

    try {
      const googleAdsUrl = `https://googleads.googleapis.com/v16/customers:listAccessibleCustomers`;
      const response: any = await firstValueFrom(this.http.get(googleAdsUrl, { headers: headers }));
      const customerIds = response.resourceNames.map((name: any) => name.split('/')[1]);
      const customerDetails = await this.fetchCustomerDetails(customerIds, headers);
      
      const successfulResponses = customerDetails!.filter(detail => detail.success);
      if (successfulResponses.length > 0) {
        let adAccountMap = new Map();
        successfulResponses.flatMap(detail => detail.data[0].results.map((result: any) => result.customerClient))
            .forEach(account => {
                adAccountMap.set(account.id, account);
            });

        let uniqueAdAccounts = Array.from(adAccountMap.values());
        uniqueAdAccounts = uniqueAdAccounts.filter(account => account.descriptiveName);
        const sortedAdAccounts = uniqueAdAccounts.sort((a, b) => a.descriptiveName.localeCompare(b.descriptiveName));
        this.adAccounts = sortedAdAccounts.filter(account => account.status === 'ENABLED' && account.manager === false);
        this.adAccountsSubject.next(this.adAccounts);
        localStorage.setItem('googleAdsAccounts', JSON.stringify(this.adAccounts));
        this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'googleAdsAccount', 'descriptiveName', localStorage.getItem("googleAdsAccounts"));
      }
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error, 'googleAds');
        return this.getAdAccounts(retryCount - 1);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching Google Ads accounts', 'Error');
        this.isLoading = false;
      }
    }
  }

  async fetchCustomerDetails(customerIds: any, headers: any) {
    const query = `SELECT customer_client.client_customer, customer_client.level, 
                  customer_client.manager, customer_client.descriptive_name, 
                  customer_client.currency_code, customer_client.time_zone, 
                  customer_client.id, customer_client.status
                  FROM customer_client`;

    const body = { 'query': query };

    const detailsPromises = customerIds.map(async (id: any) => {
        const url = `https://googleads.googleapis.com/v16/customers/${id}/googleAds:searchStream`;
        try {
            const response = await firstValueFrom(this.http.post(url, body, { headers }));
            return { success: true, data: response }; 
        } catch (error) {
            return { success: false, error: error, id: id };
        }
    });

    try {
        const results = await Promise.all(detailsPromises);
        return results; 
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return null;
    }
  }

  selectCampaigns(event: MatAutocompleteSelectedEvent, campaigns: any[], formGroup: FormGroup, selection: SelectionModel<any>, campaignInput: HTMLInputElement) {
    const campaign = event.option.value;
    if (!campaigns.some((c: any) => c.id === campaign.id)) {
      campaigns.push(campaign);
      formGroup.patchValue({ facebookCampaign: campaigns });
    } else {
      const index = campaigns.findIndex((c: any) => c.id === campaign.id);
      if (index >= 0) {
        campaigns.splice(index, 1);
        formGroup.patchValue({ facebookCampaign: campaigns });
      }
    }
    this.platformsCommon.toggleSelection(campaigns, campaign, 'googleAdsCampaign', 'id', formGroup, selection, campaignInput);
  }

  selectCampaign(campaigns: any, campaign:any, formGroup: any, selection: any, campaignInput: any) {
    this.platformsCommon.toggleSelection(campaigns, campaign, 'googleAdsCampaign', 'id', formGroup, selection, campaignInput);

    if (campaignInput) {
        campaignInput.value = '';
    }

    this.cdRef.detectChanges();
  }

  async getAdAccountCampaigns(retryCount = 2, event?: MatAutocompleteSelectedEvent, edit?: boolean): Promise<any> {
    this.isLoading = true;
    let adAccount: any = null
    if (event) {
      adAccount = event.option.value;
    } else {
      adAccount = this.data?.googleAdsAccount;
    }
    if (!adAccount) {
      this.isLoading = false;
      return;
    }
    adAccount = adAccount.id;

    if (!edit) {
      this.formGroup.patchValue({
        googleAdsCampaign: [],
        googleAdsStartDate: null,
        googleAdsEndDate: null,
        googleAdsBudget: null,
      })
      this.campaigns = []
    } else {
      this.formGroup.patchValue({
        googleAdsCampaign: this.data?.googleAdsCampaign,
        googleAdsStartDate: this.data?.googleAdsStartDate ? new Date(this.data.googleAdsStartDate) : null,
        googleAdsEndDate: this.data?.googleAdsEndDate ? new Date(this.data.googleAdsEndDate) : null,
        googleAdsBudget: this.data?.googleAdsBudget,
      });
      this.campaigns = this.data?.googleAdsCampaign;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('googleAdsAccessToken')}`,
      'Content-Type': 'application/json',
      'developer-token': 'mkH52QA2KonyxSyJy8TFUw',
      'login-customer-id': '2681551676'
    });

    const url = `https://googleads.googleapis.com/v16/customers/${adAccount}/googleAds:searchStream`;
    const body = {"query": "SELECT campaign.id, campaign.name, campaign.status FROM campaign ORDER BY campaign.id"};
    
    try {
      let allCampaigns = await firstValueFrom(this.http.post<any>(url, body, { headers: headers }));
      if (allCampaigns.length > 0) {
        allCampaigns = allCampaigns[0].results.map((result: any) => result.campaign);
      }
      const sortedCampaigns = allCampaigns.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.campaigns$ = of(sortedCampaigns);
      this.originalCampaigns$ = of(sortedCampaigns);
      this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, 'googleAdsCampaign', this.originalCampaigns$, 'name');
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error, 'googleAds');
        return this.getAdAccountCampaigns(retryCount - 1, event, edit);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching Google Ads campaigns', 'Error');
        this.isLoading = false;
      }
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  displayFn(account: any): string {
    return account && account && account.descriptiveName ? account.descriptiveName : '';
  }

  combineAndTruncateName(campaign: any, num: number): string {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }

  refreshData() {
    localStorage.removeItem('adAccounts');
    this.formGroup.patchValue({
      googleAdsAccount: null,
      googleAdsStartDate: null,
      googleAdsEndDate: null,
      googleAdsBudget: null,
      googleAdsCampaign: [],
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
          googleAdsStartDate: this.platformsCommon.formatDate(this.formGroup.value.googleAdsStartDate),
          googleAdsEndDate: this.platformsCommon.formatDate(this.formGroup.value.googleAdsEndDate),
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
