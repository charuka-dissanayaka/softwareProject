import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent {

  @Input() tutor: {
    id:string,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string
    },
    geo: {
      lat: string,
      lng: string
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

  constructor() { }


}
