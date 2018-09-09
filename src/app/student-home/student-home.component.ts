import { Component, OnInit } from '@angular/core';
import { TutorCardListService } from '../services/tutor-card-list.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {


  tutors;

  constructor(private tutorListService: TutorCardListService) {
    let tutorList = tutorListService.getTutorList()
      .subscribe(data => {
        console.log(data.json());
        this.tutors = data.json();
      });
  }

}
