import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';

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
  
  constructor(private db: AngularFirestore) {
    gapi.load('auth2', () => {
      gapi.auth2.init({client_id: this.clientId, plugin_name: 'hello'});
    });
  }

  refreshToken() {
    // TODO: Implement function to refresh access token
  }

  async handleError(error: HttpErrorResponse) {
    if (error.status === 401 || error.status === 403) {
      this.refreshToken();
    } else {
      console.error(`An unexpected token error occurred [${error.status}]: ${error.message}`);
    }
  }  

  async googleSignIn() {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    try {
      const googleUser = await GoogleAuth.signIn({
        scope: this.scope
      });

      const response = googleUser.getAuthResponse();
      const googleAccessToken = response.access_token;
      const currentUser = getAuth().currentUser;
      console.log("GOOGLE RESPONSE", response);

      // TODO : Get reshresh token
      if (currentUser) {
        this.db.doc(`user/${currentUser.uid}`).update({
          googleAccessToken: googleAccessToken,
        });
        this.toaster.success("Your account has been successfully linked", "Success");
      } else {
        this.toaster.error("User not found", "Error");
      }
    } catch (error) {
      console.error("Error signing in", error);
      this.toaster.error("An error occured", "Error");
    }
  }
}
