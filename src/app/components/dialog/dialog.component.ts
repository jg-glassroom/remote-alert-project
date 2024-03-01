import { Component, Inject, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';

import { AuthService } from '../../services/auth.service';
import { Observable, of, firstValueFrom, map, startWith } from 'rxjs';
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
  partners$!: Observable<any[]>;
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
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
      this.autoCompleteCampaign();

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
    })
  }

  autoCompleteCampaign() {
    let selectedCampaign = {
      campaignId: null,
      campaignFlight: {
        plannedSpendAmountMicros: null,
        plannedDates: {
          startDate: null,
          endDate: null,
        }
      },
    };
    if (this.campaigns.length > 0) {
      selectedCampaign = this.campaigns[0];
    }
    this.formGroup.patchValue({
      campaignId: selectedCampaign.campaignId,
    })
    if (selectedCampaign.campaignFlight && selectedCampaign.campaignFlight.plannedDates) {
      if (selectedCampaign.campaignFlight.plannedDates.startDate) {
        const startDate = selectedCampaign.campaignFlight.plannedDates.startDate as { year: number; month: number; day: number; };
        this.formGroup.patchValue({
          startDate: new Date(startDate.year, startDate.month - 1, startDate.day),
        })
      } else {
        this.formGroup.patchValue({
          startDate: null,
        })
      }
      if (selectedCampaign.campaignFlight.plannedDates.endDate) {
        const endDate = selectedCampaign.campaignFlight.plannedDates.endDate as { year: number; month: number; day: number; };
        this.formGroup.patchValue({
          endDate: new Date(endDate.year, endDate.month - 1, endDate.day),
        })
      } else {
        this.formGroup.patchValue({
          endDate: null,
        })
      }
    }
    if (selectedCampaign.campaignFlight && selectedCampaign.campaignFlight.plannedSpendAmountMicros) {
      this.formGroup.patchValue({
        budget: Number(selectedCampaign.campaignFlight.plannedSpendAmountMicros) / 1000000,
      })
    } else {
      this.formGroup.patchValue({
        budget: null,
      })
    }
  }
  
  addCampaignToChips(campaign: any): void {
    if (!this.campaigns.some((c: any) => c.campaignId === campaign.campaignId)) {
      this.campaigns.push(campaign);
      this.autoCompleteCampaign();
    }
    this.campaignInput.nativeElement.value = '';
    this.formGroup.get('campaignId')!.setValue(null);
  }
  
  removeCampaignFromChips(campaign: any): void {
    const index = this.campaigns.findIndex((c: any) => c.campaignId === campaign.campaignId);
    if (index >= 0) {
      this.campaigns.splice(index, 1);
      this.autoCompleteCampaign();
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
    this.setupFilteringPartner();
  }


  setupFilteringPartner() {
    this.partners$ = this.formGroup.get('partner')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterPartners(name))
    );
  }


  setupFilteringAdvertiser() {
    this.advertisers$ = this.formGroup.get('advertiser')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterAdvertisers(name))
    );
  }


  setupFilteringCampaign() {
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
      this.getAdvertiser()
      this.getCampaign()
      this.campaigns = this.data?.campaignId
    }
  }

  async getAdvertiser(event?: MatAutocompleteSelectedEvent) {
    let selectedPartner: any = null
    if (event) {
      selectedPartner = event.option.value;
    } else {
      selectedPartner = this.data?.partner
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers?partnerId=${selectedPartner.partnerId}`, { headers });
    const data: any = await firstValueFrom(response$);

    const storedData = localStorage.getItem('partners');
    const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
    localStorage.setItem('selectedPartner', selectedPartner.partnerId);
    partnersData.forEach((partner: any) => {
      if (partner.partnerId === selectedPartner.partnerId) {
        partner.advertisers = data.advertisers;
        this.advertisers$ = of(partner.advertisers);
        this.originalAdvertisers$ = of(partner.advertisers);
        this.setupFilteringAdvertiser();
      }
    })
    localStorage.setItem('partners', JSON.stringify(partnersData));
  }

  async getCampaign(event?: MatAutocompleteSelectedEvent) {
    let selectedAdvertiser: any = null
    if (event) {
      selectedAdvertiser = event.option.value;
    } else {
      selectedAdvertiser = this.data?.advertiser
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers/${selectedAdvertiser.advertiserId}/campaigns`, { headers });
    const data: any = await firstValueFrom(response$);
    localStorage.setItem('selectedAdvertiser', selectedAdvertiser.partnerId);

    const storedData = localStorage.getItem('partners');
    const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
    partnersData.forEach((partner: any) => {
      if (partner.partnerId === localStorage.getItem('selectedPartner')) {
        partner.advertisers.forEach((advertiser: any) => {
          if (advertiser.advertiserId === selectedAdvertiser.advertiserId) {
            advertiser.campaigns = data.campaigns;
            this.campaigns$ = of(advertiser.campaigns);
            this.originalCampaigns$ = of(advertiser.campaigns);
            this.setupFilteringCampaign();
          }
        })
      }
    })
    if (this.isEditMode) {
      this.data.campaignId.forEach((campaign: any) => {
        this.toggleSelection(campaign)
      });
    }
    localStorage.setItem('partners', JSON.stringify(partnersData));
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
  
  onSubmit() {
    this.submitted = true;
    if (this.formGroup.valid) {
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

          if (this.isEditMode && this.documentId) {
            return this.db.collection('userSearch').doc(this.documentId).update(formData);
          } else {
            return this.db.collection('userSearch').add(formData);
          }
        })
      ).subscribe({
        next: () => this.dialogRef.close(),
        error: (error) => console.error("Error processing document: ", error),
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
