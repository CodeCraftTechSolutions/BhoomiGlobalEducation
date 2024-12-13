import { Component } from '@angular/core';
import { EventscompComponent } from '../eventscomp/eventscomp.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ChatSignalService } from '../../signals/chatsignal.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [EventscompComponent,TestimonialsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(public chatService: ChatSignalService) {}

  openChat() {
    this.chatService.openChat(); // Opens the chat popup
  }

}
