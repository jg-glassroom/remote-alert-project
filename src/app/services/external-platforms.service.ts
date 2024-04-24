import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { ToastrService } from 'ngx-toastr';

import { getAuth } from 'firebase/auth';

import { firstValueFrom, first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExternalPlatformsService {
  toaster = inject(ToastrService);

  private clientId: string = '552619214593-qblqi5upvvciqv2ldsftb6kqkj71jiuu.apps.googleusercontent.com';
  private scope = [
    // DV360
    'https://www.googleapis.com/auth/display-video',
    'https://www.googleapis.com/auth/doubleclickbidmanager',
    // CM360
    'https://www.googleapis.com/auth/dfareporting',
    // Search Ads
    'https://www.googleapis.com/auth/doubleclicksearch'
  ].join(' ');
  
  constructor(private db: AngularFirestore, private fns: AngularFireFunctions) {}

  async refreshGoogleToken() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (!currentUser) {
      console.error('User not logged in');
      return Promise.reject('User not logged in');
    }
  
    const callable = this.fns.httpsCallable('refreshGoogleAccessToken');
    const userDocRef = this.db.collection('user').doc(currentUser.uid);
  
    const user: any = await firstValueFrom(userDocRef.valueChanges().pipe(first()));
    try {
      const result = await firstValueFrom(callable({ refreshToken: user.googleRefreshToken }));
      if (result && result.access_token) {
        localStorage.setItem('googleAccessToken', result.access_token);
  
        await userDocRef.update({
          googleAccessToken: result.access_token,
        });
  
        console.log('Google access token refreshed and updated successfully');
      } else {
        throw new Error('Failed to refresh access token');
      }
    } catch (error) {
      console.error('Error refreshing access token', error);
      return Promise.reject(error);
    }
  }

  async handleGoogleError(error: HttpErrorResponse): Promise<void> {
    if (error.status === 401 || error.status === 403 || error.status === 400) {
      return await this.refreshGoogleToken();
    } else {
      if (error.status && error.message) {
        console.error(`An unexpected error occurred [${error.status}]: ${error.message}`);
      }
      this.toaster.error('An unexpected error occurred', 'Error');
    }
  }

  async refreshMicrosoftToken() {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const hostname = window.location.hostname;
    const redirectUri = hostname === "localhost" ? 
    'https://localhost:4200/profile/microsoft' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile/microsoft';
  
    if (!currentUser) {
      console.error('User not logged in');
      return Promise.reject('User not logged in');
    }
  
    const callable = this.fns.httpsCallable('refreshMicrosoftAccessToken');
    const userDocRef = this.db.collection('user').doc(currentUser.uid);
  
    const user: any = await firstValueFrom(userDocRef.valueChanges().pipe(first()));
    try {
      const result = await firstValueFrom(callable({ refreshToken: user.microsoftRefreshToken, redirectUri: redirectUri }));
      if (result && result.access_token) {
        localStorage.setItem('microsoftAccessToken', result.access_token);
  
        await userDocRef.update({
          microsoftRefreshToken: result.access_token,
        });
  
        console.log('Microsoft access token refreshed and updated successfully');
      } else {
        throw new Error('Failed to refresh access token');
      }
    } catch (error) {
      console.error('Error refreshing access token', error);
      return Promise.reject(error);
    }
  }

  async handleMicrosoftError(error: HttpErrorResponse): Promise<void> {
    if (error.status === 401 || error.status === 403 || error.status === 400) {
      return await this.refreshMicrosoftToken();
    } else {
      if (error.status && error.message) {
        console.error(`An unexpected error occurred [${error.status}]: ${error.message}`);
      }
      this.toaster.error('An unexpected error occurred', 'Error');
    }
  }
}
