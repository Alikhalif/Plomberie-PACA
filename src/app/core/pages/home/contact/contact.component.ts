import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    description: new FormControl('', [Validators.required, Validators.minLength(20)])
  });

  contactMethods = [
    {
      icon: '📞',
      title: 'Appel téléphonique',
      value: '+33756935200',
      action: 'tel:+33756935200',
      color: 'linear-gradient(135deg, #25D366, #128C7E)'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@depannageplomberie-paca.com',
      action: 'mailto:contact@depannageplomberie-paca.com',
      color: 'linear-gradient(135deg, #EA4335, #BB001B)'
    }
  ];


  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contactez un plombier en PACA – Urgence ou devis | depannageplomberie-paca.com');
    this.meta.addTags([
      { name: 'description', content: 'Contactez-nous pour une urgence plomberie ou une demande de devis. Disponible 24h/24 dans toute la région PACA.' },
      { name: 'keywords', content: 'contact plombier PACA, urgence plomberie contact, devis plomberie Marseille, Toulon, PACA' }
    ]);
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      // Add your form submission logic here
    }
  }
}
