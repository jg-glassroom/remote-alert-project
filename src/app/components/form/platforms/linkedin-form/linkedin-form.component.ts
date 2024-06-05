import { Component, Inject, ElementRef, ViewChild, inject, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MatButtonModule } from '@angular/material/button';
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
import { AngularFireFunctions } from '@angular/fire/compat/functions';


@Component({
  selector: 'app-linkedin-form',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './linkedin-form.component.html',
  styleUrl: './linkedin-form.component.css'
})
export class LinkedinFormComponent {
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

  originalCampaignGroups$!: Observable<any[]>;
  campaignGroups$!: Observable<any[]>;
  campaignGroups: any = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selection = new SelectionModel<any>(true, []);
  selectionIO = new SelectionModel<any>(true, []);

  @ViewChild('campaignInput') campaignInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor(
    private formBuilder: FormBuilder, 
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public platformsCommon: CommonService,
    private fns: AngularFireFunctions
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  combineAndTruncateName(campaign: any, num: number): string {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }

  selectCampaign(event: MatAutocompleteSelectedEvent, campaigns: any[], formGroup: FormGroup, selection: SelectionModel<any>, campaignInput: HTMLInputElement) {
    const campaign = event.option.value;
    this.platformsCommon.toggleSelection(campaigns, campaign, 'linkedinCampaign', 'id', formGroup, selection, campaignInput);
  }

  removeCampaign(campaign: any, campaigns: any, selection: any, announcer: any) {
    this.platformsCommon.remove(campaign, campaigns, this.campaigns$, 'id', selection, announcer);
  }

  async ngOnInit() {
    if (this.isEditMode && this.data.platforms[this.platformIndex]) {
      this.data = this.data.platforms[this.platformIndex].formData;
    }
    this.createForm();
    await this.getAdAccounts();
  }

  displayFn(element: any): string {
    return element && element.name ? element.name : '';
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      linkedinLabel: [this.data?.linkedinLabel || null],
      linkedinAdAccount: [this.data?.linkedinAdAccount || null, [Validators.required]],
      linkedinCampaignGroup: [this.data?.linkedinCampaignGroup || null, [Validators.required]],
      linkedinPlatform: ['linkedin', [Validators.required]],
      linkedinCampaign: [this.data?.linkedinCampaign || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
      linkedinStartDate: [this.data?.linkedinStartDate ? new Date(this.data.linkedinStartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      linkedinEndDate: [this.data?.linkedinEndDate ? new Date(this.data.linkedinEndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      linkedinBudget: [this.data?.linkedinBudget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('linkedinStartDate');
    const endDateControl = this.formGroup.get('linkedinEndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.platformsCommon.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getAdAccounts();
      await this.getAdAccountCampaigns(undefined, true);
    }
  }

  async fetchAllAdAccounts(url: string, adAccounts: any[] = []): Promise<any[]> {
    const callable = this.fns.httpsCallable('getLinkedinAdAccounts');
    try {
      const response = await firstValueFrom(callable({ url: url, accessToken: localStorage.getItem('linkedinAccessToken') }));
      adAccounts = adAccounts.concat(response.elements);

      if (response.paging && response.paging.next) {
        return this.fetchAllAdAccounts(response.paging.next, adAccounts);
      } else {
        return adAccounts;
      }
    } catch (error) {
      console.error('Error fetching LinkedIn Ad Accounts:', error);
      this.toaster.error('Error fetching LinkedIn Ad Accounts', 'Error');
      throw error;
    }
  }

  async getAdAccounts(edit?: boolean) {
    this.isLoading = true;
    const cachedData = localStorage.getItem('linkedinAdAccount');
    if (cachedData) {
      this.adAccounts = JSON.parse(cachedData);
      this.adAccountsSubject.next(this.adAccounts);
      this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'linkedinAdAccount', 'name', localStorage.getItem("linkedinAdAccount"));
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        linkedinCampaignGroup: null,
        linkedinCampaign: [],
        linkedinStartDate: null,
        linkedinEndDate: null,
        linkedinBudget: null,
      });
      this.campaigns = [];
    }
  
    const url = `https://api.linkedin.com/v2/adAccountsV2?q=search&search.status.values[0]=ACTIVE`;

    try {
      const allAdAccounts = await this.fetchAllAdAccounts(url, []);
      const sortedAdAccounts = allAdAccounts.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.adAccounts = sortedAdAccounts;
      this.adAccountsSubject.next(sortedAdAccounts);
      localStorage.setItem('linkedinAdAccount', JSON.stringify(allAdAccounts));
      this.isLoading = false;
      this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'linkedinAdAccount', 'name', localStorage.getItem("linkedinAdAccount"));
    } catch (error: any) {
      console.error(error);
      this.toaster.error('An error occurred while fetching ad accounts', 'Error');
      this.isLoading = false;
    }
  }

  async fetchAllCampaignGroups(url: string, adAccounts: any[] = []): Promise<any[]> {
    const callable = this.fns.httpsCallable('getLinkedinCampaignGroups');
    try {
      const response = await firstValueFrom(callable({ url: url, accessToken: localStorage.getItem('linkedinAccessToken') }));
      adAccounts = adAccounts.concat(response.elements);

      if (response.paging && response.paging.next) {
        return this.fetchAllCampaignGroups(response.paging.next, adAccounts);
      } else {
        return adAccounts;
      }
    } catch (error) {
      console.error('Error fetching LinkedIn Campaign groups:', error);
      this.toaster.error('Error fetching LinkedIn Campaign groups', 'Error');
      throw error;
    }
  }

  async getCampaignGroups(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    this.isLoading = true;
    let adAccount: any = null;
    if (event) {
      adAccount = event.option.value;
    } else {
      adAccount = this.data?.linkedinAdAccount;
    }
    if (!adAccount) {
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        linkedinCampaign: [],
        linkedinStartDate: null,
        linkedinEndDate: null,
        linkedinBudget: null,
      });
      this.campaigns = [];
    }
  
    const url = `https://api.linkedin.com/rest/adAccounts/${adAccount.id}/adCampaignGroups?q=search&sortOrder=DESCENDING`;

    try {
      const allCampaignGroups = await this.fetchAllCampaignGroups(url, []);
      const sortedCampaignGroups = allCampaignGroups.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.campaignGroups$ = of(sortedCampaignGroups);
      this.originalCampaignGroups$ = of(sortedCampaignGroups);
      this.campaignGroups$ = this.platformsCommon.setupFiltering(this.formGroup, 'linkedinCampaignGroup', this.originalCampaignGroups$, 'name');
      this.isLoading = false;
    } catch (error: any) {
      console.error(error);
      this.toaster.error('An error occurred while fetching campaign groups', 'Error');
      this.isLoading = false;
    }
  }

  async fetchAllCampaigns(url: string, campaigns: any[] = []): Promise<any[]> {
    const callable = this.fns.httpsCallable('getLinkedinCampaigns');
    try {
      const response = await firstValueFrom(callable({ url: url, accessToken: localStorage.getItem('linkedinAccessToken') }));
      const fetchedCampaigns = response.elements;
      campaigns = campaigns.concat(fetchedCampaigns);
  
      if (response.metadata && response.metadata.nextPageToken) {
        const nextUrl = `${url}&pageToken=${response.metadata.nextPageToken}`;
        return this.fetchAllCampaigns(nextUrl, campaigns);
      } else {
        return campaigns;
      }
    } catch (error) {
      console.error('Error fetching LinkedIn Campaigns:', error);
      this.toaster.error('Error fetching LinkedIn Campaigns', 'Error');
      throw error;
    }
  }

  async getAdAccountCampaigns(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    this.isLoading = true;
    let campaignGroup: any = null;
    if (event) {
      campaignGroup = event.option.value;
    } else {
      campaignGroup = this.data?.linkedinAdAccount;
    }
    if (!campaignGroup) {
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        linkedinCampaign: [],
        linkedinStartDate: null,
        linkedinEndDate: null,
        linkedinBudget: null,
      });
      this.campaigns = [];
    } else {
      this.formGroup.patchValue({
        linkedinCampaign: this.data?.linkedinCampaign,
        linkedinStartDate: this.data?.linkedinStartDate ? new Date(this.data.linkedinStartDate) : null,
        linkedinEndDate: this.data?.linkedinEndDate ? new Date(this.data.linkedinEndDate) : null,
        linkedinBudget: this.data?.linkedinBudget,
      });
      this.campaigns = this.data?.linkedinCampaign;
    }

    const url = `https://api.linkedin.com/rest/adAccounts/${this.formGroup.get('linkedinAdAccount')?.value.id}/adCampaigns?q=search&sortOrder=DESCENDING&search.campaignGroup.values[0]=urn:li:sponsoredCampaignGroup:${campaignGroup.id}`;

    try {
      const allCampaigns = await this.fetchAllCampaigns(url, []);
      const sortedCampaigns = allCampaigns.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      if (edit) {
        const campaigns = sortedCampaigns.map((campaign: any) => {
          const isSelected = this.campaigns.some((selectedCampaign: any) => selectedCampaign.id === campaign.id);
          return {
            ...campaign,
            selected: isSelected,
          };
        });
        this.campaigns$ = of(campaigns);
        this.originalCampaigns$ = of(campaigns);
      } else {
        this.campaigns$ = of(sortedCampaigns);
        this.originalCampaigns$ = of(sortedCampaigns);
        this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, 'linkedinCampaign', this.originalCampaigns$, 'name');
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching all LinkedIn Campaigns:', error);
    }
  }

  public getFormData(): any {
    if (this.formGroup.valid) {
      const user = getAuth().currentUser;
      if (user)  {
        const formData = {
          ...this.formGroup.value,
          linkedinStartDate: this.platformsCommon.formatDate(this.formGroup.value.linkedinStartDate),
          linkedinEndDate: this.platformsCommon.formatDate(this.formGroup.value.linkedinEndDate),
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

  refreshData() {
    localStorage.removeItem('linkedinAdAccount');
    this.formGroup.patchValue({
      linkedinAdAccount: null,
      linkedinStartDate: null,
      linkedinEndDate: null,
      linkedinBudget: null,
      linkedinCampaign: [],
    });
    this.adAccounts$ = of([]);
    this.originalAdAccounts$ = of([]);
    this.originalCampaigns$ = of([]);
    this.originalCampaignGroups$ = of([]);
    this.campaignGroups$ = of([]);
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.selection.clear();
  }

  changePlatform(newPlatform: string) {
    this.platformChange.emit(newPlatform);
  }
}
