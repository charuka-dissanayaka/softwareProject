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
    this.scrapTutors();
  }

  searchByDistrict(dis) {
    console.log(dis.value);
    let original = this.tutors;
    if (!dis.value) {
      this.scrapTutors();
    } else {
      let temp = [];
      for (let i of this.tutors) {
        if (i.location == dis.value) {
          temp.push(i);
        }
      }
      this.tutors = temp;
    }
  }

  scrapTutors() {
    let tutorList = this.tutorListService.getTutorList()
      .subscribe(data => {
        //console.log(data.json().user);
        console.log("constructor");
        this.tutors = data.json().user;
      });
  }


}
