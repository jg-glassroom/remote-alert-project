import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { CommonService } from '../../../services/common/common.service';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-user-management-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  templateUrl: './user-management-form.component.html',
  styleUrls: ['./user-management-form.component.css']
})
export class UserManagementFormComponent implements OnInit {
  users: any[] = [{}];
  options: any = [];

  constructor(
    private dialogRef: MatDialogRef<UserManagementFormComponent>,
    private db: AngularFirestore,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.getOptions();
  }

  getOptions() {
    const businessId = this.commonService.selectedBusinessId!;
    this.db.collection('account', ref => ref.where('businessId', '==', businessId)).snapshotChanges().subscribe(accountSnapshots => {
      this.options = accountSnapshots.map(accountSnapshot => {
        const accountData: any = accountSnapshot.payload.doc.data();
        return { ...accountData, id: accountSnapshot.payload.doc.id, selected: false };
      });
    });
  }

  sendInvitations() {}

  addUser() {
    this.users.push({});
  }

  removeUser(user: any) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  selectAllAccounts(user: any) {
    if (!user.rattachment || !Array.isArray(user.rattachment)) {
      user.rattachment = [];
    }
  
    console.log(user.rattachment.length, this.options.length);
    if (user.rattachment.length === this.options.length + 1) {
      console.log('all');
      user.rattachment = [];
    } else {
      console.log('not all');
      user.rattachment = [...this.options];
    }
  }  

  updateAllSelected(user: any, option: any) {
    if (!user.rattachment) {
      user.rattachment = [];
    }
  
    const index = user.rattachment.findIndex((item: any) => item.id === option.id);
  
    if (index >= 0) {
      user.rattachment.splice(index, 1);
    } else {
      user.rattachment.push(option);
    }
  
    const allIndex = user.rattachment.findIndex((item: any) => item.id === 'all');
    if (allIndex >= 0 && option.id !== 'all') {
      user.rattachment.splice(allIndex, 1);
    }
  }
  
}