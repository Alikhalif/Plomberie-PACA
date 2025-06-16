import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


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
      value: '+33412345678',
      action: 'tel:+33412345678',
      color: 'linear-gradient(135deg, #2563eb, #1e40af)'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '06 12 34 56 78',
      action: 'https://wa.me/33612345678',
      color: 'linear-gradient(135deg, #25D366, #128C7E)'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'contact@plomberie-paca.fr',
      action: 'mailto:contact@plomberie-paca.fr',
      color: 'linear-gradient(135deg, #EA4335, #BB001B)'
    }
  ];

  submitForm() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.contactForm.value);
      // Add your form submission logic here
    }
  }
}
