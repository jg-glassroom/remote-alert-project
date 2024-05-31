import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { CommonService } from '../../../services/common/common.service';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


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
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './user-management-form.component.html',
  styleUrls: ['./user-management-form.component.css']
})
export class UserManagementFormComponent implements OnInit {
  @Input() accountId: string = '';

  users: any[] = [{ rattachment: [] }];
  options: any = [];
  isLoading: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<UserManagementFormComponent>,
    private db: AngularFirestore,
    private commonService: CommonService,
    private functions: AngularFireFunctions
  ) {}

  ngOnInit() {
    this.getOptions();
  }

  getOptions() {
    const business = this.commonService.selectedBusiness!;
    this.db.collection('account', ref => ref.where('business.businessId', '==', business.businessId)).snapshotChanges().subscribe(accountSnapshots => {
      this.options = accountSnapshots.map(accountSnapshot => {
        const accountData: any = accountSnapshot.payload.doc.data();
        return { ...accountData, id: accountSnapshot.payload.doc.id, selected: false };
      });
    });
  }

  async sendInvitations() {
    this.isLoading = true;

    for (const user of this.users) {
      let userRecord;
      let token = null;
      let exists = true;

      try {
        userRecord = await firstValueFrom(this.functions.httpsCallable('getUserByEmail')({ email: user.email }));
      } catch (error: any) {
        if (error.code === 'functions/not-found') {
          userRecord = await firstValueFrom(this.functions.httpsCallable('createUser')({ email: user.email }));
          exists = false;
          token = uuidv4();
          const date_created = moment().format('MM/DD/YYYY HH:mm:ss');
          await this.db.collection('user').doc(userRecord.uid).set({ token, date_created });
        } else {
          console.error(`Error fetching user ${user.email}: `, error);
          continue;
        }
      }

      const userId = userRecord.uid;
      const business = this.commonService.selectedBusiness!;
      const userRoleDocRef = this.db.collection('userRoles').doc(userId);

      if (user.rattachment.includes('all')) {
        await userRoleDocRef.set(
          {
            userId: userId,
            businessRoles: [{ businessId: business.businessId, role: user.role }]
          },
          { merge: true }
        );
      } else {
        const accountRoles = user.rattachment.map((accountId: string) => ({
          accountId: accountId,
          role: user.role
        }));
        await userRoleDocRef.set(
          {
            userId: userId,
            accountRoles: accountRoles
          },
          { merge: true }
        );
      }

      if (exists) {
        let businessName = '';
        let accountNames: string[] = [];

        if (user.rattachment.includes('all')) {
          const businessDoc: any = await this.db.collection('business').doc(business.businessId).get().toPromise();
          businessName = businessDoc.exists ? businessDoc.data().name : '';
        } else {
          const accountPromises = user.rattachment.map((accountId: string) => 
            this.db.collection('account').doc(accountId).get().toPromise()
          );
          const accountDocs = await Promise.all(accountPromises);
          accountNames = accountDocs.map(doc => doc.exists ? doc.data().name : '').filter(name => name);
        }
        const sendInformationEmail = this.functions.httpsCallable('sendInformationEmail');
        await firstValueFrom(
          sendInformationEmail({
            userEmails: [user.email],
            fromEmail: 'rrachidi@glassroom.ca',
            accounts: accountNames.join(', '),
            business: businessName
          })
        );
      } else {
        const sendInvitationLinks = this.functions.httpsCallable('sendInvitationLinks');
        const hostname = window.location.hostname;
        const url = hostname === "localhost" ? 
          'https://localhost:4200' : 'https://alert-project-xy52mshrpa-nn.a.run.app';
        const invitationLink = `${url}/invite/${token}`;
        await firstValueFrom(
          sendInvitationLinks({
            userEmails: [user.email],
            fromEmail: 'rrachidi@glassroom.ca',
            invitationLink
          })
        );
      }
    }
    this.isLoading = false;
    this.dialogRef.close();
  }

  addUser() {
    this.users.push({ rattachment: [] });
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
    if (!user.rattachment.includes('all')) {
      user.rattachment = [];
    } else {
      user.rattachment = this.options.map((option: any) => option.id);
      user.rattachment.push('all');
    }
  }

  updateAllSelected(user: any) {
    if (user.rattachment.length === this.options.length) {
      if (!user.rattachment.includes('all')) {
        user.rattachment.push('all');
      }
    } else {
      const allIndex = user.rattachment.indexOf('all');
      if (allIndex >= 0) {
        user.rattachment.splice(allIndex, 1);
      }
    }
  }
}