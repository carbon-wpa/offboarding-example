import { Routes } from '@angular/router';
import { dashboardResolver } from './pages/dashboard';
import { employeeDetailsResolver } from './pages/employee-datails';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    resolve: {
      employees: dashboardResolver
    },
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((c) => c.DashboardComponent)
  },
  {
    path: 'employee-details/:id',
    pathMatch: 'full',
    resolve: {
      employee: employeeDetailsResolver
    },
    loadComponent: () => import('./pages/employee-datails/employee-datails.component').then((c) => c.EmployeeDatailsComponent)
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];
