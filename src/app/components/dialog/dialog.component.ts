import { Component, Inject, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
import { ReportService } from '../../services/report.service';

import { ToastrService } from 'ngx-toastr';

import { Observable, of, firstValueFrom, map, startWith, BehaviorSubject } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';


interface DV360Response {
  partners: any[];
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    MatDatepickerModule, 
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  formGroup!: FormGroup;
  submitted: boolean = false;
  isEditMode: boolean = false;
  initialCampaignName: string = '';
  documentId: string | null = null;
  toaster = inject(ToastrService);

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
    private dialogRef: MatDialogRef<DialogComponent>,
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private reportService: ReportService
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.initialCampaignName = data.campaignName;
      this.documentId = data.id;
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  truncateName(obj: any, num: number) {
    var name = obj.displayName + " | " + obj.campaignId
    if (name.length > num) {
      return name.slice(0, num) + "...";
    } else {
      return name;
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.campaigns.push(value);
    }

    event.chipInput!.clear();

    this.formGroup.get('campaignId')!.setValue(null);
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
    } else {
      this.selection.select(campaign);
      this.addCampaignToChips(campaign);
    }
    this.formGroup.patchValue({
      campaignId: this.campaigns,
    });
  }
  
  addCampaignToChips(campaign: any): void {
    if (!this.campaigns.some((c: any) => c.campaignId === campaign.campaignId)) {
      this.campaigns.push(campaign);
    }
    if (this.campaignInput) {
      this.campaignInput.nativeElement.value = '';
    }
    this.formGroup.get('campaignId')!.setValue(null);
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
    this.formGroup.get('campaignId')!.setValue(null);
  }

  ngOnInit() {
    this.createForm();
    if (this.isEditMode) {
      if (this.data?.platform === 'DV360') {
        this.setupFilteringDV360Partner()
      }
    }
  }

  setupFilteringDV360Partner() {
    this.partners$ = this.formGroup.get('partner')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterPartners(name))
    );
  }


  setupFilteringDV360Advertiser() {
    this.advertisers$ = this.formGroup.get('advertiser')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterAdvertisers(name))
    );
  }


  setupFilteringDV360Campaign() {
    this.campaigns$ = this.formGroup.get('campaignId')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterCampaigns(name))
    );
  }

  filterPartners(filterValue: string): Observable<any[]> {
    return of(JSON.parse(localStorage.getItem("partners")!)).pipe(
      map(partners => 
        partners.filter((partner: any) => partner.displayName.toLowerCase().includes(filterValue))
      )
    );
  }

  filterAdvertisers(filterValue: string): Observable<any[]> {
    if (this.originalAdvertisers$) {
      return this.originalAdvertisers$.pipe(
        map(advertisers => 
          advertisers.filter((advertiser: any) => advertiser.displayName.toLowerCase().includes(filterValue))
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

  displayFn(partner: any): string {
    return partner && partner.displayName ? partner.displayName : '';
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      partner: [this.data?.partner || null, [Validators.required]],
      platform: [this.data?.platform || null, [Validators.required]],
      advertiser: [this.data?.advertiser || null, [Validators.required]],
      campaignName: [this.data?.campaignName || null, Validators.required],
      campaignId: [this.data?.campaignId || [], [Validators.required]],
      startDate: [this.data?.startDate ? new Date(this.data.startDate) : null, [Validators.required, this.isValidDate()]],
      endDate: [this.data?.endDate ? new Date(this.data.endDate) : null, [Validators.required, this.isValidDate()]],
      budget: [this.data?.budget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('startDate');
    const endDateControl = this.formGroup.get('endDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      this.getClient(this.data?.platform);
      this.getAdvertiser(undefined, true);
      this.getCampaign(undefined, true);
    }
  }

  getClient (event: any) {
    const selectedValue = event.value;
    if (selectedValue === 'dv360') {
      this.getDV360Partner();
    }
  }

  async getDV360Partner(retryCount = 2): Promise<any> {
    const cachedData = localStorage.getItem('partners');
    if (cachedData) {
      this.partners = JSON.parse(cachedData);
      this.partnersSubject.next(this.partners);
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
    } catch (error: any) {
      if (retryCount > 0) {
        this.externalPlatforms.handleGoogleError(error).then(() => {
          this.getDV360Partner(retryCount - 1);
        });
      } else {
        this.toaster.error('An error occurred while fetching partners', 'Error');
      }
    }
  }
  

  getAdvertiser(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    if (this.formGroup.get('platform')?.value === 'dv360') {
      this.getDV360Advertiser(event, edit)
    }
  }

  getCampaign(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    if (this.formGroup.get('platform')?.value === 'dv360') {
      this.getDV360Campaign(event, edit)
    }
  }

  async getDV360Advertiser(event?: MatAutocompleteSelectedEvent, edit?: boolean, retryCount = 2) {
    let selectedPartner: any = null
    if (event) {
      selectedPartner = event.option.value;
    } else {
      selectedPartner = this.data?.partner
    }

    if (!edit) {
      this.formGroup.patchValue({
        campaignId: [],
        advertiser: null,
        startDate: null,
        endDate: null,
        budget: null,
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
      partnersData.forEach((partner: any) => {
        if (partner.partnerId === selectedPartner.partnerId) {
          const sortedAdvertisers = data.advertisers.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
          partner.advertisers = sortedAdvertisers;
          this.advertisers$ = of(partner.advertisers);
          this.originalAdvertisers$ = of(partner.advertisers);
          this.setupFilteringDV360Advertiser();
        }
      })
      localStorage.setItem('partners', JSON.stringify(partnersData));
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatforms.handleGoogleError(error).then(() => {
          this.getDV360Advertiser(event, edit, retryCount - 1);
        });
      } else {
        this.toaster.error('An error occurred while fetching advertisers', 'Error');
      }
    }
  }

  async getDV360Campaign(event?: MatAutocompleteSelectedEvent, edit?: boolean, retryCount = 2) {
    let selectedAdvertiser: any = null
    if (event) {
      selectedAdvertiser = event.option.value;
    } else {
      selectedAdvertiser = this.data?.advertiser
    }

    if (!edit) {
      this.formGroup.patchValue({
        campaignId: [],
        startDate: null,
        endDate: null,
        budget: null,
      })
      this.campaigns = []
    } else {
      this.campaigns = this.data?.campaignId;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('googleAccessToken')}` };
    try {
      const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers/${selectedAdvertiser.advertiserId}/campaigns`, { headers });
      const data: any = await firstValueFrom(response$);

      const storedData = localStorage.getItem('partners');
      const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
      partnersData.forEach((partner: any) => {
        if (partner.partnerId === localStorage.getItem('selectedPartner') && partner.advertisers && partner.advertisers.length > 0) {
          partner.advertisers.forEach((advertiser: any) => {
            if (advertiser.advertiserId === selectedAdvertiser.advertiserId) {
              const sortedCampaigns = data.campaigns.sort((a: { displayName: string }, b: { displayName: string }) => a.displayName.localeCompare(b.displayName));
              advertiser.campaigns = sortedCampaigns;
              this.campaigns$ = of(advertiser.campaigns);
              this.originalCampaigns$ = of(advertiser.campaigns);
              this.setupFilteringDV360Campaign();
            }
          })
        }
      })
      localStorage.setItem('partners', JSON.stringify(partnersData));
      if (edit) {
        this.campaigns.forEach((campaign: any) => {
          this.selection.select(campaign);
          this.addCampaignToChips(campaign);
        });
      }
    } catch (error: any) {
      if (retryCount > 0) {
        this.externalPlatforms.handleGoogleError(error).then(() => {
          this.getDV360Campaign(event, edit, retryCount - 1);
        });
      } else {
        this.toaster.error('An error occurred while fetching campaigns', 'Error');
      }
      this.getDV360Campaign(event, edit);
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
  
  onSubmit(execute: boolean = false) {
    this.submitted = true;
    console.log('formData4', this.formGroup);
    if (this.formGroup.valid) {
      console.log('formData3');
      this.auth.user$.pipe(
        first(),
        switchMap(user => {
          if (!user) {
            throw new Error('User not logged in');
          }
          const formData = {
            ...this.formGroup.value,
            startDate: this.formatDate(this.formGroup.value.startDate),
            endDate: this.formatDate(this.formGroup.value.endDate),
            userId: user.uid
          };

          console.log('formData1', formData);
          if (this.isEditMode && this.documentId) {
            console.log('formData', formData);
            return this.db.collection('userSearch').doc(this.documentId).update(formData).then(() => {
              this.toaster.success('Alert rule updated successfully', 'Success');
              if (execute) {
                this.reportService.processReport({ id: this.documentId, ...formData });
              }
              return of(null);
            });
          } else {
            return this.db.collection('userSearch').add(formData).then(docRef => {
              return docRef.get().then(doc => {
                if (execute) {
                  this.toaster.success('Alert rule created and executed successfully', 'Success');
                  let data: any = doc.data();
                  data.id = docRef.id;
                  this.reportService.processReport(data);
                } else {
                  this.toaster.success('Alert rule created successfully', 'Success');
                }
                return of(null);
              });
            });
          }
        })
      ).subscribe({
        next: () => {        
          localStorage.removeItem('partners');
          localStorage.removeItem('selectedPartner');
          this.dialogRef.close();
        },
        error: (error) => {
          localStorage.removeItem('partners');
          localStorage.removeItem('selectedPartner');
          console.error("Error processing document: ", error);
        },
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  refreshData() {
    localStorage.removeItem('partners');
    localStorage.removeItem('selectedPartner');
    const platform = this.formGroup.get('platform');
    this.formGroup.patchValue({
      partner: null,
      advertiser: null,
      startDate: null,
      endDate: null,
      budget: null,
      campaignName: null,
      campaignId: [],
    });
    this.advertisers$ = of([]);
    this.originalAdvertisers$ = of([]);
    this.originalCampaigns$ = of([]);
    this.campaigns$ = of([]);
    this.campaigns = [];
    this.selection.clear();
    if (platform) {
      this.getClient(platform);
    }
  }
}
