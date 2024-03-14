import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

declare var gapi: any;


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
  
  constructor( authService: AuthService, private afs: AngularFirestore, private router: Router) {
    gapi.load('auth2', () => {
      gapi.auth2.init({client_id: this.clientId});
    });
  }

  async googleSignIn() {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    try {
      const googleUser = await GoogleAuth.signIn({
        scope: this.scope
      });
      console.log("User signed in.", googleUser);
      this.toaster.success("Your account has been successfully linked", "Success");
      const accessToken = googleUser.getAuthResponse().access_token;
      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Error signing in", error);
      this.toaster.error("An error occured", "Error");
    }
  }
}
