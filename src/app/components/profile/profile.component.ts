import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null),
      language: new FormControl(null),
      isAdmin: new FormControl(null),
      emailUpdates: new FormControl(null),
    });
  }

  connectToGoogle() {}
  connectToFacebook() {}
  updateProfile() {}

}
