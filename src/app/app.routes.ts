import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AnalyticsComponent } from './features/dashboard/analytics/analytics.component';
import { DetailsComponent } from './features/users/details/details.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { LoginGuard } from './core/guards/auth/login.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        canActivate: [LoginGuard],

        loadComponent: () =>
          import('./features/auth/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then(
            (m) => m.RegisterComponent
          ),
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
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [authGuard],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./features/not-authorized/not-authorized.component').then(
        (m) => m.NotAuthorizedComponent
      ),
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
