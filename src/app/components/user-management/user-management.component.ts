import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { UserManagementFormComponent } from '../form/user-management-form/user-management-form.component';

import { CommonService } from '../../services/common/common.service';
import { documentId } from 'firebase/firestore';

import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  users: any = [];
  isLoading: boolean = false;
  roles: any = {
    'ADMIN': 'Admin',
    'STANDARD': 'Standard'
  };

  constructor (
    private matDialog: MatDialog,
    private db: AngularFirestore,
    private fns: AngularFireFunctions,
    private commonService: CommonService
  ) {}

  async ngOnInit() {
    await this.getUsers();
  }

  addUsers() {
    const dialogRef = this.matDialog.open(UserManagementFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers();
      }
    });
  }

  async getUsers() {
    this.isLoading = true;
    const userRolesRef = this.db.collection('userRoles');
    const querySnapshot = await userRolesRef.get().toPromise();
    let userIds: string[] = [];
  
    const promises = querySnapshot!.docs.map(async (doc: any) => {
      const userRole: any = doc.data();
      if (userRole.businessRoles && userRole.businessRoles.find((br: any) => br.businessId === this.commonService.selectedBusinessId)) {
        userIds.push(userRole.userId);
      } else if (userRole.accountRoles) {
        const accountRolePromises = userRole.accountRoles.map(async (ar: any) => {
          const account: any = await this.db.doc(`account/${ar.accountId}`).get().toPromise();
          if (account.data().businessId === this.commonService.selectedBusinessId) {
            userIds.push(userRole.userId);
          }
        });
        await Promise.all(accountRolePromises);
      }
    });
  
    await Promise.all(promises);

    if (userIds.length > 0) {
      await this.fetchUsers(userIds);
    }
    this.isLoading = false;
  }

  async fetchUsers(userIds: string[]) {
    const userSnapshots: any = await this.db.collection('user', ref => ref.where(documentId(), 'in', userIds)).get().toPromise();
    const users = userSnapshots.docs.map((doc: any) => ({ id: doc.id, ...doc.data() as any }));

    const getUserEmails = this.fns.httpsCallable('getUserEmails');
    const emailResponse = await firstValueFrom(getUserEmails({ userIds }));

    const emailsMap = new Map(emailResponse.emails.map((user: any) => [user.uid, user.email]));

    const updatedUsers = await Promise.all(users.map(async (user: any) => {
      let role = 'STANDARD';
      let accounts: any = [];
      let email = emailsMap.get(user.id) || '';

      const userRoleSnapshot: any = await this.db.collection('userRoles', ref => ref.where('userId', '==', user.id)).get().toPromise();
      if (!userRoleSnapshot.empty) {
        const userRole = userRoleSnapshot.docs[0].data();
        let businessRole = null;
        if (userRole.businessRoles) {
          businessRole = userRole.businessRoles.find((br: any) => br.businessId === this.commonService.selectedBusinessId);
        }
        if (businessRole) {
          role = businessRole.role;
          const accountSnapshot: any = await this.db.collection('account', ref => ref.where('businessId', '==', this.commonService.selectedBusinessId)).get().toPromise();
          accounts = accountSnapshot.docs.map((doc: any) => doc.data());
        } else {
          let accountRoleIds: string[] = [];
          if (userRole.accountRoles) {
            accountRoleIds = userRole.accountRoles.map((ar: any) => ar.accountId);
          }
          if (accountRoleIds.length > 0) {
            const accountSnapshot: any = await this.db.collection('account', ref => 
              ref.where(documentId(), 'in', accountRoleIds)
                 .where('businessId', '==', this.commonService.selectedBusinessId)).get().toPromise();
            accounts = accountSnapshot.docs.map((doc: any) => doc.data());
          }
        }
      }
      return { ...user, role, accounts, email };
    }));

    this.users = updatedUsers;
  }

  getAccountNames(user: any): string {
    return user.accounts.map((account: any) => account.name).join(', ');
  }
}
