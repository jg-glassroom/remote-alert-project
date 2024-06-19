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

import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../../../services/auth.service';
import { ExternalPlatformsService } from '../../../../services/external-platforms.service';
import { CommonService } from '../../../../services/common/common.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-bing-form',
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
  templateUrl: './bing-form.component.html',
  styleUrl: './bing-form.component.css'
})
export class BingFormComponent {
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

  public customers: any[] = [];
  private customersSubject = new BehaviorSubject<any[]>([]);
  public customers$ = this.customersSubject.asObservable();
  originalCustomers$!: Observable<any[]>;

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
    private cdRef: ChangeDetectorRef,
    private fns: AngularFireFunctions
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
    await this.getCustomers();
  }

  selectCampaigns(event: MatAutocompleteSelectedEvent, campaigns: any[], formGroup: FormGroup, selection: SelectionModel<any>, campaignInput: HTMLInputElement) {
    const campaign = event.option.value;
    console.log('AAAAAAAAAAAAAAAA', campaign, campaigns);
    if (!campaigns.some((c: any) => c.id === campaign.id)) {
      console.log('BBBBBBBBBBBBBBB');
      campaigns.push(campaign);
      formGroup.patchValue({ bingCampaign: campaigns });
    } else {
      console.log('CCCCCCCCCCCCCCCC', this.campaigns);
      const index = campaigns.findIndex((c: any) => c.id === campaign.id);
      if (index >= 0) {
        campaigns.splice(index, 1);
        formGroup.patchValue({ bingCampaign: campaigns });
      }
    }
    console.log('XXXXXXXXXX', this.campaigns);
    this.platformsCommon.toggleSelection(campaigns, campaign, 'bingCampaign', 'id', formGroup, selection, campaignInput);

    if (campaignInput) {
        campaignInput.value = '';
    }

    this.cdRef.detectChanges();
  }

  selectCampaign(campaigns: any, campaign:any, formGroup: any, selection: any, campaignInput: any) {
    this.platformsCommon.toggleSelection(campaigns, campaign, 'bingCampaign', 'id', formGroup, selection, campaignInput);

    if (campaignInput) {
        campaignInput.value = '';
    }

    this.cdRef.detectChanges();
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      bingLabel: [this.data?.bingLabel || null],
      bingCustomer: [this.data?.bingCustomer || null, [Validators.required]],
      bingAccount: [this.data?.bingAccount || null, [Validators.required]],
      bingCampaign: [this.data?.bingCampaign || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
      bingPlatform: ['bing', [Validators.required]],
      bingStartDate: [this.data?.bingStartDate ? new Date(this.data.bingStartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      bingEndDate: [this.data?.bingEndDate ? new Date(this.data.bingEndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      bingBudget: [this.data?.bingBudget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('bingStartDate');
    const endDateControl = this.formGroup.get('bingEndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.platformsCommon.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getCustomers();
      this.getAdAccountCampaigns(2, undefined, true);
    }
    this.cdRef.detectChanges();
  }

  extractCustomers(data: any) {
    let customersInfo: any;
    try {
      customersInfo = data['s:Envelope']['s:Body'][0]['GetCustomersInfoResponse'][0]['CustomersInfo'][0]['a:CustomerInfo'];
    } catch (error: any) {
      throw new Error(data.result['s:Envelope']['s:Body'][0]['s:Fault'][0].detail[0].AdApiFaultDetail[0].Errors[0].AdApiError[0].Message[0]);
    }

    const customersList = customersInfo.map((customer: any) => ({
        id: customer['a:Id'][0],
        name: customer['a:Name'][0]
    }));

    customersList.sort((a: any, b: any) => a.name.localeCompare(b.name));

    return customersList;
  }

  extractAccounts(data: any) {
    const accountsInfo = data['s:Envelope']['s:Body'][0]['GetAccountsInfoResponse'][0]['AccountsInfo'][0]['a:AccountInfo'];

    const accountsList = accountsInfo.map((account: any) => ({
        id: account['a:Id'][0],
        name: account['a:Name'][0],
        accountLifeCycleStatus: account['a:AccountLifeCycleStatus'][0],
    }));

    accountsList.sort((a: any, b: any) => a.name.localeCompare(b.name));

    return accountsList;
  }

  extractCampaigns(data: any) {
    const campaignsInfo = data['s:Envelope']['s:Body'][0]['GetCampaignsByAccountIdResponse'][0]['Campaigns'][0]['Campaign'];

    let campaignsData: any = [];
    if (campaignsInfo) {
      campaignsData = campaignsInfo.map((campaign: any) => ({
        id: campaign['Id'][0],
        name: campaign['Name'][0],
        status: campaign['Status'][0],
        budgetType: campaign['BudgetType'][0],
        dailyBudget: campaign['DailyBudget'][0],
        timeZone: campaign['TimeZone'][0],
        campaignType: campaign['CampaignType'][0],
        languages: campaign['Languages'] && campaign['Languages'][0]['a:string'] ? campaign['Languages'][0]['a:string'] : [],
        customParameters: campaign['UrlCustomParameters'] ? this.extractCustomParameters(campaign['UrlCustomParameters'][0]) : []
      }));

      campaignsData.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }

    return campaignsData;
  }

  extractCustomParameters(customParams: any) {
    if (customParams && customParams.Parameters && customParams.Parameters[0] && customParams.Parameters[0].CustomParameter) {
      return customParams.Parameters[0].CustomParameter.map((param: any) => ({
        key: param.Key[0],
        value: param.Value[0]
      }));
    }
    return [];
  }


  async getCustomers(retryCount = 2): Promise<any> {
    this.isLoading = true;
    const cachedData = localStorage.getItem('customers');
    if (cachedData) {
      this.customers = JSON.parse(cachedData);
      this.customersSubject.next(this.customers);
      this.customers$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'bingCustomer', 'name', localStorage.getItem("customers"));
      this.isLoading = false;
      return;
    }

    try {
      const callable = this.fns.httpsCallable('getBingCustomers');
      const result = await firstValueFrom(callable({ accessToken: localStorage.getItem('microsoftAccessToken') }));

      this.customers = this.extractCustomers(result);

      for (const customer of this.customers) {
        const callableInfo = this.fns.httpsCallable('getBingCustomerInfo');
        const result = await firstValueFrom(callableInfo({ accessToken: localStorage.getItem('microsoftAccessToken'), customerId: customer.id }));
        if (
          result &&
          result['s:Envelope'] &&
          result['s:Envelope']['s:Body'] &&
          result['s:Envelope']['s:Body'][0] &&
          result['s:Envelope']['s:Body'][0]['GetCustomerResponse'] &&
          result['s:Envelope']['s:Body'][0]['GetCustomerResponse'][0] &&
          result['s:Envelope']['s:Body'][0]['GetCustomerResponse'][0]['Customer'][0] &&
          result['s:Envelope']['s:Body'][0]['GetCustomerResponse'][0]['Customer'][0]['a:ServiceLevel'][0] === 'Premium'
        ) {
          customer.isManager = true;
        }
      }

      this.customers = this.customers.filter((customer: any) => customer.isManager);
      this.customersSubject.next(this.customers);
      this.originalCustomers$ = of(this.customers);
      localStorage.setItem('customers', JSON.stringify(this.customers));
      this.customers$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'bingCustomer', 'name', localStorage.getItem("customers"));
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.getCustomers(retryCount - 1);
      } else {
        console.error(error);
        this.toaster.error(error, 'Error');
        this.isLoading = false;
      }
    }
  }

  async getAdAccounts(retryCount = 2, event: MatAutocompleteSelectedEvent): Promise<any> {
    this.isLoading = true;
    let customer: any = null
    if (event) {
      customer = event.option.value;
    } else {
      customer = this.data?.bingCustomer;
    }

    this.formGroup.patchValue({
      bingAccount: null,
      bingStartDate: null,
      bingEndDate: null,
      bingCampaign: [],
    })
    this.campaigns = []

    try {
      const callable = this.fns.httpsCallable('getBingAccounts');
      const result = await firstValueFrom(callable({ accessToken: localStorage.getItem('microsoftAccessToken'), customerId: customer.id}));
      this.adAccounts = this.extractAccounts(result);
      this.adAccountsSubject.next(this.adAccounts);
      this.originalAdAccounts$ = of(this.adAccounts);
      this.adAccounts$ = this.platformsCommon.setupFiltering(this.formGroup, 'bingAccount', this.originalAdAccounts$, 'name');
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.getAdAccounts(retryCount - 1, event);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching Bing accounts', 'Error');
        this.isLoading = false;
      }
    }
  }

  async getAdAccountCampaigns(retryCount = 2, event?: MatAutocompleteSelectedEvent, edit?: boolean): Promise<any> {
    this.isLoading = true;
    let adAccount: any = null
    if (event) {
      adAccount = event.option.value;
    } else {
      adAccount = this.data?.bingAccount;
    }
    if (!adAccount) {
      this.isLoading = false;
      return;
    }
    adAccount = adAccount.id;

    if (!edit) {
      this.formGroup.patchValue({
        bingCampaign: [],
        bingStartDate: null,
        bingEndDate: null,
        bingBudget: null,
      })
      this.campaigns = []
    } else {
      this.formGroup.patchValue({
        bingCampaign: this.data?.bingCampaign,
        bingStartDate: this.data?.bingStartDate ? new Date(this.data.bingStartDate) : null,
        bingEndDate: this.data?.bingEndDate ? new Date(this.data.bingEndDate) : null,
        bingBudget: this.data?.bingBudget,
      });
      this.campaigns = this.data?.bingCampaign;
    }

    try {
      const customerId = this.formGroup.value.bingCustomer.id;
      const callable = this.fns.httpsCallable('getBingCampaigns');
      const result = await firstValueFrom(callable({ accessToken: localStorage.getItem('microsoftAccessToken'), customerId: customerId, accountId: adAccount}));

      const sortedCampaigns = this.extractCampaigns(result);
      this.campaigns$ = of(sortedCampaigns);
      this.originalCampaigns$ = of(sortedCampaigns);
      this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, 'bingCampaign', this.originalCampaigns$, 'name');
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleMicrosoftError();
        return this.getAdAccountCampaigns(retryCount - 1, event);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching Bing campaigns', 'Error');
        this.isLoading = false;
      }
    }
  }

  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  };

  displayFn(account: any): string {
    return account && account && account.name ? account.name : '';
  }

  combineAndTruncateName(campaign: any, num: number): string {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }

  refreshData() {
    localStorage.removeItem('customers');
    this.formGroup.patchValue({
      bingLabel: null,
      bingCustomer: null,
      bingAccount: null,
      bingStartDate: null,
      bingEndDate: null,
      bingBudget: null,
      bingCampaign: [],
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
          bingStartDate: this.platformsCommon.formatDate(this.formGroup.value.bingStartDate),
          bingEndDate: this.platformsCommon.formatDate(this.formGroup.value.bingEndDate),
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
