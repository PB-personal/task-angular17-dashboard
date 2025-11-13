import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AnalyticsComponent } from './features/dashboard/analytics/analytics.component';
import { DetailsComponent } from './features/users/details/details.component';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/home/home.component').then(
        (m) => m.HomeComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard/analytics',
    component: AnalyticsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/list/list.component').then(
        (m) => m.ListComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'users/:id',
    component: DetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
