import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(public auth: AuthService) {}
}
