import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { getAuth, updateEmail } from "firebase/auth";

import { AuthService } from '../../services/auth.service';
import { first, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  toaster = inject(ToastrService);

  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getUserProfile()
  }

  getUserProfile() {
    this.auth.user$.pipe(
      first(),
      switchMap(user => {
        if (!user) {
          this.auth.signOut()
          return throwError(() => new Error('User not logged in'));
        }
        return this.db.collection('user').doc(user.uid).valueChanges();
      })
    ).subscribe({
      next: (profile: any) => {
        if (profile) {
          this.profileForm.patchValue({
            username: profile.displayName,
            email: profile.email,
            language: profile.language,
            role: profile.role,
            emailUpdates: profile.emailUpdates,
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
      language: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      emailUpdates: new FormControl(null),
    });
  }

  updateProfile() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;

      this.auth.user$.pipe(
        first(),
        switchMap(user => {
          if (!user) {
            this.auth.signOut()
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

  connectToGoogle() {}
  connectToFacebook() {}

}
