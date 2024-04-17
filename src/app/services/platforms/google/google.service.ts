import { Injectable, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { getFirestore, doc, updateDoc, deleteField } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

import { ExternalPlatformsService } from '../../external-platforms.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  toaster = inject(ToastrService);
  DV360Metrics: boolean = false;
  DV360Config: boolean = false;
  searchAds: boolean = false;
  CM360: boolean = false;
  googleAds: boolean = false;

  constructor(public externalPlatformService: ExternalPlatformsService) { }

  googleConnect() {
    var clientId = '552619214593-phjqlsgv1kqkq2nadui8rsuknjudo9lv.apps.googleusercontent.com';
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? 
    'https://localhost:4200/profile' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile';
    var scope = 'profile email https://www.googleapis.com/auth/display-video https://www.googleapis.com/auth/doubleclickbidmanager https://www.googleapis.com/auth/dfareporting https://www.googleapis.com/auth/doubleclicksearch https://www.googleapis.com/auth/adwords';

    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
      'client_id=' + clientId +
      '&response_type=code' +
      '&scope=' + scope +
      '&redirect_uri=' + redirectUri +
      '&access_type=offline' +
      '&prompt=consent';

    window.location.href = authUrl;
  }

  async googleDisconnect(retryCount = 2): Promise<any> {
    const accessToken = localStorage.getItem('googleAccessToken');

    if (accessToken) {
      try {
        const response = await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${accessToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to revoke token');
        }
      } catch (error: any) {
        if (retryCount > 0) {
          await this.externalPlatformService.handleGoogleError(error);
          return this.googleDisconnect(retryCount - 1);
        } else {
            this.toaster.error(`Error revoking Google token: ${error}`, 'Error');
        }
      }
    }

    localStorage.removeItem('googleAccessToken');

    const db = getFirestore();
    const user = getAuth().currentUser;

    if (user) {
      try {
        await updateDoc(doc(db, "user", user.uid), {
          googleRefreshToken: deleteField(),
          googleAccessToken: deleteField()
        });
        this.toaster.success("Google has been successfully disconnected", "Success");
      } catch (error) {
        this.toaster.error(`Error disconnecting Google: ${error}`, "Error");
      }
    } else {
      console.log("User not logged in");
    }
  }

  async getGoogleScopes(retryCount = 2): Promise<void> {
    const tokenInfoUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${localStorage.getItem('googleAccessToken')}`;
    try {
      const response = await fetch(tokenInfoUrl);
      if (!response.ok) {
        const error = new Error(`HTTP error: ${response.status}`);
        (error as any).status = response.status;
        throw error;
      }
      const data = await response.json();
      const googleScopes = data.scope.split(' ');
      if (googleScopes.includes('https://www.googleapis.com/auth/doubleclicksearch')) {
        this.searchAds = true;
      }
      if (googleScopes.includes('https://www.googleapis.com/auth/dfareporting')) {
        this.CM360 = true;
      }
      if (googleScopes.includes('https://www.googleapis.com/auth/doubleclickbidmanager')) {
        this.DV360Metrics = true;
      }
      if (googleScopes.includes('https://www.googleapis.com/auth/display-video')) {
        this.DV360Config = true;
      }
      if (googleScopes.includes('https://www.googleapis.com/auth/adwords')) {
        this.googleAds = true;
      }
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatformService.handleGoogleError(error);
        return this.getGoogleScopes(retryCount - 1);
      } else {
          this.toaster.error('Error verifying token info', 'Error');
      }
    }
  }
}
