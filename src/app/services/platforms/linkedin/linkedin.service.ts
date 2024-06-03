import { Injectable, inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { getFirestore, doc, updateDoc, deleteField } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firstValueFrom } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  toaster = inject(ToastrService);
  private clientId: string = '773p5crl5ty3pg';
  private authUrl: string = 'https://www.linkedin.com/oauth/v2/authorization';

  constructor(private fns: AngularFireFunctions) { }

  linkedinConnect() {
    const hostname = window.location.hostname;
    const redirectUri = hostname === "localhost" ? 
      'https://localhost:4200/integrations/linkedin' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/linkedin';
    const scope = 'profile email openid r_ads r_ads_reporting';
    const state = 'DCEEFWF45453sdffef424';

    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.clientId)
      .set('redirect_uri', encodeURI(redirectUri))
      .set('state', state)
      .set('scope', scope);

    window.location.href = `${this.authUrl}?${params.toString()}`;
  }

  async linkedinDisconnect() {
    const user = getAuth().currentUser;

    if (!user) {
      this.toaster.error('User not logged in', 'Error');
      return;
    }

    try {
      const callable = this.fns.httpsCallable('revokeLinkedinToken');
      await firstValueFrom(callable({ accessToken: localStorage.getItem('linkedinAccessToken') }));
      const db = getFirestore();
      await updateDoc(doc(db, 'user', user.uid), {
        linkedinAccessToken: deleteField(),
      });

      localStorage.removeItem('linkedinAccessToken');

      this.toaster.success('LinkedIn account disconnected successfully');
    } catch (error) {
      console.error('Error disconnecting LinkedIn:', error);
      this.toaster.error('Failed to disconnect LinkedIn', 'Error');
    }
  }
}
