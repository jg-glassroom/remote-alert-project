import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { sendPasswordResetEmail, getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  registration: boolean = false;
  hide: boolean = true;
  formGroup!: FormGroup;
  errorMessage: string = '';
  showForgotPassword: boolean = false;
  toaster = inject(ToastrService);

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
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

  forgotPassword() {
    this.showForgotPassword = true;
    this.createForm();
  }

  goBack() {
    this.showForgotPassword = false;
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: this.registration ? new FormControl(null, Validators.required) : new FormControl(null),
      language: this.registration ? new FormControl(null, Validators.required) : new FormControl(null),
      role: this.registration ? new FormControl(this.registration ? "standard" : null, Validators.required) : new FormControl(null),
      emailUpdates: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: this.registration ? new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        this.passwordStrengthValidator()
      ]) : this.showForgotPassword ? new FormControl(null) : new FormControl(null, Validators.required),
    });
  }

  toggleRegistration() {
    this.registration = !this.registration;
    this.errorMessage = "";
    this.createForm();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const value = this.formGroup.value;
      if (this.registration) {
        this.auth.signUp(value.email, value.password, value.username, value.language, value.role, value.emailUpdates)
        .then(() => {
          this.toaster.success("Account successfully created", "Success");
          this.toggleRegistration();
        })
        .catch((error) => {
            this.errorMessage = error.message || 'An unexpected error occurred.';
        });
      } else {
        if (this.showForgotPassword) {
          const auth = getAuth()
          fetchSignInMethodsForEmail(auth, value.email).then((signInMethods) => {
            if (signInMethods.includes('password')) {
              sendPasswordResetEmail(auth, value.email)
              .then(() => {
                this.toaster.info(`Please check the email address ${value.email} for instructions to reset your password.`, "Info");
                this.showForgotPassword = false;
                this.registration = false;
                this.createForm();
              })
              .catch((error) => {
                this.errorMessage = error.message || 'An unexpected error occurred.';
              });
            } else if (signInMethods.length > 0) {
              this.toaster.info(`It seems you usually sign in with ${signInMethods[0]}. Please use that method to sign in.`, "Authentication method found");
            }
          })
            .catch((error) => {
              console.error("Error fetching sign in methods: ", error);
              this.toaster.error("An error occurred while checking the sign in methods.", "Error");
            });
        } else {
          this.auth.emailPasswordSignIn(value.email, value.password)
          .then(() => {
            this.router.navigate(['/home']);
          })
          .catch((error) => {
            this.errorMessage = error.message || 'An unexpected error occurred.';
          });
        }
      }
    }
  }
}
