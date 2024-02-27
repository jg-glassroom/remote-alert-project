import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatSidenavModule, 
    CommonModule, 
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('sidemenu') sidemenu!: MatDrawer;

  constructor(public auth: AuthService, private router: Router) {}

  public navigate(route: any) {
    this.router.navigate([route]).then(() => {
      this.sidemenu.close();
    });
  }
}
