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
    this.setupFilteringFacebookAdAccount();
  }

  setupFilteringFacebookAdAccount() {
    try {
      this.adAccounts$ = this.formGroup.get('facebookAdAccount')!.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value.toLowerCase() : ''),
        switchMap(name => this.filterAdAccounts(name))
      );
    } catch (error) {
      this.setupFilteringFacebookAdAccount();
      console.error(error);
    }
  }

  filterAdAccounts(filterValue: string): Observable<any[]> {
    return of(JSON.parse(localStorage.getItem("adAccounts")!)).pipe(
      map(adAccounts => 
        adAccounts.filter((facebookAdAccount: any) => facebookAdAccount.name.toLowerCase().includes(filterValue))
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
      facebookCampaign: [this.data?.facebookCampaign || [], [Validators.required]],
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
      this.getAdAccountCampaigns(undefined, true);
    }
  }

  async fetchAllAdAccounts(url: string, adAccounts: any[] = []): Promise<any[]> {
    try {
      const response = await firstValueFrom(this.http.get<any>(url));
      const fetchedAdAccounts = response.data;
      adAccounts = adAccounts.concat(fetchedAdAccounts);
  
      if (response.paging && response.paging.next) {
        return this.fetchAllAdAccounts(response.paging.next, adAccounts);
      } else {
        return adAccounts;
      }
    } catch (error) {
      console.error('Error fetching Facebook Ad Accounts:', error);
      this.toaster.error('Error fetching Facebook Ad Accounts', 'Error');
      throw error;
    }
  }
  
  async getAdAccounts(edit?: boolean) {
    const cachedData = localStorage.getItem('adAccounts');
    if (cachedData) {
      this.adAccounts = JSON.parse(cachedData);
      this.adAccountsSubject.next(this.adAccounts);
      this.isLoading = false;
      return;
    }

    if (!edit) {
      this.formGroup.patchValue({
        facebookCampaign: [],
        facebookStartDate: null,
        facebookEndDate: null,
        facebookBudget: null,
      })
      this.campaigns = []
    }
  
    const fields = 'account_id,id,name, business';
    const url = `https://graph.facebook.com/v12.0/me/adaccounts?fields=${fields}&access_token=${localStorage.getItem('facebookAccessToken')}`;
  
    try {
      const allAdAccounts = await this.fetchAllAdAccounts(url);
      const sortedAdAccounts = allAdAccounts.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.adAccounts = sortedAdAccounts;
      this.adAccountsSubject.next(sortedAdAccounts);
      localStorage.setItem('adAccounts', JSON.stringify(allAdAccounts));
    } catch (error) {
      console.error('Error fetching all Facebook Ad Accounts:', error);
    }
  }

  async fetchAllCampaigns(url: string, campaigns: any[] = []): Promise<any[]> {
    try {
      const response = await firstValueFrom(this.http.get<any>(url));
      const fetchedCampaigns = response.data;
      campaigns = campaigns.concat(fetchedCampaigns);

      if (response.paging && response.paging.next) {
        return this.fetchAllCampaigns(response.paging.next, campaigns);
      } else {
        return campaigns;
      }
    } catch (error) {
      console.error('Error fetching Facebook Campaigns:', error);
      this.toaster.error('Error fetching Facebook Campaigns', 'Error');
      throw error;
    }
  }

  async getAdAccountCampaigns(event?: MatAutocompleteSelectedEvent, edit?: boolean) {
    this.isLoading = true;
    const fields = 'id,name,status';
    let adAccount: any = null
    if (event) {
      adAccount = event.option.value;
    } else {
      adAccount = this.data?.facebookAdAccount;
    }

    if (!edit) {
      this.formGroup.patchValue({
        facebookCampaign: [],
        facebookStartDate: null,
        facebookEndDate: null,
        facebookBudget: null,
      })
      this.campaigns = []
    } else {
      this.campaigns = this.data?.facebookCampaign;
    }

    const url = `https://graph.facebook.com/v12.0/${adAccount.id}/campaigns?fields=${fields}&access_token=${localStorage.getItem('facebookAccessToken')}`;
    
    try {
      const allCampaigns = await this.fetchAllCampaigns(url);
      const sortedCampaigns = allCampaigns.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
      this.campaigns$ = of(sortedCampaigns);
      this.originalCampaigns$ = of(sortedCampaigns);
      this.setupFilteringFacebookCampaign();
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error('Error fetching all Facebook Campaigns:', error);
    }
  }

  setupFilteringFacebookCampaign() {
    this.campaigns$ = this.formGroup.get('facebookCampaign')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap(name => this.filterCampaigns(name))
    );
  }

  filterCampaigns(filterValue: string): Observable<any[]> {
    if (this.originalCampaigns$) {
      return this.originalCampaigns$.pipe(
        map(campaigns => 
          campaigns.filter((campaign: any) => campaign.name.toLowerCase().includes(filterValue))
        )
      );
    } else {
      return of([]); 
    }
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

    this.formGroup.get('facebookCampaign')!.setValue(null);
  }

  truncateName(obj: any, num: number) {
    var name = obj.name + " | " + obj.id
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
    this.formGroup.get('facebookCampaign')!.setValue(null);
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  refreshData() {
    localStorage.removeItem('adAccounts');
    this.formGroup.patchValue({
      facebookPartner: null,
      facebookStartDate: null,
      facebookEndDate: null,
      facebookBudget: null,
      facebookCampaign: [],
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
          facebookStartDate: this.formatDate(this.formGroup.value.facebookStartDate),
          facebookEndDate: this.formatDate(this.formGroup.value.facebookEndDate),
          userId: user.uid
        };
        return formData;
      } else {
        throw new Error('User not logged in');
      }
    }
    return null;
  }
  
  addCampaignToChips(campaign: any): void {
    if (!this.campaigns.some((c: any) => c.id === campaign.id)) {
      this.campaigns.push(campaign);
    }
    if (this.campaignInput) {
      this.campaignInput.nativeElement.value = '';
    }
    this.formGroup.get('facebookCampaign')!.setValue(null);
  }
  
  removeCampaignFromChips(campaign: any): void {
    const index = this.campaigns.findIndex((c: any) => c.id === campaign.id);
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
      facebookCampaign: this.campaigns,
    });
  }

}
