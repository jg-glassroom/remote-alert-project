import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  timeoutId: any;
  timeout = 1800000;

  constructor(private authService: AuthService) {}

  startWatching() {
    this.resetTimer();
    window.addEventListener('mousemove', this.resetTimer.bind(this));
    window.addEventListener('keydown', this.resetTimer.bind(this));
    window.addEventListener('scroll', this.resetTimer.bind(this));
  }

  stopWatching() {
    window.removeEventListener('mousemove', this.resetTimer.bind(this));
    window.removeEventListener('keydown', this.resetTimer.bind(this));
    window.removeEventListener('scroll', this.resetTimer.bind(this));
    this.stopTimer();
  }

  resetTimer() {
    this.stopTimer();
    this.timeoutId = setTimeout(() => {
      this.stopWatching();
      this.authService.signOut();
      alert('You have been logged out due to inactivity.');
    }, this.timeout);
  }

  stopTimer() {
    clearTimeout(this.timeoutId);
  }
}
