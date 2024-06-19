import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { MatDialog } from '@angular/material/dialog';

import { getAuth } from 'firebase/auth';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { User } from './user.model';
import moment from 'moment';

import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

import { DV360ReportService } from './reports/dv360/dv360-report.service';
import { FacebookReportService } from './reports/facebook/facebook-report.service';
import { GoogleAdsReportService } from './reports/google-ads/google-ads-report.service';
import { LinkedinReportService } from './reports/linkedin/linkedin-report.service';
import { BingReportService } from './reports/bing/bing-report.service';
import { AppleReportService } from './reports/apple/apple-report.service';

import { CommonService } from './common/common.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private matDialog: MatDialog,
    private dv360ReportService: DV360ReportService,
    private facebookReportService: FacebookReportService,
    private googleAdsReportService: GoogleAdsReportService,
    private linkedinReportService: LinkedinReportService,
    private bingReportService: BingReportService,
    private appleReportService: AppleReportService,
    private commonService: CommonService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }

  async signUp(email: string, password: string, username: string, language: string): Promise<void> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return await this.updateUserData({ displayName: username, uid: result.user!.uid, language: language });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async emailPasswordSignIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');

      const userRef = this.afs.collection('user').doc(currentUser.uid);
      await userRef.update({ last_login: moment().format('MM/DD/YYYY HH:mm:ss') });

      const userDoc = this.afs.collection('user').doc(currentUser.uid).valueChanges();
      userDoc.pipe(first()).subscribe(async (user: any) => {
        if (user.googleAdsAccessToken) {
          localStorage.setItem('googleAdsAccessToken', user.googleAdsAccessToken);
        }
        if (user.dv360AccessToken) {
          localStorage.setItem('dv360AccessToken', user.dv360AccessToken);
        }
        if (user.facebookAccessToken) {
          localStorage.setItem('facebookAccessToken', user.facebookAccessToken);
        }
        if (user.microsoftAccessToken) {
          localStorage.setItem('microsoftAccessToken', user.microsoftAccessToken);
        }
        if (user.appleAccessToken) {
          localStorage.setItem('appleAccessToken', user.appleAccessToken);
        }
        if (user.linkedinAccessToken) {
          localStorage.setItem('linkedinAccessToken', user.linkedinAccessToken);
        }
        if (user.hadLinkedin) {
          this.matDialog.open(ConfirmDialogComponent, {
            width: '70%',
            height: '90vh',
            data: { showActions: false }
          })
        }

        if (this.commonService.selectedAccount) {
          const currentDate = moment().startOf('day').toDate();

          const alertsRef = this.afs.collection('userSearch', ref => ref
            .where('accountId', '==', this.commonService.selectedAccount.id)
          );

          const alertsSnapshot: any = await alertsRef.get().toPromise();
          alertsSnapshot.forEach(async (doc: any) => {
            const alert = {id: doc.id, ...doc.data()};
            if (!alert.last_refreshed || moment(alert.last_refreshed.toDate()).startOf('day').isBefore(currentDate)) {
              console.log('AAAAAA', alert);
              const alertId = doc.id;
              const updatePromises = alert.platforms.map(async (platformData: any, index: any) => {
                const platform = platformData.platform;
                await this.updateLoadingStatus(alertId, index, true);
                if (platform === 'dv360') {
                  await this.dv360ReportService.processReport(alert, index);
                } else if (platform === 'facebook') {
                  await this.facebookReportService.processReport(alert, index);
                } else if (platform === 'googleAds') {
                  await this.googleAdsReportService.processReport(alert, index);
                } else if (platform === 'bing') {
                  await this.bingReportService.processReport(alert, index);
                } else if (platform === 'apple') {
                  await this.appleReportService.processReport(alert, index);
                } else if (platform === 'linkedin') {
                  await this.linkedinReportService.processReport(alert, index);
                }
              });

              await Promise.all(updatePromises);

              await this.afs.collection('userSearch').doc(alertId).update({
                last_refreshed: currentDate
              });
            }
          });
        }
      });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async updateLoadingStatus(alertId: string, index: number, status: boolean) {
    const alertRef = this.afs.collection('userSearch').doc(alertId);
    const alertSnapshot: any = await alertRef.get().toPromise();
    const alertData = alertSnapshot.data() as any;
    alertData.platforms[index].loading = status;
    await alertRef.update(alertData);
  }

  async signOut() {
    await this.afAuth.signOut();
    localStorage.clear();
    return this.router.navigate(['/']);
  }

  public updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    let data = {
      uid: user.uid,
      displayName: user.displayName,
      language: "",
      emailUpdates: false,
      date_created: moment().format('MM/DD/YYYY HH:mm:ss'),
      last_login: moment().format('MM/DD/YYYY HH:mm:ss'),
    };

    if (user.language) {
      data.language = user.language;
    }

    return userRef.set(data, { merge: true });
  }
}
