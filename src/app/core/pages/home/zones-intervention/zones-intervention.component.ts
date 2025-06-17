import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zones-intervention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zones-intervention.component.html',
  styleUrl: './zones-intervention.component.scss'
})
export class ZonesInterventionComponent {
  interventionZones = [
    {
      department: 'Bouches-du-Rhône',
      cities: ['Marseille', 'Aubagne', 'Aix', 'Allauch', 'Cassis'],
      color: 'linear-gradient(135deg, #2563eb, #1e40af)',
      icon: '🏙️'
    },
    {
      department: 'Var',
      cities: ['Toulon', 'Fréjus', 'La Seyne', 'Saint-Tropez'],
      color: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      icon: '⛵'
    },
    {
      department: 'Alpes-Maritimes',
      cities: ['Nice', 'Antibes', 'Cannes'],
      color: 'linear-gradient(135deg, #16a34a, #15803d)',
      icon: '🌊'
    },
    {
      department: 'Vaucluse',
      cities: ['Avignon', 'Cavaillon', 'Orange'],
      color: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
      icon: '🏰'
    },
    {
      department: 'Alpes-de-Haute-Provence',
      cities: ['Manosque', 'Digne'],
      color: 'linear-gradient(135deg, #f59e0b, #d97706)',
      icon: '⛰️'
    }
  ];

  responseTime = '1h à 2h selon secteur';

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Zones d’intervention – Plombier en PACA | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Nous intervenons à Marseille, Toulon, Nice, Avignon et dans toute la région PACA. Intervention rapide entre 1h et 2h.' },
      { name: 'keywords', content: 'plombier Marseille, plombier Toulon, plombier PACA, intervention plomberie PACA, dépannage plomberie PACA' }
    ]);
  }
}
