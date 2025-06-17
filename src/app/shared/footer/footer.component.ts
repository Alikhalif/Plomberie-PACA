import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Services data
  services = [
    { name: 'Dépannage urgence 24h/7', link: '/services#urgence' },
    { name: 'Installation & Rénovation', link: '/services#installation' },
    { name: 'Recherche de fuite', link: '/services#recherche-fuite' },
    { name: 'Entretien & Maintenance', link: '/services#entretien' }
  ];

  // Intervention zones
  zones = [
    { name: 'Marseille', link: '/zones/marseille' },
    { name: 'Nice', link: '/zones/nice' },
    { name: 'Toulon', link: '/zones/toulon' },
    { name: 'Avignon', link: '/zones/avignon' },
    { name: 'Aix-en-Provence', link: '/zones/aix' }
  ];

  // Quick links
  quickLinks = [
    { name: 'Tarifs & Forfaits', link: '/tarifs' },
    { name: 'Avis clients', link: '/avis' },
    { name: 'Contact', link: '/contact' },
    { name: 'Devis gratuit', link: '/devis' }
  ];

  // Social links
  socialLinks = [
    // {
    //   name: 'Google Business',
    //   icon: '📍',
    //   link: 'https://business.google.com',
    //   color: '#4285F4'
    // },
  ];

  // Contact info
  contactInfo = {
    phone: '+33 7 56 93 52 00',
    email: 'contact@depannageplomberie-paca.com',
    address: 'Région PACA - Intervention 24h/24',
    responseTime: 'Moins de 2h'
  };

  onEmergencyCall(): void {
    window.location.href = `tel:${this.contactInfo.phone}`;
  }

  onEmailContact(): void {
    window.location.href = `mailto:${this.contactInfo.email}`;
  }

  onSocialClick(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
