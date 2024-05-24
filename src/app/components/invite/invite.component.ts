import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  ValidatorFn,
  Validators,
  FormControl,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  formGroup!: FormGroup;
  hide: boolean = true;
  isLoading: boolean = false;
  hideConfirm: boolean = true;
  token: string | null = null;
  userEmail: string | null = null;
  userId: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private functions: AngularFireFunctions,
    private afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.createForm();
  }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    if (this.token) {
      this.isLoading = true;
      await this.getUserByToken(this.token);
      this.isLoading = false;
    }
  }

  async getUserByToken(token: string) {
    try {
      const userSnapshot: any = await this.db.collection('user', ref => ref.where('token', '==', token)).get().toPromise();
      if (!userSnapshot.empty) {
        this.userId = userSnapshot.docs[0].id;
        await this.getUserEmail();
      } else {
        console.error('No user found with this token.');
      }
    } catch (error) {
      console.error('Error fetching user by token:', error);
    }
  }

  async getUserEmail() {
    const getUserEmails = this.functions.httpsCallable('getUserEmails');
    try {
      const result = await firstValueFrom(getUserEmails({ userIds: [this.userId] }));
      if (result.emails && result.emails.length === 1) {
        this.formGroup.patchValue({ email: result.emails[0].email });
        this.formGroup.get('email')?.disable();
      } else {
        console.error('No email found for this user.');
      }
    } catch (error) {
      console.error('Error fetching user email:', error);
    }
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
    this.formGroup = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      language: new FormControl('en', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmPassword: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        this.passwordStrengthValidator()
      ]),
    }, {
      validators: this.matchValidator('password', 'confirmPassword')
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
    };
  }

  async onSubmit() {
    if (this.formGroup.valid) {
      this.isLoading = true;
      const { username, password, language } = this.formGroup.value;
      if (this.userId) {
        try {
          const updateUser = this.functions.httpsCallable('updateUser');
          await firstValueFrom(updateUser({
            userId: this.userId,
            username: username,
            password: password,
            language: language
          }));

          this.isLoading = false;
          this.router.navigate(['']);
        } catch (error) {
          console.error('Error updating user:', error);
          this.isLoading = false;
        }
      } else {
        console.error('User ID is not available.');
        this.isLoading = false;
      }
    }
  }
}
