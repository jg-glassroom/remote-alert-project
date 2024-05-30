import { Component, Inject, ElementRef, ViewChild, inject, Output, EventEmitter, Input } from '@angular/core';
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
    private http: HttpClient,
    public platformsCommon: CommonService
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
    const combinedName = `${campaign.displayName} | ${campaign.campaignId}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }

  selectCampaign(event: any, campaigns: any, campaign:any, formGroup: any, selection: any, campaignInput: any) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(campaigns, campaign, 'dv360CampaignId', 'campaignId', formGroup, selection, campaignInput);
  }

  removeCampaign(campaign: any, campaigns: any, selection: any, announcer: any) {
    this.platformsCommon.remove(campaign, campaigns, this.campaigns$, 'campaignId', selection, announcer);
  }

  async ngOnInit() {
    if (this.isEditMode && this.data.platforms[this.platformIndex]) {
      this.data = this.data.platforms[this.platformIndex].formData;
    }
    this.createForm();
    await this.getAdAccounts();
  }

  displayFn(dv360Partner: any): string {
    return dv360Partner && dv360Partner.displayName ? dv360Partner.displayName : '';
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      linkedinLabel: [this.data?.linkedinLabel || null],
      linkedinAdAccount: [this.data?.linkedinAdAccount || null, [Validators.required]],
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
    try {
      const response = await firstValueFrom(this.http.get<any>(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem('linkedinAccessToken')}` } }));
      const fetchedAdAccounts = response.elements;
      adAccounts = adAccounts.concat(fetchedAdAccounts);
  
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
        linkedinCampaign: [],
        linkedinStartDate: null,
        linkedinEndDate: null,
        linkedinBudget: null,
      });
      this.campaigns = [];
    }
  
    const url = `https://api.linkedin.com/v2/adAccountsV2?q=search&search.status.values[0]=ACTIVE`;
  
    try {
      const allAdAccounts = await this.fetchAllAdAccounts(url);
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

  async fetchAllCampaigns(url: string, campaigns: any[] = []): Promise<any[]> {
    try {
      const response = await firstValueFrom(this.http.get<any>(url));
      const fetchedCampaigns = response.elements;
      campaigns = campaigns.concat(fetchedCampaigns);
  
      if (response.metadata && response.metadata.nextPageToken) {
        const nextPageUrl = `${url}&pageToken=${response.metadata.nextPageToken}`;
        return this.fetchAllCampaigns(nextPageUrl, campaigns);
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
    const fields = 'id,name,status';
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
    } else {
      this.formGroup.patchValue({
        linkedinCampaign: this.data?.linkedinCampaign,
        linkedinStartDate: this.data?.linkedinStartDate ? new Date(this.data.linkedinStartDate) : null,
        linkedinEndDate: this.data?.linkedinEndDate ? new Date(this.data.linkedinEndDate) : null,
        linkedinBudget: this.data?.linkedinBudget,
      });
      this.campaigns = this.data?.linkedinCampaign;
    }
  
    const url = `https://api.linkedin.com/rest/adAccounts/${adAccount.id}/adCampaigns?q=search&search.status.values=ACTIVE&search.type.values=SPONSORED_UPDATES&fields=${fields}`;
  
    try {
      const allCampaigns = await this.fetchAllCampaigns(url);
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
          linkedinStartDate: this.platformsCommon.formatDate(this.formGroup.value.dv360StartDate),
          linkedinEndDate: this.platformsCommon.formatDate(this.formGroup.value.dv360EndDate),
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
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.selection.clear();
  }

  changePlatform(newPlatform: string) {
    this.platformChange.emit(newPlatform);
  }
}
