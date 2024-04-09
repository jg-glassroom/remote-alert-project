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

  public adAccounts: any[] = [];
  private adAccountsSubject = new BehaviorSubject<any[]>([]);
  public adAccounts$ = this.adAccountsSubject.asObservable();
  originalAdAccounts$!: Observable<any[]>;

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }

  ngOnInit() {
    this.createForm();
    this.getAdAccounts();
    if (this.isEditMode) {
      this.setupFilteringFacebookAdAccount()
    }
  }

  setupFilteringFacebookAdAccount() {
    this.adAccounts$ = this.formGroup.get('facebookAdAccount')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterAdAccounts(name))
    );
  }

  filterAdAccounts(filterValue: string): Observable<any[]> {
    return of(JSON.parse(localStorage.getItem("adAccounts")!)).pipe(
      map(adAccounts => 
        adAccounts.filter((facebookAdAccount: any) => facebookAdAccount.displayName.toLowerCase().includes(filterValue))
      )
    );
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
      facebookAdAccount: [this.data?.facebookAdAccount || null, [Validators.required]],
      dv360Advertiser: [this.data?.dv360Advertiser || null, [Validators.required]],
      dv360CampaignId: [this.data?.dv360CampaignId || [], [Validators.required]],
      facebookPlatform: ['facebook', [Validators.required]],
      facebookStartDate: [this.data?.facebookStartDate ? new Date(this.data.facebookStartDate) : null, [Validators.required, this.isValidDate()]],
      facebookEndDate: [this.data?.facebookEndDate ? new Date(this.data.facebookEndDate) : null, [Validators.required, this.isValidDate()]],
      facebookBudget: [this.data?.facebookBudget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
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
      await this.getAdAccounts();
      // this.getDV360Advertiser(undefined, true);
      // this.getDV360Campaign(undefined, true);
    }
  }

  async getAdAccounts() {
    const cachedData = localStorage.getItem('adAccounts');
    if (cachedData) {
      this.adAccounts = JSON.parse(cachedData);
      this.adAccountsSubject.next(this.adAccounts);
      this.isLoading = false;
      return of(null);
    }
    
    const fields = 'account_id,id,name';
    const url = `https://graph.facebook.com/v12.0/me/adaccounts?fields=${fields}&access_token=${localStorage.getItem('facebookAccessToken')}`;
    this.http.get<any>(url)
      .pipe(
        map(response => {
          const sortedAdsAccounts = response.data.sort((a: any, b: any) => a.name.localeCompare(b.name));
          this.adAccounts = sortedAdsAccounts;
          this.adAccountsSubject.next(sortedAdsAccounts);
          localStorage.setItem('adAccounts', JSON.stringify(response.data));
          this.adAccountsSubject.next(response.data);
          return of(null);
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error:', error)
          return of(null);
        }
      });
    return of(null);
  }

  get form() { 
    return this.formGroup ? this.formGroup.controls : {};
  };

  displayFn(facebookAdAccount: any): string {
    return facebookAdAccount && facebookAdAccount.name ? facebookAdAccount.name : '';
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
