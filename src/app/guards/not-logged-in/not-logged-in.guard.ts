import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';

export const notLoggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => !user), 
    tap(notLoggedIn => {
      if (!notLoggedIn) {
        console.log('Already logged in, redirecting to home');
        router.navigate(['/home']); 
      }
    })
  );
};
