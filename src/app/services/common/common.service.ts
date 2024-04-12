import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Observable, of, catchError } from 'rxjs';
import { startWith, map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  campaignSelectionValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const campaigns = control.value;
      return campaigns && campaigns.length > 0 ? null : { 'noCampaignSelected': true };
    };
  }

  add(event: MatChipInputEvent, campaigns: any, formGroup: any, formField: any): void {
    const value = (event.value || '').trim();

    if (value) {
      campaigns.push(value);
    }

    event.chipInput!.clear();

    formGroup.get(formField)!.setValue(null);
  }

  remove(campaign: any, campaigns: any, selection: any, announcer: any): void {
    const index = campaigns.indexOf(campaign);

    if (index >= 0) {
      campaigns.splice(index, 1);
      selection.deselect(campaign);
      campaign.selected = false;

      announcer.announce(`Removed ${campaign}`);
    }
  }
  
  removeCampaignFromChips(campaigns: any, campaign: any, searchField: any): void {
    const index = campaigns.findIndex((c: any) => c[searchField] === campaign[searchField]);
    if (index >= 0) {
      campaigns.splice(index, 1);
    }
  }
  
  addCampaignToChips(campaigns: any, campaign: any, formField: any, searchField: any, formGroup: any, campaignInput: any): void {
    if (!campaigns.some((c: any) => c[searchField] === campaign[searchField])) {
      campaigns.push(campaign);
    }
    if (campaignInput && campaignInput.nativeElement) {
      campaignInput.nativeElement.value = '';
    }
    formGroup.get(formField)!.setValue(null);
  }

  toggleSelection(campaigns: any, campaign: any, formField: any, searchField: any, formGroup: any, selection: any, campaignInput: any): void {
    if (selection.isSelected(campaign)) {
      selection.deselect(campaign);
      this.removeCampaignFromChips(campaigns, campaign, searchField);
      campaign.selected = false;
    } else {
      selection.select(campaign);
      this.addCampaignToChips(campaigns, campaign, formField, searchField, formGroup, campaignInput);
      campaign.selected = true;
    }
    formGroup.patchValue({
      [formField]: campaigns,
    });
  }

  truncateName(string: string, num: number) {
    var name = string
    if (name.length > num) {
      return name.slice(0, num) + "...";
    } else {
      return name;
    }
  }

  selected(event: MatAutocompleteSelectedEvent, campaigns: any, formGroup: any, formField: any, selection: any, announcer: any, campaignInput: any): void {
    const selectedCampaign = event.option.value;
    const index = campaigns.findIndex((campaign: any) => campaign === selectedCampaign);

    if (selection.isSelected(selectedCampaign)) {
      selection.deselect(selectedCampaign);
    } else {
      selection.select(selectedCampaign);
    }

    event.option.deselect();
    event.option._getHostElement().blur();
  
    if (index >= 0) {
      campaigns.splice(index, 1);
      announcer.announce(`Removed ${selectedCampaign.displayName}`);
    } else {
      campaigns.push(selectedCampaign);
      announcer.announce(`Added ${selectedCampaign.displayName}`);
    }
  
    campaignInput.nativeElement.value = '';
    formGroup.get(formField)!.setValue(null);
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

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  setupFilteringWithRetry(formGroup: any, formField: any, searchField: any, cachedData: any): Observable<any[]> {
    return formGroup.get(formField).valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap((name: any) => this.filterElements(name, searchField, cachedData)),
      catchError((error: any) => {
        console.error(error);
        this.setupFilteringWithRetry(formGroup, formField, searchField, cachedData);
        return of([]);
      })
    );
  }

  filterElements(filterValue: string, searchField: any, cachedData: any): Observable<any[]> {
    return of(JSON.parse(cachedData!)).pipe(
      map((elements: any) => elements.filter((element: any) => element[searchField].toLowerCase().includes(filterValue)))
    );
  }

  setupFiltering(formGroup: any, formField: string, originalObservable: Observable<any[]>, filterSearchField: string): Observable<any[]> {
    return formGroup.get(formField).valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap((name: any) => this.filterElement(name, originalObservable, filterSearchField))
    );
  }
  
  filterElement(filterValue: string, observable: Observable<any[]>, searchField: string): Observable<any[]> {
    return observable.pipe(
      map(elements => elements.filter(element => element[searchField].toLowerCase().includes(filterValue)))
    );
  }

  validateAllFormFields(formGroup: any) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      control.updateValueAndValidity();
    });
  }
}
