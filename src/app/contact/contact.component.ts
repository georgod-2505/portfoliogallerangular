import { Component } from '@angular/core';
import { Contacts } from './contact-data/mock-contacts';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  responses = Contacts
}
