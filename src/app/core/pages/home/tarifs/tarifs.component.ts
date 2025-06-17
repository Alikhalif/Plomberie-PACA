import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.scss'
})
export class TarifsComponent {
  pricingPlans = [
    {
      title: 'Dépannages Urgents',
      icon: '🚨',
      gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      items: [
        { name: 'Fuite sous évier', price: '89 € TTC', popular: true },
        { name: 'Débouchage évier/lavabo', price: '109 € TTC' },
        { name: 'WC bouché', price: '129 € TTC' },
        { name: 'Recherche de fuite', price: '149 € TTC' }
      ]
    },
    {
      title: 'Installations',
      icon: '🛠️',
      gradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      items: [
        { name: 'Remplacement chauffe-eau', price: '290 € TTC', popular: true },
        { name: 'Installation robinetterie', price: '120 € TTC' },
        { name: 'Pose WC suspendu', price: '350 € TTC' },
        { name: 'Installation adoucisseur', price: '499 € TTC' }
      ]
    },
    {
      title: 'Forfaits Maintenance',
      icon: '🔧',
      gradient: 'linear-gradient(135deg, #16a34a, #15803d)',
      items: [
        { name: 'Entretien annuel chauffe-eau', price: '89 € TTC' },
        { name: 'Détartrage complet', price: '129 € TTC', popular: true },
        { name: 'Désembouage radiateurs', price: '199 € TTC' },
        { name: 'Contrat annuel', price: '299 € TTC' }
      ]
    }
  ];

  pricingNotes = [
    'Déplacement: 49 € TTC (déduit en cas d\'intervention)',
    'Forfaits hors pièces détachées',
    'Prix TTC pour interventions standard',
    'Devis gratuit sous 30 minutes'
  ];


  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Tarifs plomberie clairs et sans surprise | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Consultez nos prix : fuite sous évier, débouchage, remplacement chauffe-eau. Devis gratuits et déplacement offert si intervention.' },
      { name: 'keywords', content: 'tarifs plomberie PACA, prix dépannage fuite, devis plombier, coût intervention plomberie' }
    ]);
  }
}
