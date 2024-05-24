import { Injectable, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AutoDisconnectComponent } from '../../components/auto-disconnect/auto-disconnect.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  private logoutTimer: any;
  private readonly INACTIVITY_TIME_LIMIT = 30 * 60 * 1000;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private matDialog: MatDialog
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.initListener();
        this.resetLogoutTimer();
      } else {
        this.clearLogoutTimer();
      }
    });
  }

  private initListener() {
    document.body.addEventListener('mousemove', () => this.resetLogoutTimer());
    document.body.addEventListener('keydown', () => this.resetLogoutTimer());
    document.body.addEventListener('click', () => this.resetLogoutTimer());
  }

  private resetLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }

    this.logoutTimer = setTimeout(async () => {
      const user = await this.afAuth.currentUser;
      if (user) {
        this.ngZone.run(() => {
          this.matDialog.open(AutoDisconnectComponent, {
            width: '20%',
          });
          this.authService.signOut();
        });
      }
    }, this.INACTIVITY_TIME_LIMIT);
  }

  public clearLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
  }
}
