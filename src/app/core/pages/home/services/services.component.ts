import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


interface Service {
  id: number;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  urgency: 'high' | 'medium' | 'low';
  availability: string;
  services: ServiceDetail[];
}

interface ServiceDetail {
  name: string;
  description: string;
  icon: string;
  popular?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @ViewChildren('serviceCard') serviceCards!: QueryList<ElementRef>;

  servicesData: Service[] = [
    {
      id: 1,
      title: 'Dépannage d\'urgence 24h/7',
      icon: '🚨',
      color: '#dc2626',
      gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      urgency: 'high',
      availability: 'Disponible maintenant',
      services: [
        {
          name: 'Fuite d\'eau sur robinet, mur ou tuyauterie',
          description: 'Réparation immédiate de toute fuite d\'eau pour éviter les dégâts',
          icon: '💧',
          popular: true
        },
        {
          name: 'WC bouché ou cassé',
          description: 'Débouchage et réparation de toilettes, mécanisme de chasse',
          icon: '🚽'
        },
        {
          name: 'Canalisation bouchée (salle de bain, cuisine)',
          description: 'Débouchage professionnel évier, lavabo, douche, baignoire',
          icon: '🔧'
        },
        {
          name: 'Ballon qui fuit ou HS',
          description: 'Réparation ou remplacement immédiat de chauffe-eau',
          icon: '🔥'
        }
      ]
    },
    {
      id: 2,
      title: 'Installation et rénovation',
      icon: '🏗️',
      color: '#2563eb',
      gradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      urgency: 'medium',
      availability: 'Sur rendez-vous',
      services: [
        {
          name: 'Création ou rénovation de salle de bain',
          description: 'Projet complet clé en main avec devis détaillé',
          icon: '🛁',
          popular: true
        },
        {
          name: 'Remplacement chauffe-eau, cumulus',
          description: 'Installation de chauffe-eau électrique, gaz ou thermodynamique',
          icon: '⚡'
        },
        {
          name: 'Pose d\'adoucisseur, robinetterie, douche, WC suspendu',
          description: 'Installation d\'équipements sanitaires modernes',
          icon: '🚿'
        },
        {
          name: 'Tuyauterie cuivre, PER, multicouche',
          description: 'Création et rénovation de réseaux d\'eau avec matériaux durables',
          icon: '🔩'
        }
      ]
    },
    {
      id: 3,
      title: 'Entretien et maintenance',
      icon: '🔧',
      color: '#16a34a',
      gradient: 'linear-gradient(135deg, #16a34a, #15803d)',
      urgency: 'low',
      availability: 'Planifiable',
      services: [
        {
          name: 'Entretien annuel chauffe-eau',
          description: 'Vérification, nettoyage et optimisation de votre chauffe-eau',
          icon: '📅'
        },
        {
          name: 'Détartrage ballon d\'eau chaude',
          description: 'Élimination du calcaire pour prolonger la durée de vie',
          icon: '🧽'
        },
        {
          name: 'Désembouage des radiateurs',
          description: 'Nettoyage du circuit de chauffage pour une meilleure efficacité',
          icon: '♨️'
        },
        {
          name: 'Purge réseau',
          description: 'Évacuation de l\'air des canalisations et radiateurs',
          icon: '💨'
        }
      ]
    },
    {
      id: 4,
      title: 'Recherche de fuite (visible ou non)',
      icon: '🔍',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      urgency: 'high',
      availability: 'Intervention rapide',
      services: [
        {
          name: 'Recherche simple (visuelle, pression)',
          description: 'Détection rapide des fuites apparentes avec test de pression',
          icon: '👁️'
        },
        {
          name: 'Prélocalisation réseau',
          description: 'Localisation précise avec équipement de détection électronique',
          icon: '📡',
          popular: true
        },
        {
          name: 'Rédaction rapport assurance',
          description: 'Document officiel pour vos démarches d\'indemnisation',
          icon: '📋'
        }
      ]
    }
  ];

  advantages = [
    {
      icon: '⚡',
      title: 'Intervention rapide',
      text: 'Délai moyen de 1h à 2h maximum sur toute la région PACA'
    },
    {
      icon: '🎓',
      title: 'Techniciens certifiés',
      text: 'Artisans qualifiés avec formations régulières aux nouvelles technologies'
    },
    {
      icon: '💰',
      title: 'Tarifs transparents',
      text: 'Devis clair et détaillé, aucune surprise sur la facture finale'
    },
    {
      icon: '🛡️',
      title: 'Garantie qualité',
      text: 'Tous nos travaux sont garantis, matériel et main d\'œuvre'
    }
  ];

  private observer!: IntersectionObserver;

  constructor(private title: Title, private meta: Meta){
    this.title.setTitle('Nos services de plomberie en PACA | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos prestations : dépannage 24h/24, rénovation, entretien et recherche de fuite dans toute la région PACA.' },
      { name: 'keywords', content: 'services plomberie PACA, dépannage, rénovation salle de bain, fuite eau, chauffe-eau, entretien plomberie' }
    ]);
  }

  ngOnInit() {
    this.setupScrollAnimations();
  }

  ngAfterViewInit() {
    this.animateServiceCards();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupScrollAnimations() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      // Observer les éléments animés
      setTimeout(() => {
        const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left');
        animatedElements.forEach(el => this.observer.observe(el));
      }, 100);
    }
  }

  private animateServiceCards() {
    if (this.serviceCards) {
      this.serviceCards.forEach((card, index) => {
        setTimeout(() => {
          card.nativeElement.classList.add('animate-visible');
        }, index * 200);
      });
    }
  }
}
