import { Component, Inject, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Validators, FormsModule, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
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
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Observable, of, firstValueFrom, map, startWith, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
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

  announcer = inject(LiveAnnouncer);

  @ViewChild('campaignInput') campaignInput!: ElementRef<HTMLInputElement>;constructor(
    private formBuilder: FormBuilder, 
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }

  ngOnInit() {
    this.createForm();
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

  async createForm() {
    this.formGroup = this.formBuilder.group({
      dv360Partner: [this.data?.dv360Partner || null, [Validators.required]],
      dv360Advertiser: [this.data?.dv360Advertiser || null, [Validators.required]],
      dv360CampaignId: [this.data?.dv360CampaignId || [], [Validators.required]],
      facebookPlatform: ['facebook', [Validators.required]],
      facebookStartDate: [this.data?.dv360StartDate ? new Date(this.data.dv360StartDate) : null, [Validators.required, this.isValidDate()]],
      facebookEndDate: [this.data?.dv360EndDate ? new Date(this.data.dv360EndDate) : null, [Validators.required, this.isValidDate()]],
      facebookBudget: [this.data?.dv360Budget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
    });

    const startDateControl = this.formGroup.get('facebookStartDate');
    const endDateControl = this.formGroup.get('facebookEndDate');
    if (startDateControl && endDateControl) {
      endDateControl.setValidators([
        ...endDateControl.validator ? [endDateControl.validator] : [],
        this.startDateBeforeEndDate(startDateControl)
      ]);
      endDateControl.updateValueAndValidity();
    }
    if (this.isEditMode) {
      // await this.getDV360Partner();
      // this.getDV360Advertiser(undefined, true);
      // this.getDV360Campaign(undefined, true);
    }
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  displayFn(dv360Partner: any): string {
    return dv360Partner && dv360Partner.displayName ? dv360Partner.displayName : '';
  }

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

}
