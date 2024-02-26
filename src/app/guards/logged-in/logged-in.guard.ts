import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1),
    map(user => !!user), 
    tap(loggedIn => {
      if (!loggedIn) {
        console.log('Not logged in, access denied');
        router.navigate(['']);
      }
    })
  );
};
