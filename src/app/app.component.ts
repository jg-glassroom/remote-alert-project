import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IdleService } from './services/idle/idle.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private idleService: IdleService) {}

  ngOnInit() {
    this.idleService.startWatching();
  }

  ngOnDestroy() {
    this.idleService.stopWatching();
  }
}
