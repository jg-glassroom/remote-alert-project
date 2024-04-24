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
import { MatExpansionModule } from '@angular/material/expansion';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { ChangeEmailComponent } from '../change-email/change-email.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
import { GoogleService } from '../../services/platforms/google/google.service';
import { FacebookService } from '../../services/platforms/facebook/facebook.service';
import { BingService } from '../../services/platforms/bing/bing.service';

import { first, switchMap } from 'rxjs/operators';
import { throwError, firstValueFrom } from 'rxjs';

import { getAuth } from 'firebase/auth';

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
    MatIconModule,
    MatExpansionModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  toaster = inject(ToastrService);
  panelOpenState = false;

  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    public authService: AuthService,
    public externalPlatformService: ExternalPlatformsService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fns: AngularFireFunctions,
    public googleService: GoogleService,
    public facebookService: FacebookService,
    public bingService: BingService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUserProfile();
    this.handleQueryParams();
    if (this.isConnected('google')) {
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
      'https://localhost:4200/profile/microsoft' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile/microsoft' }));
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
      'https://localhost:4200/profile/google' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile/google' }));
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
    } else if (platform === 'bing') {
      return !!localStorage.getItem('microsoftAccessToken');
    } else {
      return false;
    }
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl({value: null, disabled: true}, [Validators.required, Validators.email]),
      language: new FormControl(null, Validators.required),
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
}
