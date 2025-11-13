import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(this.hasStoredAuth());
  private router = inject(Router);

  hasStoredAuth(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  constructor() {}

  login(email: string, password: string) {
    const success = email === 'admin@test.com' && password === 'admin123';
    return of(success).pipe(
      delay(1000), // simulate server delay
      tap((ok) => {
        this.isLoggedIn.set(ok);
        if (ok) {
          localStorage.setItem('auth', 'true');
        } else {
          localStorage.removeItem('auth');
        }
      })
    );
  }

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
