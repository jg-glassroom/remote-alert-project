import { Component, Inject, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable, of, firstValueFrom, map, startWith, BehaviorSubject } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
import { ReportService } from '../../services/report.service';
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
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dv360-form.component.html',
  styleUrl: './dv360-form.component.css'
})
export class Dv360FormComponent {
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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selection = new SelectionModel<any>(true, []);

  @ViewChild('campaignInput') campaignInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor(
    private formBuilder: FormBuilder, 
    private db: AngularFirestore, 
    private dialogRef: MatDialogRef<Dv360FormComponent>,
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private reportService: ReportService
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.campaigns.push(value);
    }

    event.chipInput!.clear();

    this.formGroup.get('dv360CampaignId')!.setValue(null);
  }

  truncateName(obj: any, num: number) {
    var name = obj.displayName + " | " + obj.campaignId
    if (name.length > num) {
      return name.slice(0, num) + "...";
    } else {
      return name;
    }
  }
  
  addCampaignToChips(campaign: any): void {
    if (!this.campaigns.some((c: any) => c.campaignId === campaign.campaignId)) {
      this.campaigns.push(campaign);
    }
    if (this.campaignInput) {
      this.campaignInput.nativeElement.value = '';
    }
    this.formGroup.get('dv360CampaignId')!.setValue(null);
  }
  
  removeCampaignFromChips(campaign: any): void {
    const index = this.campaigns.findIndex((c: any) => c.campaignId === campaign.campaignId);
    if (index >= 0) {
      this.campaigns.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedCampaign = event.option.value;
    const index = this.campaigns.findIndex((campaign: any) => campaign === selectedCampaign);

    if (this.selection.isSelected(selectedCampaign)) {
      this.selection.deselect(selectedCampaign);
    } else {
      this.selection.select(selectedCampaign);
    }

    event.option.deselect();
    event.option._getHostElement().blur();
  
    if (index >= 0) {
      this.campaigns.splice(index, 1);
      this.announcer.announce(`Removed ${selectedCampaign.displayName}`);
    } else {
      this.campaigns.push(selectedCampaign);
      this.announcer.announce(`Added ${selectedCampaign.displayName}`);
    }
  
    this.campaignInput.nativeElement.value = '';
    this.formGroup.get('dv360CampaignId')!.setValue(null);
  }

  remove(campaign: string): void {
    const index = this.campaigns.indexOf(campaign);

    if (index >= 0) {
      this.campaigns.splice(index, 1);
      this.selection.deselect(campaign);

      this.announcer.announce(`Removed ${campaign}`);
    }
  }

  toggleSelection(campaign: any): void {
    if (this.selection.isSelected(campaign)) {
      this.selection.deselect(campaign);
      this.removeCampaignFromChips(campaign);
      campaign.selected = false;
    } else {
      this.selection.select(campaign);
      this.addCampaignToChips(campaign);
      campaign.selected = true;
    }
    this.formGroup.patchValue({
      dv360CampaignId: this.campaigns,
    });
  }

  ngOnInit() {
    this.createForm();
    this.getDV360Partner();
    if (this.isEditMode) {
      this.setupFilteringDV360Partner()
    }
  }

  setupFilteringDV360Partner() {
    this.partners$ = this.formGroup.get('dv360Partner')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterPartners(name))
    );
  }


  setupFilteringDV360Advertiser() {
    this.advertisers$ = this.formGroup.get('dv360Advertiser')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterAdvertisers(name))
    );
  }


  setupFilteringDV360Campaign() {
    this.campaigns$ = this.formGroup.get('dv360CampaignId')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterCampaigns(name))
    );
  }

  filterPartners(filterValue: string): Observable<any[]> {
    return of(JSON.parse(localStorage.getItem("partners")!)).pipe(
      map(partners => 
        partners.filter((dv360Partner: any) => dv360Partner.displayName.toLowerCase().includes(filterValue))
      )
    );
  }

  filterAdvertisers(filterValue: string): Observable<any[]> {
    if (this.originalAdvertisers$) {
      return this.originalAdvertisers$.pipe(
        map(advertisers => 
          advertisers.filter((dv360Advertiser: any) => dv360Advertiser.displayName.toLowerCase().includes(filterValue))
        )
      );
    } else {
      return of([]); 
    }
  }

  filterCampaigns(filterValue: string): Observable<any[]> {
    if (this.originalCampaigns$) {
      return this.originalCampaigns$.pipe(
        map(campaigns => 
          campaigns.filter((campaign: any) => campaign.displayName.toLowerCase().includes(filterValue))
        )
      );
    } else {
      return of([]); 
    }
  }

  displayFn(dv360Partner: any): string {
    return dv360Partner && dv360Partner.displayName ? dv360Partner.displayName : '';
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      dv360Partner: [this.data?.dv360Partner || null, [Validators.required]],
      dv360Platform: ['dv360', [Validators.required]],
      dv360Advertiser: [this.data?.dv360Advertiser || null, [Validators.required]],
      dv360CampaignId: [this.data?.dv360CampaignId || [], [Validators.required]],
      dv360StartDate: [this.data?.dv360StartDate ? new Date(this.data.dv360StartDate) : null, [Validators.required, this.isValidDate()]],
      dv360EndDate: [this.data?.dv360EndDate ? new Date(this.data.dv360EndDate) : null, [Validators.required, this.isValidDate()]],
      dv360Budget: [this.data?.dv360Budget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('dv360StartDate');
    const endDateControl = this.formGroup.get('dv360EndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      await this.getDV360Partner();
      this.getDV360Advertiser(undefined, true);
      this.getDV360Campaign(undefined, true);
    }
  }

  async getDV360Partner(retryCount = 2): Promise<any> {
    this.isLoading = true;
    const cachedData = localStorage.getItem('partners');
    if (cachedData) {
      this.partners = JSON.parse(cachedData);
      this.partnersSubject.next(this.partners);
      this.isLoading = false;
      return this.partners;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
  
    try {
      const response$ = this.http.get<DV360Response>('https://displayvideo.googleapis.com/v3/partners', { headers });
      const data = await firstValueFrom(response$);
      const sortedPartners = data.partners.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
      this.partners = sortedPartners;
      this.partnersSubject.next(sortedPartners);
      localStorage.setItem('partners', JSON.stringify(data.partners));
      this.partnersSubject.next(data.partners);
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
          await this.externalPlatforms.handleGoogleError(error);
          return this.getDV360Partner(retryCount - 1);
      } else {
          this.toaster.error('An error occurred while fetching partners', 'Error');
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

    if (!edit) {
      this.formGroup.patchValue({
        dv360CampaignId: [],
        dv360Advertiser: null,
        dv360StartDate: null,
        dv360EndDate: null,
        dv360Budget: null,
      })
      this.campaigns = []
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };

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
          this.setupFilteringDV360Advertiser();
        }
      })
      localStorage.setItem('partners', JSON.stringify(partnersData));
      this.isLoading = false;
    } catch (error: any) {
      if (retryCount > 0) {
          await this.externalPlatforms.handleGoogleError(error);
          return this.getDV360Advertiser(event, edit, retryCount - 1);
      } else {
          this.toaster.error('An error occurred while fetching advertisers', 'Error');
      }
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

    if (!edit) {
      this.formGroup.patchValue({
        dv360CampaignId: [],
        dv360StartDate: null,
        dv360EndDate: null,
        dv360Budget: null,
      })
      this.campaigns = []
    } else {
      this.campaigns = this.data?.dv360CampaignId;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
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
              this.setupFilteringDV360Campaign();
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
          await this.externalPlatforms.handleGoogleError(error);
          return this.getDV360Campaign(event, edit, retryCount - 1);
      } else {
          this.toaster.error('An error occurred while fetching campaigns', 'Error');
      }
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  isValidDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = !isNaN(Date.parse(control.value));
      return isValid ? null : { invalidDate: 'The date is not valid.' };
    };
  }

  startDateBeforeEndDate(startDateControl: AbstractControl): ValidatorFn {
    return (endDateControl: AbstractControl): ValidationErrors | null => {
      if (!startDateControl.value || !endDateControl.value) {
        return null;
      }
      const start = new Date(startDateControl.value);
      const end = new Date(endDateControl.value);
      return start <= end ? null : { dateMismatch: 'Start date must be before end date.' };
    };
  }

  public getFormData(): any {
    if (this.formGroup.valid) {
      const user = getAuth().currentUser;
      if (user)  {
        const formData = {
          ...this.formGroup.value,
          dv360StartDate: this.formatDate(this.formGroup.value.dv360StartDate),
          dv360EndDate: this.formatDate(this.formGroup.value.dv360EndDate),
          userId: user.uid
        };
        return formData;
      } else {
        throw new Error('User not logged in');
      }
    }
    return null;
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
    });
    this.advertisers$ = of([]);
    this.originalAdvertisers$ = of([]);
    this.originalCampaigns$ = of([]);
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.selection.clear();
  }
}
