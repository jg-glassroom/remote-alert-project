import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GoogleService } from '../../services/platforms/google/google.service';
import { FacebookService } from '../../services/platforms/facebook/facebook.service';
import { BingService } from '../../services/platforms/bing/bing.service';
import { CommonService

 } from '../../services/common/common.service';
import { getAuth } from 'firebase/auth';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-platforms-integration',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './platforms-integration.component.html',
  styleUrl: './platforms-integration.component.css'
})
export class PlatformsIntegrationComponent {

  constructor(
    private route: ActivatedRoute,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    public googleService: GoogleService,
    public facebookService: FacebookService,
    public bingService: BingService,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.handleQueryParams();
    if (this.commonService.isConnected('google')) {
      this.googleService.getGoogleScopes();
    }
  }

  private handleQueryParams(): void {
    let source = '';
    this.route.params.forEach((params: any) => {
      source = params.oauthProvider;
    });
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      if (authCode) {
        if (source === 'google') {
          this.exchangeGoogleTokens(authCode).catch(error => console.error('Error calling cloud function', error));
        } else if (source === 'microsoft') {
          this.exchangeMicrosoftTokens(authCode).catch(error => console.error('Error calling cloud function', error));
        }
      }
    });
  }

  private async exchangeMicrosoftTokens(authCode: string): Promise<void> {
    const callable = this.fns.httpsCallable('exchangeMicrosoftTokens');
    try {
      const result = await firstValueFrom(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? 
      'https://localhost:4200/integrations/microsoft' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/microsoft' }));
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');
      this.db.collection('user').doc(currentUser.uid).update({
        microsoftAccessToken: result.access_token,
        microsoftRefreshToken: result.refresh_token,
      });
      localStorage.setItem('microsoftAccessToken', result.access_token);
      history.replaceState(null, '', window.location.pathname);
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }

  private async exchangeGoogleTokens(authCode: string): Promise<void> {
    const callable = this.fns.httpsCallable('exchangeGoogleTokens');
    try {
      const result = await firstValueFrom(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? 
      'https://localhost:4200/integrations/google' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/google' }));
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');
      this.db.collection('user').doc(currentUser.uid).update({
        googleAccessToken: result.access_token,
        googleRefreshToken: result.refresh_token,
      });
      this.googleService.getGoogleScopes();
      localStorage.setItem('googleAccessToken', result.access_token);
      history.replaceState(null, '', window.location.pathname);
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }
}
