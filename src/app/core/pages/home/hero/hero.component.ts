import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  isVisible = false;

  features = [
    { icon: '⚡', text: 'Intervention urgente sous 2h' },
    { icon: '🆓', text: 'Déplacement gratuit si réparation sur place' },
    { icon: '👨‍🔧', text: 'Techniciens certifiés, devis transparent' },
    { icon: '💳', text: 'Paiement CB, virement, ou sur facture' }
  ];

  private animationInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit() {
    // Trigger animations on load
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 100);
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
