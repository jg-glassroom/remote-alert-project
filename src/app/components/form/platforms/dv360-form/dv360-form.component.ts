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


interface DV360Response {
  partners: any[];
}

@Component({
  selector: 'app-dv360-form',
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
  templateUrl: './dv360-form.component.html',
  styleUrls: ['./dv360-form.component.css']
})
export class Dv360FormComponent {
  @Output() platformChange = new EventEmitter<string>();
  @Input() platformIndex: number = 0;

  formGroup!: FormGroup;
  submitted: boolean = false;
  isEditMode: boolean = false;
  documentId: string | null = null;
  toaster = inject(ToastrService);
  isLoading: boolean = false;

  public partners: any[] = [];
  private partnersSubject = new BehaviorSubject<any[]>([]);
  public partners$ = this.partnersSubject.asObservable();
  originalPartners$!: Observable<any[]>;

  advertisers$!: Observable<any[]>;
  originalAdvertisers$!: Observable<any[]>;

  originalCampaigns$!: Observable<any[]>;
  campaigns$!: Observable<any[]>;
  campaigns: any = [];

  originalIOs$!: Observable<any[]>;
  IOs$!: Observable<any[]>;
  IOs: any[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selection = new SelectionModel<any>(true, []);
  selectionIO = new SelectionModel<any>(true, []);

  @ViewChild('campaignInput') campaignInput!: ElementRef<HTMLInputElement>;
  @ViewChild('IOInput') IOInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);
  announcerIO = inject(LiveAnnouncer);

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
    this.filterIOsByCampaigns();
  }

  removeCampaign(campaign: any, campaigns: any, selection: any, announcer: any) {
    this.platformsCommon.remove(campaign, campaigns, this.campaigns$, 'campaignId', selection, announcer);
    this.filterIOsByCampaigns();
  }

  selectIO(event: any, IOs: any, IO: any, formGroup: any, selection: any, IOInput: any) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(IOs, IO, 'dv360IO', 'insertionOrderId', formGroup, selection, IOInput);
  }

  removeIO(IO: any, IOs: any, selection: any, announcer: any) {
    this.platformsCommon.remove(IO, IOs, this.IOs$, 'insertionOrderId', selection, announcer);
  }

  async ngOnInit() {
    if (this.isEditMode && this.data.platforms[this.platformIndex]) {
      this.data = this.data.platforms[this.platformIndex].formData;
    }
    this.createForm();
    await this.getDV360Partner();
  }

  displayFn(dv360Partner: any): string {
    return dv360Partner && dv360Partner.displayName ? dv360Partner.displayName : '';
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      dv360Label: [this.data?.dv360Label || null],
      dv360Partner: [this.data?.dv360Partner || null, [Validators.required]],
      dv360Platform: ['dv360', [Validators.required]],
      dv360Advertiser: [this.data?.dv360Advertiser || null, [Validators.required]],
      dv360IO: [this.data?.dv360IO || []],
      dv360CampaignId: [this.data?.dv360CampaignId || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
      dv360StartDate: [this.data?.dv360StartDate ? new Date(this.data.dv360StartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      dv360EndDate: [this.data?.dv360EndDate ? new Date(this.data.dv360EndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
      dv360Budget: [this.data?.dv360Budget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('dv360StartDate');
    const endDateControl = this.formGroup.get('dv360EndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.platformsCommon.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getDV360Partner();
      await this.getDV360Advertiser(undefined, true);
      await this.getDV360Campaign(undefined, true);
      await this.getDV360IO();
    }
  }

  async getDV360Partner(retryCount = 2): Promise<any> {
    this.isLoading = true;
    const cachedData = localStorage.getItem('partners');
    if (cachedData) {
      this.partners = JSON.parse(cachedData);
      this.partnersSubject.next(this.partners);
      this.isLoading = false;
      this.partners$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'dv360Partner', 'displayName', localStorage.getItem("partners"));
      return this.partners;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('dv360AccessToken')}` };
  
    try {
      const response$ = this.http.get<DV360Response>('https://displayvideo.googleapis.com/v3/partners', { headers });
      const data = await firstValueFrom(response$);
      const sortedPartners = data.partners.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
      this.partners = sortedPartners;
      this.partnersSubject.next(sortedPartners);
      localStorage.setItem('partners', JSON.stringify(data.partners));
      this.partnersSubject.next(data.partners);
      this.isLoading = false;
      this.partners$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, 'dv360Partner', 'displayName', localStorage.getItem("partners"));
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error, 'dv360');
        return this.getDV360Partner(retryCount - 1);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching partners', 'Error');
        this.isLoading = false;
      }
    }
  }

  async getDV360Advertiser(event?: MatAutocompleteSelectedEvent, edit?: boolean, retryCount = 2): Promise<void> {
    this.isLoading = true;
    let selectedPartner: any = null
    if (event) {
      selectedPartner = event.option.value;
    } else {
      selectedPartner = this.data?.dv360Partner
    }

    if (!selectedPartner) {
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        dv360CampaignId: [],
        dv360IO: [],
        dv360Advertiser: null,
        dv360StartDate: null,
        dv360EndDate: null,
        dv360Budget: null,
      })
      this.campaigns = []
      this.IOs = []
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('dv360AccessToken')}` };

    try {
      const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers?partnerId=${selectedPartner.partnerId}`, { headers });
      const data: any = await firstValueFrom(response$);

      const storedData = localStorage.getItem('partners');
      const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
      localStorage.setItem('selectedPartner', selectedPartner.partnerId);
      partnersData.forEach((dv360Partner: any) => {
        if (dv360Partner.partnerId === selectedPartner.partnerId) {
          const sortedAdvertisers = data.advertisers.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
          dv360Partner.advertisers = sortedAdvertisers;
          this.advertisers$ = of(dv360Partner.advertisers);
          this.originalAdvertisers$ = of(dv360Partner.advertisers);
          this.advertisers$ = this.platformsCommon.setupFiltering(this.formGroup, 'dv360Advertiser', this.originalAdvertisers$, 'displayName');
        }
      })
      localStorage.setItem('partners', JSON.stringify(partnersData));
      if (edit) {
        await this.getDV360Campaign(undefined, true);
      } else {
        this.isLoading = false;
      }
    } catch (error: any) {
      if (retryCount > 0) {
          await this.externalPlatforms.handleGoogleError(error, 'dv360');
          return this.getDV360Advertiser(event, edit, retryCount - 1);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching advertisers', 'Error');
        this.isLoading = false;
      }
    }
  }

  async getDV360IO(): Promise<void> {
    this.isLoading = true;
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('dv360AccessToken')}` };
    try {
      const advertiserId = this.formGroup.get('dv360Advertiser')!.value.advertiserId;
      const campaignIds = this.formGroup.get('dv360CampaignId')!.value.map((campaign: any) => campaign.campaignId);
  
      const filter = campaignIds.map((id: any) => `campaignId="${id}"`).join(' OR ');
      const url = `https://displayvideo.googleapis.com/v3/advertisers/${advertiserId}/insertionOrders?filter=${encodeURIComponent(filter)}`;
  
      const response = await firstValueFrom(this.http.get(url, { headers }));
      const allIOs = (response as any).insertionOrders || [];
  
      this.originalIOs$ = of(allIOs);
      await this.filterIOsByCampaigns();
      if (this.isEditMode) {
        this.updateIOSelectionInEditMode();
      }

      this.isLoading = false;
    } catch (error: any) {
      console.error('Error fetching IOs:', error);
      this.isLoading = false;
      throw new Error(error);
    }
  }  

  updateIOSelectionInEditMode(): void {
    this.IOs$.subscribe(IOs => {
        const uniqueIOs = new Set();
        const selectedIOs = this.data?.dv360IO || [];
        this.IOs = IOs.filter((IO: any) => {
            if (!uniqueIOs.has(IO.insertionOrderId) && selectedIOs.some((selectedIO: any) => selectedIO.insertionOrderId === IO.insertionOrderId)) {
                uniqueIOs.add(IO.insertionOrderId);
                IO.selected = true;
                this.selectionIO.select(IO);
                return true;
            }
            return false;
        });
    });
  }
  
  async filterIOsByCampaigns() {
    const selectedCampaignIds = this.campaigns.filter((c: any) => c.selected).map((campaign: any) => campaign.campaignId);
    if (this.originalIOs$) {
      this.originalIOs$.subscribe(originalIOs => {
        const filteredIOs = originalIOs.filter((io: any) => selectedCampaignIds.includes(io.campaignId));
        const sortedIOs = filteredIOs.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
        this.IOs$ = of(sortedIOs);
    
        this.IOs.forEach((io: any) => {
          if (!selectedCampaignIds.includes(io.campaignId)) {
            this.selectionIO.deselect(io);
            io.selected = false;
          }
        });
        this.IOs = this.IOs.filter((io: any) => selectedCampaignIds.includes(io.campaignId));
      });
    }
  }

  async getDV360Campaign(event?: MatAutocompleteSelectedEvent, edit?: boolean, retryCount = 2): Promise<void> {
    this.isLoading = true;
    let selectedAdvertiser: any = null
    if (event) {
      selectedAdvertiser = event.option.value;
    } else {
      selectedAdvertiser = this.data?.dv360Advertiser
    }

    if (!selectedAdvertiser) {
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        dv360CampaignId: [],
        dv360IO: [],
        dv360StartDate: null,
        dv360EndDate: null,
        dv360Budget: null,
      })
      this.campaigns = []
      this.IOs = []
    } else {
      this.campaigns = this.data?.dv360CampaignId;
      this.IOs = this.data?.dv360IO;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('dv360AccessToken')}` };
    try {
      const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers/${selectedAdvertiser.advertiserId}/campaigns`, { headers });
      const data: any = await firstValueFrom(response$);

      const storedData = localStorage.getItem('partners');
      const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
      partnersData.forEach((dv360Partner: any) => {
        if (dv360Partner.partnerId === localStorage.getItem('selectedPartner') && dv360Partner.advertisers && dv360Partner.advertisers.length > 0) {
          dv360Partner.advertisers.forEach((dv360Advertiser: any) => {
            if (dv360Advertiser.advertiserId === selectedAdvertiser.advertiserId) {
              const sortedCampaigns = data.campaigns.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
              dv360Advertiser.campaigns = sortedCampaigns;
              this.campaigns$ = of(dv360Advertiser.campaigns);
              this.originalCampaigns$ = of(dv360Advertiser.campaigns);
              this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, 'dv360CampaignId', this.originalCampaigns$, 'displayName');
            }
          })
        }
      })
      localStorage.setItem('partners', JSON.stringify(partnersData));
      if (edit) {
        const campaigns = data.campaigns.map((campaign: any) => {
          const isSelected = this.campaigns.some((selectedCampaign: any) => selectedCampaign.campaignId === campaign.campaignId);
          return {
            ...campaign,
            selected: isSelected,
          };
        });
  
        this.campaigns$ = of(campaigns);
        this.originalCampaigns$ = of(campaigns);
      }
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error, 'dv360');
        return this.getDV360Campaign(event, edit, retryCount - 1);
      } else {
        console.error(error);
        this.toaster.error('An error occurred while fetching campaigns', 'Error');
        this.isLoading = false;
      }
    }
  }

  public getFormData(): any {
    if (this.formGroup.valid) {
      const user = getAuth().currentUser;
      if (user)  {
        const formData = {
          ...this.formGroup.value,
          dv360StartDate: this.platformsCommon.formatDate(this.formGroup.value.dv360StartDate),
          dv360EndDate: this.platformsCommon.formatDate(this.formGroup.value.dv360EndDate),
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
    localStorage.removeItem('partners');
    localStorage.removeItem('selectedPartner');
    this.formGroup.patchValue({
      dv360Partner: null,
      dv360Advertiser: null,
      dv360StartDate: null,
      dv360EndDate: null,
      dv360Budget: null,
      dv360CampaignId: [],
      dv360IO: [],
    });
    this.advertisers$ = of([]);
    this.originalAdvertisers$ = of([]);
    this.originalCampaigns$ = of([]);
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.IOs$ = of([]);
    this.IOs = [];
    this.originalIOs$ = of([]);
    this.selectionIO.clear();
    this.selection.clear();
  }

  changePlatform(newPlatform: string) {
    this.platformChange.emit(newPlatform);
  }
}
