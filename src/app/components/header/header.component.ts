import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from 'firebase/firestore';

import { CommonService } from '../../services/common/common.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

import { BusinessComponent } from '../form/business/business.component';

import { switchMap, catchError, takeUntil } from 'rxjs/operators';
import { of, combineLatest, tap, map, take, Subscription, Subject } from 'rxjs';
import { AccountComponent } from '../form/account/account.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatSidenavModule,
    MatMenuModule,
    CommonModule, 
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toaster = inject(ToastrService);
  isDialogOpen: boolean = false;
  isAdmin: boolean = false;
  private destroy$ = new Subject<void>();

  @ViewChild('sidemenu') sidemenu!: MatDrawer;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  businesses: any = [];

  accounts: any = [];
  userSubscription: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
    public commonService: CommonService,
    public router: Router,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private matDialog: MatDialog
  ) {}

  isRouteAccounts(): boolean {
    return this.router.url === '/accounts';
  }

  async ngOnInit() {
    this.getElements(true, true);
  }

  public navigate(route: any) {
    this.router.navigate([route]);
  }

  public openMenu(trigger: MatMenuTrigger): void {
    trigger.openMenu();
  }

  openBusinessDialog() {
    this.matDialog.open(BusinessComponent, {
      width: '70%',
      height: '90vh'
    })
  }
  
  async loadAccounts(userId: string) {
    this.db.doc(`user/${userId}`).valueChanges().pipe(
      switchMap((user: any) => {
        if (!user || !user.selectedBusiness) {
          console.error('No selected business available');
          return of([]);
        }

        if (user.selectedAccount) {
          this.commonService.selectedAccountId = user.selectedAccount;
        }
  
        const selectedBusinessId = user.selectedBusiness;
  
        return this.db.collection('userRoles', ref => ref.where('userId', '==', userId)).valueChanges().pipe(
          switchMap((userRoles: any[]) => {
            if (!userRoles.length) return of([]);
  
            const hasRoleOnSelectedBusiness = userRoles.some(role =>
              role.businessRoles?.some((br: any) => br.businessId === selectedBusinessId)
            );
  
            if (hasRoleOnSelectedBusiness) {
              return this.db.collection('account', ref => ref.where('businessId', '==', selectedBusinessId))
                .snapshotChanges().pipe(map(actions => actions.map(a => ({ id: a.payload.doc.id, ...(a.payload.doc.data() as any) }))));
            } else {
              const accountIds = userRoles.flatMap(ur => ur.accountRoles ? ur.accountRoles.map((ar: any) => ar.accountId) : []);
              return this.db.collection('account', ref => ref.where('businessId', '==', selectedBusinessId)
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
          this.commonService.selectedBusinessId = user.selectedBusiness;
        }
      }),
      switchMap(() => {
        return this.db.collection('userRoles', ref => ref.where('userId', '==', userId)).valueChanges();
      }),
      switchMap(userRoles => {
        const businessIds = userRoles.flatMap((roles: any) => roles.businessRoles.map((br: any) => br.businessId));
        const accountIds = userRoles.flatMap((roles: any) => roles.accountRoles ? roles.accountRoles.map((ar: any) => ar.accountId) : []);
  
        const businesses$ = businessIds.map(id => 
          this.db.collection('business').doc(id).snapshotChanges().pipe(
            map(action => ({ id: action.payload.id, ...action.payload.data() as any }))
          )
        );
  
        const businessesFromAccounts$ = accountIds.length ? this.db.collection('account', ref => ref.where(documentId(), 'in', accountIds))
          .valueChanges().pipe(
            switchMap(accounts => {
              const indirectBusinessIds = accounts.map((acc: any) => acc.businessId);
              return this.db.collection('business', ref => ref.where(documentId(), 'in', indirectBusinessIds)).valueChanges();
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
      this.businesses = businesses;
      this.businesses = this.businesses.sort((a: any, b: any) => a.name.localeCompare(b.name));
      if (!this.commonService.selectedBusinessId && this.businesses.length > 0) {
        this.commonService.selectedAccountId = this.businesses[0].id;
      }
    }, error => console.error('Error loading businesses:', error));
  }

  selectBusiness(business: any) {
    this.auth.user$.pipe(
      tap(user => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          if (this.commonService.selectedBusinessId !== business.id) {
            userDoc.update({ selectedBusiness: business.id, selectedAccount: null })
            .then(() => {
              this.router.navigate(['/accounts']);
              this.commonService.selectedBusinessId = business.id;
              this.commonService.selectedAccountId = null;
            })
            .catch(() => this.toaster.error('Failed to update business selection'));
          } else {
            userDoc.update({ selectedAccount: null })
            .then(() => {
              this.commonService.selectedAccountId = null;
              this.router.navigate(['/accounts']);
            })
          }
        }
      }),
      take(1)
    ).subscribe();
  }

  selectAccount(account: any) {
    this.auth.user$.pipe(
      tap(user => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          if (this.commonService.selectedAccountId !== account.id) {
            userDoc.update({ selectedAccount: account.id })
            .then(() => {
              this.router.navigate(['/alerts', account.id]);
              this.commonService.selectedAccountId = account.id;
            })
            .catch(() => this.toaster.error('Failed to update account selection'));
          } else {
            this.router.navigate(['/alerts', account.id]);
          }
        }
      }),
      take(1)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.userSubscription.unsubscribe();
  }

  getElements(business: boolean, account: boolean) {
    this.userSubscription = this.auth.user$.pipe(
      switchMap(async user => {
        if (!user) {
            return of([]);
        }
        if (business) {
          await this.loadBusinesses(user.uid);
        }
        if (account) {
          await this.loadAccounts(user.uid);
        }
        await this.getIsAdmin();
        return of([]);
      })
    ).subscribe();
  }

  editElement(event: any): void {
    event.stopPropagation();
    const id = this.commonService.selectedAccountId ? this.commonService.selectedAccountId : this.commonService.selectedBusinessId;
    const componentType = this.commonService.selectedAccountId ? AccountComponent : BusinessComponent;
    
    if (id) {
      this.db.collection(this.commonService.selectedAccountId ? 'account' : 'business').doc(id)
        .valueChanges().pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          if (!this.isDialogOpen) {
            this.isDialogOpen = true;
            const dialogRef = this.matDialog.open(componentType as ComponentType<any>, {
              width: '70%',
              height: '90vh',
              data: {...data as any, id, isAdmin: this.isAdmin}
            });
  
            dialogRef.afterClosed().subscribe(() => {
              this.isDialogOpen = false;
              if (this.commonService.selectedAccountId) {
                this.getElements(false, true);
              } else {
                this.getElements(true, false)
              }
            });
          }
        });
    }
  }

  async getIsAdmin(): Promise<any> {
    return this.afAuth.currentUser.then(user => {
      if (user) {
        return this.db.collection('userRoles', ref => ref.where('userId', '==', user.uid))
          .get()
          .pipe(
            map(querySnapshot => {
              this.isAdmin = false;
              querySnapshot.forEach(doc => {
                const data: any = doc.data();
                data.businessRoles?.forEach((role: any) => {
                  if (role.businessId === this.commonService.selectedBusinessId && role.role === 'ADMIN') {
                    this.isAdmin = true;
                  }
                });
              });
              return this.isAdmin;
            })
          ).toPromise();
      } else {
        return false;
      }
    });
  }
}  
