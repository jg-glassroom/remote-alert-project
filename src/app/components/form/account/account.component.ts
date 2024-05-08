import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { getAuth } from 'firebase/auth';
import { arrayUnion } from '@firebase/firestore';

import { ToastrService } from 'ngx-toastr';

import { switchMap, catchError, tap, first } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  formGroup!: FormGroup;
  isEditMode: boolean = false;
  originalData: any;
  documentId: string | null = null;
  toaster = inject(ToastrService);

  constructor(
    private dialogRef: MatDialogRef<AccountComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.originalData = data;
      this.documentId = data.id;
    }
  }

  async ngOnInit() {
    this.createForm();
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.data?.name || null, [Validators.required]],
      description: [this.data?.description || null],
      website: [this.data?.website || null],
      industry: [this.data?.industry || null],
    });
  }

  saveAccount() {
    const user = getAuth().currentUser;
  
    if (!user) {
      this.toaster.error('User not authenticated', 'Error');
      return;
    }
  
    return this.db.collection('user').doc(user.uid).valueChanges().pipe(
      first(),
      tap(userData => {
        if (!userData) {
          console.log('No user data found.');
        }
      }),
      switchMap((userData: any) => {
        const selectedBusinessId = userData?.selectedBusiness;
        if (!selectedBusinessId) {
          this.toaster.error('No selected business ID available', 'Error');
          return of(null);
        }
  
        if (this.isEditMode && this.documentId) {
          return this.db.collection('account').doc(this.documentId).update(this.formGroup.value).then(() => {
            this.toaster.success('Account updated successfully', 'Success');
            this.dialogRef.close();
            return of(null);
          });
        } else {
          const newAccountData = {
            ...this.formGroup.value,
            businessId: selectedBusinessId
          };
          return this.db.collection('account').add(newAccountData).then((docRef: any) => {
            return this.updateBusinessAccount(selectedBusinessId, docRef.id).then(() => {
              this.dialogRef.close();
              return of(null);
            });
          });
        }
      }),
      catchError(error => {
        this.toaster.error('Failed to process account data', 'Error');
        console.error('Error saving account:', error);
        return of(null);
      })
    ).subscribe();
  }
  
  async updateBusinessAccount(businessId: string, accountId: string) {
    return this.db.collection('business').doc(businessId).update({
      accounts: arrayUnion(accountId)
    }).then(() => {
      this.toaster.success('Business account linked successfully', 'Success');
      return of(null);
    }).catch(error => {
      this.toaster.error('Failed to link business account', 'Error');
      console.error('Error linking business account:', error);
      return of(null);
    });
  }  

  onCancel(): void {
    this.dialogRef.close();
  }
}
