import { Injectable, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { of, catchError, combineLatest, tap, map, take } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from 'firebase/firestore';

import { AuthService } from '../auth.service';
import { CommonService } from '../common/common.service';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BusinessAccountService {
  isLoading: boolean = false;
  businesses: any[] = [];
  accounts: any[] = [];

  constructor(
    public router: Router,
    public auth: AuthService,
    private db: AngularFirestore,
    public commonService: CommonService,
    private toaster: ToastrService
  ) { }

  selectAccount(account: any, cdr: ChangeDetectorRef, appRef: ApplicationRef, zone: NgZone) {
    this.auth.user$.pipe(
      tap(user => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          if (this.commonService.selectedAccount && account && this.commonService.selectedAccount.id !== account.id) {
            userDoc.update({ selectedAccount: account })
              .then(() => {
                this.router.navigate(['/alerts', account.id]);
                this.commonService.selectedAccount = account;
                this.refreshView(cdr, appRef, zone);
              })
              .catch(() => this.toaster.error('Failed to update account selection'));
          } else {
            userDoc.update({ selectedAccount: account });
            this.router.navigate(['/alerts', account.id]);
            this.refreshView(cdr, appRef, zone);
          }
        }
      }),
      take(1)
    ).subscribe();
  }

  async loadAccounts(userId: string) {
    this.db.doc(`user/${userId}`).valueChanges().pipe(
      switchMap((user: any) => {
        if (!user || !user.selectedBusiness) {
          console.error('No selected business available');
          return of([]);
        }

        if (user.selectedAccount) {
          this.commonService.selectedAccount = user.selectedAccount;
        }

        const selectedBusiness = user.selectedBusiness;

        return this.db.collection('userRoles', ref => ref.where('userId', '==', userId)).valueChanges().pipe(
          switchMap((userRoles: any[]) => {
            if (!userRoles.length) return of([]);

            const hasRoleOnSelectedBusiness = userRoles.some(role =>
              role.businessRoles?.some((br: any) => br.businessId === selectedBusiness.id)
            );

            if (hasRoleOnSelectedBusiness) {
              return this.db.collection('account', ref => ref.where('business.id', '==', selectedBusiness.id))
                .snapshotChanges().pipe(map(actions => actions.map(a => ({ id: a.payload.doc.id, ...(a.payload.doc.data() as any) }))));
            } else {
              const accountIds = userRoles.flatMap(ur => ur.accountRoles ? ur.accountRoles.map((ar: any) => ar.accountId) : []);
              return this.db.collection('account', ref => ref.where('business.id', '==', selectedBusiness.id)
                .where(documentId(), 'in', accountIds))
                .snapshotChanges().pipe(map(actions => actions.map(a => ({ id: a.payload.doc.id, ...(a.payload.doc.data() as any) }))));
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
    ).subscribe(accounts => {
      this.accounts = accounts;
      this.accounts = this.accounts.sort((a: any, b: any) => a.name.localeCompare(b.name));
    });
  }

  async loadBusinesses(userId: string) {
    this.db.doc(`user/${userId}`).valueChanges().pipe(
      tap((user: any) => {
        if (user.selectedBusiness) {
          this.commonService.selectedBusiness = user.selectedBusiness;
        }
      }),
      switchMap(() => {
        return this.db.collection('userRoles', ref => ref.where('userId', '==', userId)).valueChanges();
      }),
      switchMap(userRoles => {
        const businessIds = Array.from(new Set(userRoles.flatMap((roles: any) => roles.businessRoles ? roles.businessRoles.map((br: any) => br.businessId) : [])));
        const accountIds = Array.from(new Set(userRoles.flatMap((roles: any) => roles.accountRoles ? roles.accountRoles.map((ar: any) => ar.accountId) : [])));

        const businesses$ = businessIds.map(id =>
          this.db.collection('business').doc(id).snapshotChanges().pipe(
            map(action => ({ id: action.payload.id, ...action.payload.data() as any }))
          )
        );

        const businessesFromAccounts$ = accountIds.length ? this.db.collection('account', ref => ref.where(documentId(), 'in', accountIds))
          .valueChanges().pipe(
            switchMap(accounts => {
              let indirectBusinessIds = accounts.map((acc: any) => acc.businessId);
              indirectBusinessIds = indirectBusinessIds.filter((id: any) => !businessIds.includes(id));
              if (indirectBusinessIds.length === 0) return of([]);
              return this.db.collection('business', ref => ref.where(documentId(), 'in', indirectBusinessIds)).snapshotChanges().pipe(
                map(actions => actions.map(action => ({ id: action.payload.doc.id, ...action.payload.doc.data() as any })))
              );
            })
          ) : of([]);

        return combineLatest([
          businesses$.length ? combineLatest(businesses$) : of([]),
          businessesFromAccounts$
        ]);
      }),
      map(([directBusinesses, indirectBusinesses]) => {
        return [...directBusinesses, ...indirectBusinesses];
      }),
      take(1)
    ).subscribe(businesses => {
      this.db.doc(`user/${userId}`).valueChanges().pipe(
        take(1)
      ).subscribe((user: any) => {
        if (user && !user.selectedBusiness && businesses.length > 0) {
          const userDoc = this.db.doc(`user/${userId}`);
          userDoc.update({ selectedBusiness: businesses[0].id });
        }
      });
      this.businesses = businesses;
      if (!this.businesses.some((b: any) => b.name)) {
        this.businesses = this.businesses.sort((a: any, b: any) => a.name.localeCompare(b.name));
      }
      if (!this.commonService.selectedBusiness && this.businesses.length > 0) {
        this.commonService.selectedBusiness = this.businesses[0];
      }
    }, error => console.error('Error loading businesses:', error));
  }

  selectBusiness(business: any, cdr: ChangeDetectorRef, appRef: ApplicationRef, zone: NgZone) {
    this.isLoading = true;
    this.auth.user$.pipe(
      tap((user: any) => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          if (this.commonService.selectedBusiness.id !== business.id) {
            userDoc.update({ selectedBusiness: business, selectedAccount: null })
              .then(() => {
                this.updateSelectedBusiness(business, cdr, appRef, zone).then(() => {
                  this.router.navigate(['/accounts']).then(() => {
                    setTimeout(() => {
                      this.refreshView(cdr, appRef, zone);
                    }, 200);
                  });
                });
              })
              .catch(() => this.toaster.error('Failed to update business selection'));
          } else {
            userDoc.update({ selectedAccount: null })
              .then(() => {
                this.commonService.selectedAccount = null;
                this.router.navigate(['/accounts']).then(() => {
                  setTimeout(() => {
                    this.refreshView(cdr, appRef, zone);
                  }, 200);
                });
              });
          }
        }
      }),
      take(1)
    ).subscribe();
  }

  updateSelectedBusiness(business: any, cdr: ChangeDetectorRef, appRef: ApplicationRef, zone: NgZone): Promise<void> {
    return new Promise<void>((resolve) => {
      this.commonService.selectedBusiness = business;
      this.auth.user$.pipe(take(1)).subscribe((user: any) => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          userDoc.update({ selectedBusiness: business }).then(() => {
            this.refreshView(cdr, appRef, zone);
            resolve();
          });
        } else {
          resolve();
        }
      });
    });
  }

  refreshView(cdr: ChangeDetectorRef, appRef: ApplicationRef, zone: NgZone) {
    zone.run(() => {
      this.isLoading = false;
      cdr.detectChanges();
      appRef.tick();
    });
  }

  accountSelected(account: any) {
    return this.commonService.selectedAccount && account.id === this.commonService.selectedAccount.id;
  }
}
