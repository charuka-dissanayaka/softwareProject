import { Component, OnInit } from '@angular/core';
import { TutorCardListService } from '../services/tutor-card-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tutors;
  count = 0;

  constructor(private tutorListService: TutorCardListService) { 
    this.scrapTutors();
  }

  ngOnInit() {
  }


  disCount(dis){
    let count = 0;
    for(let i of this.tutors){
      if(i.location == dis.value){
        count++;
      }
    }
    this.count = count;
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
