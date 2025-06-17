import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
   animations: [
    trigger('answerAnimation', [
      state('closed', style({
        height: '0',
        opacity: '0',
        padding: '0'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        padding: '0 24px 24px'
      })),
      transition('closed <=> open', [
        animate('0.5s cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class FAQComponent {

  faqItems = [
    {
      question: "Quand appeler un plombier en urgence ?",
      answer: "Nous considérons comme urgence toute situation pouvant causer des dégâts immédiats : fuite importante, eau qui ne coule pas, WC bouché avec débordement, chauffe-eau en panne, etc. Notre service d'urgence est disponible 24h/24.",
      icon: "🚨",
      isOpen: false
    },
    {
      question: "Combien coûte une réparation de fuite ?",
      answer: "Le prix dépend du type de fuite et de sa localisation. En moyenne : fuite sous évier (89€), fuite de chauffe-eau (à partir de 120€), fuite cachée (à partir de 149€). Nous offrons un diagnostic gratuit avant toute intervention.",
      icon: "💰",
      isOpen: false
    },
    {
      question: "Dois-je couper l'eau en attendant ?",
      answer: "Oui, en cas de fuite importante, coupez l'arrivée d'eau générale (souvent située sous l'évier ou dans le garage). Pour les WC bouchés, fermez le robinet d'arrêt derrière la cuvette.",
      icon: "🚰",
      isOpen: false
    },
    {
      question: "Intervenez-vous les week-ends ?",
      answer: "Oui, nos plombiers interviennent 7j/7, y compris les dimanches et jours fériés. Les tarifs restent identiques du lundi au vendredi de 8h à 20h. Un léger supplément peut s'appliquer en dehors de ces créneaux.",
      icon: "📅",
      isOpen: false
    }
  ];


  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('FAQ – Vos questions sur nos services de plomberie | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos réponses aux questions fréquentes : urgences, coûts, délais, week-ends, et procédures à suivre.' },
      { name: 'keywords', content: 'FAQ plomberie PACA, urgence plomberie, couper l’eau fuite, tarif plombier' }
    ]);
  }

  toggleFAQ(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
