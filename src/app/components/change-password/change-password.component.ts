import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ChangePasswordComponent {
  passwordForm!: FormGroup;
  hideOld: boolean = true;
  hideNew: boolean = true;
  hideConfirm: boolean = true;
  toaster = inject(ToastrService);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ChangePasswordComponent>
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  passwordStrengthValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasSpecialChar = /[\W_]+/.test(value); 

      if (hasUpperCase && hasLowerCase && hasSpecialChar) {
        return null;
      }

      return {
        passwordStrength: {
          valid: false,
          hasUpperCase,
          hasLowerCase,
          hasSpecialChar
        }
      };
    };
  }

  createForm() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6), this.passwordStrengthValidator()]],
      confirmNewPassword: ['', Validators.required]
    }, 
    {
      validators: this.matchValidator('newPassword', 'confirmNewPassword')
    });
  }

  matchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName);

        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }

        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
  }

  updatePassword() {
    if (this.passwordForm.valid) {
      const formValue = this.passwordForm.value;
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const credential = EmailAuthProvider.credential(user.email!, formValue.oldPassword);
        reauthenticateWithCredential(user, credential)
          .then(() => {
            updatePassword(user, formValue.newPassword).then(() => {
              this.dialogRef.close();
              this.toaster.success("Password updated successfully", "Success");
            }).catch((error) => {
              this.toaster.error(error.message, "Error");
            });
          }).catch((error) => {
            if (error.code === "auth/wrong-password") {
              this.toaster.error("The password is invalid.", "Error");
            } else {
              this.toaster.error(`Error re-authenticating: ${error.message}`, "Error");
            }
          });
      }
    }
  }

}
