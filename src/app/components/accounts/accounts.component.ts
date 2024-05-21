import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from 'firebase/firestore';

import { AccountComponent } from '../form/account/account.component';
import { BusinessComponent } from '../form/business/business.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { AuthService } from '../../services/auth.service'; 

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { switchMap, catchError } from 'rxjs/operators';
import { of, tap, take, map } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

interface Account {
  name: string;
  businessId: string;
  description: string;
  industry: string;
  website: string;
}


@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    CommonModule,
    BusinessComponent,
    AccountComponent,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  toaster = inject(ToastrService);
  accounts: any = [];
  isDialogOpen: boolean = false;

  constructor (
    private matDialog: MatDialog,
    private authService: AuthService,
    private afs: AngularFirestore,
    public router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.getAccounts(user.uid);
        this.checkRolesAndOpenDialog(user.uid);
      }
    });
  }

  addUsers(accountId: any) {}

  deleteAccount(account: any): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '20%',
      data: { message: "Are you sure to delete " + account.name + "?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.user$.subscribe(user => {
          if (user) {
            this.afs.doc(`account/${account.id}`).delete()
              .then(() => {
                this.getAccounts(user.uid);
              })
              .catch(error => {
                this.toaster.error('Failed to delete account');
                console.error('Error deleting account:', error);
              });
          }
        });
      }
    });
  }

  getAccounts(userId: string) {
    this.afs.doc(`user/${userId}`).valueChanges().pipe(
      switchMap((user: any) => {
        if (!user || !user.selectedBusiness) {
          console.error('No selected business available');
          return of([]);
        }
  
        const selectedBusinessId = user.selectedBusiness;
  
        return this.afs.collection('userRoles', ref => ref.where('userId', '==', userId)).valueChanges().pipe(
          switchMap((userRoles: any[]) => {
            if (!userRoles.length) return of([]);
  
            const hasRoleOnSelectedBusiness = userRoles.some(role =>
              role.businessRoles?.some((br: any) => br.businessId === selectedBusinessId)
            );
  
            if (hasRoleOnSelectedBusiness) {
              return this.afs.collection('account', ref => ref.where('businessId', '==', selectedBusinessId))
                .snapshotChanges()
                .pipe(
                  map(changes => changes.map(a => ({ id: a.payload.doc.id, ...(a.payload.doc.data() as Account) })))
                );
            } else {
              const accountIds = userRoles.flatMap(ur => ur.accountRoles ? ur.accountRoles.map((ar: any) => ar.accountId) : []);
              return this.afs.collection('account', ref => ref.where('businessId', '==', selectedBusinessId)
                .where(documentId(), 'in', accountIds))
                .snapshotChanges()
                .pipe(
                  map(changes => changes.map(a => ({ id: a.payload.doc.id, ...(a.payload.doc.data() as Account) })))
                );
            }
          }),
          catchError(error => {
            console.error('Failed to fetch accounts for user roles:', error);
            return of([]);
          })
        );
      }),
      catchError(error => {
        console.error('Error fetching user data:', error);
        return of([]);
      })
    ).subscribe(async (accounts) => {
      this.accounts = accounts;
      this.accounts = this.accounts.sort((a: any, b: any) => a.name.localeCompare(b.name));
      await this.getAlerts();
    });
  }

  async getAlerts() {
    return new Promise<void>((resolve, reject) => {
      this.accounts.forEach((account: any) => {
        this.afs.collection('userSearch', ref => ref.where('accountId', '==', account.id)).get().subscribe(querySnapshot => {
          let okCount = 0;
          let warningCount = 0;
          let errorCount = 0;
      
          querySnapshot.docs.forEach((doc: any) => {
            const data = doc.data();
            if (data.platforms) {
              data.platforms.forEach((platform: any) => {
                if (platform.pacingAlerts) {
                  const overallDelta = platform.pacingAlerts[platform.platform + '_overall_delta_value'];
    
                  if (overallDelta > -5 && overallDelta < 5) {
                    okCount++;
                  }
    
                  if ((overallDelta <= -5 || overallDelta >= 5) && overallDelta > -10 && overallDelta < 10) {
                    warningCount++;
                  }
    
                  if (overallDelta <= -10 || overallDelta >= 10) {
                    errorCount++;
                  }
                }
              });
            }
          });
          account.alerts = {
            total: okCount + warningCount + errorCount,
            ok: okCount,
            warning: warningCount,
            error: errorCount
          };
          resolve();
        }, error => {
          reject(error);
        });
      });
    });
  }

  createAccount() {
    this.matDialog.open(AccountComponent, {
      width: '70%',
      height: '90vh'
    })
  }

  checkRolesAndOpenDialog(userId: string) {
    if (this.isDialogOpen) {
      return;
    }

    this.isDialogOpen = true;

    this.afs.collection('userRoles', ref => ref.where('userId', '==', userId))
      .get().pipe(
        take(1)
      ).subscribe(result => {
        if (result.empty) {
          this.openBusinessDialog();
        } else {
          this.isDialogOpen = false;
        }
      }, error => {
        console.error('Error checking roles:', error);
        this.isDialogOpen = false;
      });
  }

  openBusinessDialog() {
    const dialogRef = this.matDialog.open(BusinessComponent, {
      width: '70%',
      height: '90vh',
      disableClose: true,
      data: {
        disableCancel: true
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }

  selectAccount(account: any) {
    this.authService.user$.pipe(
      tap(user => {
        if (user) {
          const userDoc = this.afs.doc(`user/${user.uid}`);
          userDoc.update({ selectedAccount: account.id })
          .then(() => {
            this.router.navigate(['/alerts', account.id]);
          })
          .catch(() => this.toaster.error('Failed to update account selection'));
        }
      }),
      take(1)
    ).subscribe();
  }
}
