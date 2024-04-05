import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { ChangeEmailComponent } from '../change-email/change-email.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';

import { first, switchMap } from 'rxjs/operators';
import { throwError, firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, deleteField } from '@firebase/firestore';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  toaster = inject(ToastrService);
  DV360Metrics: boolean = false;
  DV360Config: boolean = false;
  searchAds: boolean = false;
  CM360: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    public authService: AuthService,
    public externalPlatformService: ExternalPlatformsService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fns: AngularFireFunctions
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUserProfile();
    this.handleQueryParams();
    if (this.isConnected('google')) {
      this.getGoogleScopes();
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
    } catch (error: any) {
      if (retryCount > 0) {
        await this.externalPlatformService.handleGoogleError(error);
        return this.getGoogleScopes(retryCount - 1);
      } else {
          this.toaster.error('Error verifying token info', 'Error');
      }
    }
  }

  private handleQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      const authCode = params['code'];
      if (authCode) {
        this.exchangeTokens(authCode).catch(error => console.error('Error calling cloud function', error));
      }
    });
  }

  private async exchangeTokens(authCode: string): Promise<void> {
    const callable = this.fns.httpsCallable('exchangeTokens');
    try {
      const result = await firstValueFrom(callable({ code: authCode }));
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');
      this.db.collection('user').doc(currentUser.uid).update({
        googleAccessToken: result.access_token,
        googleRefreshToken: result.refresh_token,
      });
      localStorage.setItem('googleAccessToken', result.access_token);
      history.replaceState(null, '', window.location.pathname);
    } catch (error) {
      console.error('Error calling cloud function', error);
    }
  }

  getUserProfile() {
    this.authService.user$.pipe(
      first(),
      switchMap(user => {
        if (!user) {
          this.authService.signOut()
          return throwError(() => new Error('User not logged in'));
        }
        return this.db.collection('user').doc(user.uid).valueChanges();
      })
    ).subscribe({
      next: (profile: any) => {
        const auth = getAuth()
        if (profile && auth.currentUser) {
          this.profileForm.patchValue({
            username: profile.displayName,
            email: auth.currentUser.email,
            language: profile.language,
            role: profile.role,
            emailUpdates: profile.emailUpdates,
          });
        }
      },
      error: (error: any) => console.error("Error processing document: ", error),
    });
  }

  isConnected(platform: string) {
    if (platform === 'google') {
      return !!localStorage.getItem('googleAccessToken');
    } else if (platform === 'facebook') {
      return !!localStorage.getItem('facebookAccessToken');
    } else {
      return false;
    }
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl({value: null, disabled: true}, [Validators.required, Validators.email]),
      language: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      emailUpdates: new FormControl(null),
    });
  }

  updateProfile() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;

      this.authService.user$.pipe(
        first(),
        switchMap(user => {
          if (!user) {
            this.authService.signOut()
            return throwError(() => new Error('User not logged in'));
          }

          return this.db.collection('user').doc(user.uid).update({
            displayName: formValue.username,
            language: formValue.language,
            role: formValue.role,
            emailUpdates: formValue.emailUpdates,
          });
        })
      ).subscribe({
        next: () => {
          this.toaster.success("Profile updated successfully", "Success");
        },
        error: (error) => {
          this.toaster.error(`Error updating profile: ${error}`, "Error");
        }
      });
    }
  }

  openChangeEmailDialog() {
    this.dialog.open(ChangeEmailComponent, {
      width: '350px',
    });
  }

  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });
  }

  googleConnect() {
    var clientId = '552619214593-phjqlsgv1kqkq2nadui8rsuknjudo9lv.apps.googleusercontent.com';
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? 
    'http://localhost:4200/profile' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile';
    var scope = 'profile email https://www.googleapis.com/auth/display-video https://www.googleapis.com/auth/doubleclickbidmanager https://www.googleapis.com/auth/dfareporting https://www.googleapis.com/auth/doubleclicksearch';

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
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await updateDoc(doc(db, "user", user.uid), {
          googleRefreshToken: deleteField(),
          googleAccessToken: deleteField()
        });
        this.toaster.success("Google has been successfully disconnected", "Success");
      } catch (error) {
        this.toaster.error(`Error deleting tokens in Firestore: ${error}`, "Error");
      }
    } else {
      console.log("User not logged in");
    }
  }  

  facebookConnect() {}

  facebookDisconnect() {}
}
