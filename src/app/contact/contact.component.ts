import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { environment } from '../../env';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, FooterComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      environment.emailjs.serviceID,
      environment.emailjs.templateID,
      e.target as HTMLFormElement,
      environment.emailjs.publicKey
    )
    .then(() => {
      alert('Message envoyé !');
    }, (error) => {
      console.log(error);
      alert("Erreur d'envoi");
    });

    (e.target as HTMLFormElement).reset();
  }
}
