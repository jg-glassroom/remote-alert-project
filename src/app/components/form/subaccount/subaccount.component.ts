import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CommonService } from '../../../services/common/common.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-subaccount',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './subaccount.component.html',
  styleUrl: './subaccount.component.css'
})
export class SubaccountComponent {
  formGroup!: FormGroup;
  isEditMode: boolean = false;
  originalData: any;
  documentId: string | null = null;
  toaster = inject(ToastrService);

  constructor(
    private dialogRef: MatDialogRef<SubaccountComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore,
    private commonService: CommonService
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
    });
  }

  async saveSubaccount(): Promise<void> {
    if (this.formGroup.valid) {
      const newName = this.formGroup.get('name')?.value;
      const newSubaccountData = {
        name: newName,
        accountId: this.commonService.selectedAccountId
      };
      
      const db = this.db.firestore;
  
      if (this.documentId) {
        return db.runTransaction(async transaction => {
          const subaccountRef = db.doc(`subaccount/${this.documentId}`);
          const userSearchRef = db.collection('userSearch').where('subaccount.id', '==', this.documentId);
    
          transaction.update(subaccountRef, newSubaccountData);
    
          const snapshot = await userSearchRef.get();
          snapshot.forEach(doc => {
            transaction.update(doc.ref, { 'subaccount.name': newName });
          });
          
          return Promise.resolve();
        })
        .then(() => {
          this.dialogRef.close(true);
        })
        .catch(error => {
          console.error('Failed to update subaccount:', error);
          this.toaster.error('Failed to update subaccount.');
        });
      } else {
        return db.runTransaction(async transaction => {
          const subaccountRef = db.collection('subaccount').doc();
          this.documentId = subaccountRef.id
          transaction.set(subaccountRef, newSubaccountData);          
          return Promise.resolve(newSubaccountData);
        })
        .then((newSubaccount) => {
          this.dialogRef.close({...newSubaccount, id: this.documentId});
        })
        .catch(error => {
          console.error('Failed to create subaccount:', error);
          this.toaster.error('Failed to create subaccount.');
        });
      }
    } else {
      this.toaster.error('Please fill the name.');
      return Promise.reject(new Error('Validation failed, name is required'));
    }
  }  

  onCancel(): void {
    this.dialogRef.close();
  }
}
