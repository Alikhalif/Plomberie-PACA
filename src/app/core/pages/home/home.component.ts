import { Component, HostListener, inject } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "./services/services.component";
import { TarifsComponent } from "./tarifs/tarifs.component";
import { ZonesInterventionComponent } from "./zones-intervention/zones-intervention.component";
import { AvisComponent } from "./avis/avis.component";
import { ContactComponent } from "./contact/contact.component";
import { FAQComponent } from "./faq/faq.component";
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, TarifsComponent, ZonesInterventionComponent, AvisComponent, ContactComponent, FAQComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  sections = [
    'hero',
    'services',
    'tarifs',
    'zones',
    'avis',
    'contact',
    'faq',
  ];

  currentSection = 'hero';


  ngOnInit() {
    this.router.events.subscribe(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        this.currentSection = fragment;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.pageYOffset;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
          this.currentSection = section;
          history.replaceState(null, '', `#${section}`);
          break;
        }
      }
    }
  }

  scrollTo(section: string) {
    this.currentSection = section;
    this.viewportScroller.scrollToAnchor(section);
  }
}
