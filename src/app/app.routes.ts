import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
    title: 'Plombier en PACA – Urgences 24h/24 | Plomberie-PACA.fr'
  },
  {
    path: 'services',
    loadComponent: () => import('./core/pages/home/services/services.component').then(m => m.ServicesComponent),
    title: 'Nos services de plomberie en PACA | Plomberie-PACA.fr'
  },
  {
    path: 'tarifs',
    loadComponent: () => import('./core/pages/home/tarifs/tarifs.component').then(m => m.TarifsComponent),
    title: 'Tarifs plomberie clairs et sans surprise | Plomberie-PACA.fr'
  },
  {
    path: 'zones',
    loadComponent: () => import('./core/pages/home/zones-intervention/zones-intervention.component').then(m => m.ZonesInterventionComponent),
    title: 'Zones d’intervention – Plombier PACA | Plomberie-PACA.fr'
  },
  {
    path: 'avis',
    loadComponent: () => import('./core/pages/home/avis/avis.component').then(m => m.AvisComponent),
    title: 'Avis clients – Plombier fiable en PACA | Plomberie-PACA.fr'
  },
  {
    path: 'contact',
    loadComponent: () => import('./core/pages/home/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contactez un plombier en PACA | Plomberie-PACA.fr'
  },
  {
    path: 'faq',
    loadComponent: () => import('./core/pages/home/faq/faq.component').then(m => m.FAQComponent),
    title: 'FAQ – Questions sur nos services de plomberie | Plomberie-PACA.fr'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
