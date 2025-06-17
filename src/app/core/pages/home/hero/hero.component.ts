import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  isVisible = true;

  features = [
    { icon: '⚡', text: 'Intervention urgente sous 2h' },
    { icon: '🆓', text: 'Déplacement gratuit si réparation sur place' },
    { icon: '👨‍🔧', text: 'Techniciens certifiés, devis transparent' },
    { icon: '💳', text: 'Paiement CB, virement, ou sur facture' }
  ];

  private animationInterval: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title, private meta: Meta
  ) {
    this.title.setTitle('Plombier 24h/24 – Intervention rapide en PACA | depannageplomberie-paca.com');

    this.meta.addTags([
      { name: 'description', content: 'Plombier en région PACA – Dépannage rapide, installation, rénovation et recherche de fuite. Interventions en moins de 2h.' },
      { name: 'keywords', content: 'plombier PACA, urgence plomberie, dépannage fuite, plombier Marseille, Aix, Toulon, Nice, PACA' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Plombier PACA – Urgences 24h/24 | depannageplomberie-paca.com' },
      { property: 'og:description', content: 'Un plombier de confiance en région PACA. Intervention rapide, devis gratuit et techniciens certifiés.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.depannageplomberie-paca.com/home' },
    ]);
  }


  ngOnInit() {
    // Trigger animations on load
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 10);
      this.startShapeAnimation();
    }
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
      if (isPlatformBrowser(this.platformId)) {
      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (scrollIndicator) {
        const opacity = Math.max(0, 1 - window.pageYOffset / 300);
        scrollIndicator.style.opacity = opacity.toString();
      }
    }
  }

  private startShapeAnimation() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      const element = shape as HTMLElement;
      const delay = index * 2000;

      setTimeout(() => {
        element.style.animationDelay = '0s';
        element.classList.add('floating');
      }, delay);
    });
  }
}
