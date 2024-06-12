import { Component, ViewChild, computed, inject, signal, ChangeDetectorRef, ChangeDetectionStrategy, ApplicationRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BusinessComponent } from '../form/business/business.component';

import { switchMap, catchError, takeUntil } from 'rxjs/operators';
import { of, combineLatest, tap, map, take, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    CommonModule,
    RouterOutlet,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoading: boolean = false;
  toaster = inject(ToastrService);
  isDialogOpen: boolean = false;
  private destroy$ = new Subject<void>();
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '80px' : '250px');
  activePanel: string | null = null;

  @ViewChild('sidemenu') sidemenu!: MatDrawer;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private appRef: ApplicationRef = inject(ApplicationRef);
  private zone: NgZone = inject(NgZone);

  businesses: any[] = [];
  selectedBusiness: any;
  accounts: any[] = [];
  userSubscription: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
    public commonService: CommonService,
    public router: Router,
    private db: AngularFirestore,
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

  public toggleSidemenu(doClose: boolean = false): void {
    this.collapsed.set(!this.collapsed());
    if (doClose) {
      this.activePanel = null;
    }
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 300);
  }

  public getShortName(fullName: string) {
    if (!fullName) return '';
    return fullName.split(' ').map(n => n[0]).join('');
  }

  openBusinessDialog() {
    const dialogRef = this.matDialog.open(BusinessComponent, {
      width: '70%',
      height: '90vh'
    });

    dialogRef.afterClosed().subscribe((business) => {
      if (business) {
        this.updateSelectedBusiness(business).then(() => {
          this.getElements(true, false);
          this.refreshView();
        });
      }
    });
  }

  accountSelected(accountId: string) {
    return this.commonService.selectedAccount && accountId === this.commonService.selectedAccount.id;
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

  selectBusiness(business: any) {
    this.isLoading = true;
    this.auth.user$.pipe(
      tap(user => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          if (this.commonService.selectedBusiness.id !== business.id) {
            userDoc.update({ selectedBusiness: business, selectedAccount: null })
              .then(() => {
                this.updateSelectedBusiness(business).then(() => {
                  this.router.navigate(['/accounts']).then(() => {
                    setTimeout(() => {
                      this.refreshView();
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
                    this.refreshView();
                  }, 200);
                });
              });
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
          if (this.commonService.selectedAccount && account && this.commonService.selectedAccount.id !== account.id) {
            userDoc.update({ selectedAccount: account })
              .then(() => {
                this.router.navigate(['/alerts', account.id]);
                this.commonService.selectedAccount = account;
                this.refreshView();
              })
              .catch(() => this.toaster.error('Failed to update account selection'));
          } else {
            userDoc.update({ selectedAccount: account });
            this.router.navigate(['/alerts', account.id]);
            this.refreshView();
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
        await this.commonService.getIsAdmin();
        return of([]);
      })
    ).subscribe();
  }

  editElement(event: any): void {
    event.stopPropagation();

    if (this.commonService.selectedBusiness.id) {
      this.db.collection('business').doc(this.commonService.selectedBusiness.id)
        .valueChanges().pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          if (!this.isDialogOpen) {
            this.isDialogOpen = true;
            const dialogRef = this.matDialog.open(BusinessComponent, {
              width: '70%',
              height: '90vh',
              data: { ...data as any, id: this.commonService.selectedBusiness.id }
            });

            dialogRef.afterClosed().subscribe((data) => {
              this.isDialogOpen = false;
              if (data) {
                this.updateSelectedBusiness({ ...data as any, id: this.commonService.selectedBusiness.id }).then(() => {
                  this.getElements(true, false);
                });
              }
            });
          }
        });
    }
  }

  panelOpened(panel: string): void {
    if (this.collapsed()) {
      this.toggleSidemenu();
    }
    this.activePanel = panel;
  }

  refreshView() {
    this.zone.run(() => {
      this.cdr.detectChanges();
      this.appRef.tick();
      this.isLoading = false;
    });
  }

  updateSelectedBusiness(business: any): Promise<void> {
    return new Promise<void>((resolve) => {
      this.commonService.selectedBusiness = business;
      this.auth.user$.pipe(take(1)).subscribe(user => {
        if (user) {
          const userDoc = this.db.doc(`user/${user.uid}`);
          userDoc.update({ selectedBusiness: business }).then(() => {
            this.refreshView();
            resolve();
          });
        } else {
          resolve();
        }
      });
    });
  }
}
