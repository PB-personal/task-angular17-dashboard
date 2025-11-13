import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const LoginGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const loggedIn = authService.isLoggedIn();
  if (loggedIn) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
