import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { AnalyticsComponent } from './features/dashboard/analytics/analytics.component';
import { ListComponent } from './features/users/list/list.component';
import { DetailsComponent } from './features/users/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'dashboard/analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'users',
    component: ListComponent,
  },
  {
    path: 'users/:id',
    component: DetailsComponent,
  },
];
