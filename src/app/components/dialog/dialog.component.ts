import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


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
    MatButtonModule
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

  constructor(
    private formBuilder: FormBuilder, 
    private db: AngularFirestore, 
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
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
      const formData = {
        ...this.formGroup.value,
        startDate: this.formatDate(this.formGroup.value.startDate),
        endDate: this.formatDate(this.formGroup.value.endDate),
      };
      if (this.isEditMode && this.documentId) {
        this.db.collection('userSearch').doc(this.documentId).update(formData)
        .then(() => {
          console.error("TEST");
          this.dialogRef.close();
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
      } else {
        this.db.collection('userSearch').add(formData)
        .then(() => {
          this.dialogRef.close();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
