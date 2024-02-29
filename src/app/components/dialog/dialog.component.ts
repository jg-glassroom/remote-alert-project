import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from '../../services/auth.service';
import { Observable, of, firstValueFrom } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


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
  campaigns$!: Observable<any[]>;

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

  ngOnInit() {
    this.createForm();
    const cachedPartners = localStorage.getItem('partners');
    if (cachedPartners) {
      this.partners$ = of(JSON.parse(cachedPartners));
    } else {
      this.partners$ = of([]);
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
      campaignId: [this.data?.campaignId || null, [Validators.required]],
      startDate: [this.data?.startDate ? new Date(this.data.startDate) : null, [Validators.required, this.isValidDate(), this.endDateNotInFuture()]],
      endDate: [this.data?.endDate ? new Date(this.data.endDate) : null, [Validators.required, this.isValidDate(), this.endDateNotInFuture()]],
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
  }

  async getAdvertiser(event: MatAutocompleteSelectedEvent) {
    const selectedPartner = event.option.value;
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get(`https://displayvideo.googleapis.com/v2/advertisers?partnerId=${selectedPartner.partnerId}`, { headers });
    const data: any = await firstValueFrom(response$);

    const storedData = localStorage.getItem('partners');
    const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
    localStorage.setItem('selectedPartner', selectedPartner.partnerId);
    partnersData.forEach((partner: any) => {
      if (partner.partnerId === selectedPartner.partnerId) {
        partner.advertisers = data.advertisers;
        this.advertisers$ = of(partner.advertisers);
      }
    })
    localStorage.setItem('partners', JSON.stringify(partnersData));
  }

  async getCampaign(event: MatAutocompleteSelectedEvent) {
    const selectedAdvertiser = event.option.value;
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get(`https://displayvideo.googleapis.com/v2/advertisers/${selectedAdvertiser.advertiserId}/campaigns`, { headers });
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
          }
        })
      }
    })
    localStorage.setItem('partners', JSON.stringify(partnersData));
  }

  autoCompleteCampaign(event: MatAutocompleteSelectedEvent) {
    const selectedCampaign = event.option.value;
    this.formGroup.patchValue({
      campaignId: selectedCampaign.campaignId,
    })
    if (selectedCampaign.campaignFlight && selectedCampaign.campaignFlight.plannedDates) {
      if (selectedCampaign.campaignFlight.plannedDates.startDate) {
        const startDate = selectedCampaign.campaignFlight.plannedDates.startDate;
        this.formGroup.patchValue({
          startDate: new Date(startDate.year, startDate.month - 1, startDate.day),
        })
      }
      if (selectedCampaign.campaignFlight.plannedDates.endDate) {
        const endDate = selectedCampaign.campaignFlight.plannedDates.endDate;
        this.formGroup.patchValue({
          endDate: new Date(endDate.year, endDate.month - 1, endDate.day),
        })
      }
    }
    this.formGroup.get('campaignId')!.disable();
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

  endDateNotInFuture(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      const inputDate = new Date(control.value);
      return inputDate <= today ? null : { futureDate: 'End date cannot be in the future.' };
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
