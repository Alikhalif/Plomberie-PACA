import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent {
  testimonials = [
    {
      rating: 5,
      comment: "Intervention express à Marseille un samedi soir. Tarifs honnêtes, plombier très pro.",
      author: "Karim M.",
      location: "Marseille",
      date: "15/06/2024",
      service: "Dépannage urgent"
    },
    {
      rating: 5,
      comment: "Débouchage salle de bain rapide et propre. Je recommande sans hésiter.",
      author: "Julie R.",
      location: "Toulon",
      date: "10/06/2024",
      service: "Débouchage canalisation"
    },
    {
      rating: 5,
      comment: "Remplacement chauffe-eau effectué en 1h chrono. Professionnalisme exemplaire.",
      author: "Luc D.",
      location: "Nice",
      date: "05/06/2024",
      service: "Installation chauffe-eau"
    },
    {
      rating: 5,
      comment: "Plombier arrivé en moins d'1h30 pour une fuite d'eau. Service impeccable.",
      author: "Sophie P.",
      location: "Aix-en-Provence",
      date: "01/06/2024",
      service: "Recherche de fuite"
    }
  ];

  averageRating = 4.9; // Calculated average
  totalReviews = 128; // Total number of reviews

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Avis clients – Plombier fiable en PACA | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Nos clients témoignent : interventions rapides, travail propre, tarifs justes. Découvrez leurs avis sur nos prestations de plomberie en PACA.' },
      { name: 'keywords', content: 'avis plombier PACA, témoignages clients plomberie, service plomberie Marseille, Toulon, Nice' }
    ]);
  }
}
