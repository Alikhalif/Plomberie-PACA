import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { animation: 'home' } },


    ]
  }
];
