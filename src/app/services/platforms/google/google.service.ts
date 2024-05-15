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

  constructor(public externalPlatformService: ExternalPlatformsService) { }

  googleAdsConnect() {
    var clientId = '552619214593-phjqlsgv1kqkq2nadui8rsuknjudo9lv.apps.googleusercontent.com';
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? 
    'https://localhost:4200/integrations/googleAds' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/googleAds';
    var scope = 'profile email https://www.googleapis.com/auth/adwords';

    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
      'client_id=' + clientId +
      '&response_type=code' +
      '&scope=' + scope +
      '&redirect_uri=' + redirectUri +
      '&access_type=offline' +
      '&prompt=consent';

    window.location.href = authUrl;
  }

  dv360Connect() {
    var clientId = '552619214593-mem060ud6j7gspg7mt8tgmee7qhjv1j1.apps.googleusercontent.com';
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? 
    'https://localhost:4200/integrations/dv360' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/dv360';
    var scope = 'profile email https://www.googleapis.com/auth/display-video https://www.googleapis.com/auth/doubleclickbidmanager';

    var authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
      'client_id=' + clientId +
      '&response_type=code' +
      '&scope=' + scope +
      '&redirect_uri=' + redirectUri +
      '&access_type=offline' +
      '&prompt=consent';

    window.location.href = authUrl;
  }

  async googleDisconnect(platform: string, retryCount = 2): Promise<any> {
    const accessToken = localStorage.getItem(`${platform}AccessToken`);

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
          await this.externalPlatformService.handleGoogleError(error, platform);
          return this.googleDisconnect(platform, retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error(`Error revoking Google token: ${error}`, 'Error');
        }
      }
    }

    localStorage.removeItem(`${platform}AccessToken`);

    const db = getFirestore();
    const user = getAuth().currentUser;

    if (user) {
      try {
        await updateDoc(doc(db, "user", user.uid), {
          [`${platform}RefreshToken`]: deleteField(),
          [`${platform}AccessToken`]: deleteField()
        });
        
        this.toaster.success('Google has been successfully disconnected', "Success");
      } catch (error) {
        this.toaster.error(`Error disconnecting Google: ${error}`, "Error");
      }
    } else {
      console.log("User not logged in");
    }
  }
}
