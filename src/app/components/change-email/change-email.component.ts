import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { getAuth, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-change-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './change-email.component.html',
  styleUrl: './change-email.component.css'
})
export class ChangeEmailComponent {
  emailForm!: FormGroup;
  hide: boolean = true;
  toaster = inject(ToastrService);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ChangeEmailComponent>,
    public authService: AuthService,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.emailForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  reauthenticate(email: string, password: string) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(email, password);
      return reauthenticateWithCredential(user, credential);
    } else {
      throw new Error('No user logged in');
    }
  }

  updateEmail() {
    if (this.emailForm.valid) {
      const value = this.emailForm.value;
      const auth = getAuth();
      if (auth.currentUser && auth.currentUser.email) {
        this.reauthenticate(auth.currentUser.email, value.password)
          .then(() => {
            if (auth.currentUser) {
              updateEmail(auth.currentUser, value.email)
              .then(() => {
                this.dialogRef.close();
                this.toaster.success("Email updated successfully", "Success");
              })
              .catch((error) => {
                this.toaster.error(error.message, "Error");
              });
            }
          })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            this.toaster.error("The password is invalid.", "Error");
          } else {
            this.toaster.error(error.message, "Error");
          }
        });
      }
    } else {
      Object.values(this.emailForm.controls).forEach(control => {
        if (control instanceof FormControl) {
          control.markAsTouched();
        }
      });
    }
  }
}
