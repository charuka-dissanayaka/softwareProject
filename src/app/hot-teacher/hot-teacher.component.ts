import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-teacher',
  templateUrl: './hot-teacher.component.html',
  styleUrls: ['./hot-teacher.component.css']
})
export class HotTeacherComponent implements OnInit {

  @Input() name:string;
  @Input() imgUrl:string;
  @Input() desc:string;
  @Input() location:string;

  constructor() { }

  ngOnInit() {
  }

}
