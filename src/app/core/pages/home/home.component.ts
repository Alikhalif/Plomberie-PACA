import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from "./services/services.component";
import { TarifsComponent } from "./tarifs/tarifs.component";
import { ZonesInterventionComponent } from "./zones-intervention/zones-intervention.component";
import { AvisComponent } from "./avis/avis.component";
import { ContactComponent } from "./contact/contact.component";
import { FAQComponent } from "./faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, TarifsComponent, ZonesInterventionComponent, AvisComponent, ContactComponent, FAQComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
