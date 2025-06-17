import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
    title: 'Plombier en PACA – Urgences 24h/24 | depannageplomberie-paca.com'
  },
  {
    path: 'services',
    loadComponent: () => import('./core/pages/home/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'tarifs',
    loadComponent: () => import('./core/pages/home/tarifs/tarifs.component').then(m => m.TarifsComponent),
  },
  {
    path: 'zones',
    loadComponent: () => import('./core/pages/home/zones-intervention/zones-intervention.component').then(m => m.ZonesInterventionComponent),
  },
  {
    path: 'avis',
    loadComponent: () => import('./core/pages/home/avis/avis.component').then(m => m.AvisComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./core/pages/home/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'faq',
    loadComponent: () => import('./core/pages/home/faq/faq.component').then(m => m.FAQComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
