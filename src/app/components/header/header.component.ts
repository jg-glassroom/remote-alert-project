import {
  Component,
  ViewChild,
  computed,
  inject,
  signal,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ApplicationRef,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { CommonService } from '../../services/common/common.service';
import { AuthService } from '../../services/auth.service';
import { BusinessAccountService } from '../../services/business-account/business-account.service';
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

import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subscription, Subject } from 'rxjs';

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
  toaster = inject(ToastrService);
  isDialogOpen: boolean = false;
  private destroy$ = new Subject<void>();
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '80px' : '250px');
  activePanel: string | null = null;

  @ViewChild('sidemenu') sidemenu!: MatDrawer;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  public cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public appRef: ApplicationRef = inject(ApplicationRef);
  public zone: NgZone = inject(NgZone);

  selectedBusiness: any;
  userSubscription: Subscription = new Subscription();

  constructor(
    public auth: AuthService,
    public commonService: CommonService,
    public router: Router,
    private db: AngularFirestore,
    private matDialog: MatDialog,
    public businessAccountService: BusinessAccountService
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
        this.businessAccountService.updateSelectedBusiness(business, this.cdr, this.appRef, this.zone).then(() => {
          this.getElements(true, false);
          this.businessAccountService.refreshView(this.cdr, this.appRef, this.zone);
        });
      }
    });
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
          await this.businessAccountService.loadBusinesses(user.uid);
        }
        if (account) {
          await this.businessAccountService.loadAccounts(user.uid);
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
                this.businessAccountService.updateSelectedBusiness({ ...data as any, id: this.commonService.selectedBusiness.id }, this.cdr, this.appRef, this.zone).then(() => {
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
}
