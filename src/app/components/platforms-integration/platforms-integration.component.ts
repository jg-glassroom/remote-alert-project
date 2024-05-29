import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, doc, updateDoc, deleteField } from '@firebase/firestore';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { GoogleService } from '../../services/platforms/google/google.service';
import { FacebookService } from '../../services/platforms/facebook/facebook.service';
import { BingService } from '../../services/platforms/bing/bing.service';
import { LinkedinService } from '../../services/platforms/linkedin/linkedin.service';
import { CommonService } from '../../services/common/common.service';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

import { ToastrService } from 'ngx-toastr';

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
  toaster = inject(ToastrService);

  constructor(
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private fns: AngularFireFunctions,
    private db: AngularFirestore,
    public googleService: GoogleService,
    public facebookService: FacebookService,
    public bingService: BingService,
    public linkedinService: LinkedinService,
    public commonService: CommonService,
  ) {}

  ngOnInit(): void {
    this.handleQueryParams();
  }

  googleDisconnect(platform: string): void {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '20%',
      data: { message: "You will be disconnected from all Google platforms. Are you sure?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.googleService.googleDisconnect(platform);

        const db = getFirestore();
        const user = getAuth().currentUser;

        let googlePlatforms = ['googleAds', 'dv360'];
        googlePlatforms = googlePlatforms.filter(p => p !== platform);
        googlePlatforms.forEach(async p => {
          localStorage.removeItem(`${p}AccessToken`);
  
          if (user) {
            try {
              await updateDoc(doc(db, "user", user.uid), {
                [`${p}RefreshToken`]: deleteField(),
                [`${p}AccessToken`]: deleteField()
              });
            } catch (error) {
              this.toaster.error(`Error disconnecting Google: ${error}`, "Error");
            }
          } else {
            console.log("User not logged in");
          }
        });
      }
    });
  }

  private handleQueryParams(): void {
    let source = '';
    this.route.params.forEach((params: any) => {
      source = params.oauthProvider;
    });
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      if (authCode) {
        if (source === 'dv360') {
          this.exchangeGoogleTokens(authCode, source)
          .catch(error => console.error('Error calling cloud function', error));
        } else if (source === 'googleAds') {
          this.exchangeGoogleTokens(authCode, source)
          .catch(error => console.error('Error calling cloud function', error));
        } else if (source === 'microsoft') {
          this.exchangeMicrosoftTokens(authCode).catch(error => console.error('Error calling cloud function', error));
        } else if (source === 'linkedin') {
          this.exchangeLinkedinTokens(authCode)
          .catch(error => console.error('Error calling cloud function', error));
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
      this.toaster.success('Microsoft account connected successfully');
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }

  private async exchangeLinkedinTokens(authCode: string): Promise<void> {
    const callable = this.fns.httpsCallable('exchangeLinkedinTokens');
    try {
      const result = await firstValueFrom(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? 
      'https://localhost:4200/integrations/linkedin' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/linkedin' }));
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');
      console.log('result', result);
      this.db.collection('user').doc(currentUser.uid).update({
        linkedinAccessToken: result.access_token,
      });
      localStorage.setItem('linkedinAccessToken', result.access_token);
      history.replaceState(null, '', window.location.pathname);
      this.toaster.success('Linkedin account connected successfully');
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }

  private async exchangeGoogleTokens(authCode: string, platform: string): Promise<void> {
    const callable = this.fns.httpsCallable('exchangeGoogleTokens');
    try {
      const result = await firstValueFrom(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? 
      'https://localhost:4200/integrations/' + platform : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/' + platform, platform: platform }));
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');
      this.db.collection('user').doc(currentUser.uid).update({
        [`${platform}AccessToken`]: result.access_token,
        [`${platform}RefreshToken`]: result.refresh_token,
      });
      localStorage.setItem(`${platform}AccessToken`, result.access_token);
      history.replaceState(null, '', window.location.pathname);
      this.toaster.success(`${platform === 'dv360' ? 'Display & Video 360' : 'Google Ads'} account connected successfully`);
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }
}
