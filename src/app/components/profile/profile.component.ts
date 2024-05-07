import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ChangeEmailComponent } from '../change-email/change-email.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

import { AuthService } from '../../services/auth.service';

import { first, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    MatCardModule
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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUserProfile();
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

  createForm() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl({value: null, disabled: true}, [Validators.required, Validators.email]),
      language: new FormControl("en", Validators.required),
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
