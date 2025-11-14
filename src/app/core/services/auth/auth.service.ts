import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(this.hasStoredAuth());
  private router = inject(Router);
  userRole = signal<'Admin' | 'User' | null>(null);

  hasStoredAuth(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  constructor() {
    const storedRole = localStorage.getItem('role');
    if (storedRole === 'Admin' || storedRole === 'User') {
      this.userRole.set(storedRole);
    }
  }

  login(email: string, password: string) {
    let success = false;
    let role: 'Admin' | 'User' | null = null;
    if (email === 'admin@test.com' && password === 'admin123') {
      success = true;
      role = 'Admin';
    } else if (email === 'user@test.com' && password === 'user123') {
      success = true;
      role = 'User';
    }

    return of(success).pipe(
      delay(1000), // simulate server delay
      tap((ok) => {
        this.isLoggedIn.set(ok);
        if (ok && role) {
          this.userRole.set(role);
          localStorage.setItem('auth', 'true');
          localStorage.setItem('role', role);
        } else {
          localStorage.clear();
        }
      })
    );
  }

  logout() {
    this.isLoggedIn.set(false);
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getRole() {
    return localStorage.getItem('role');
  }
}
