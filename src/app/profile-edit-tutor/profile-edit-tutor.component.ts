import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-profile-edit-tutor',
  templateUrl: './profile-edit-tutor.component.html',
  styleUrls: ['./profile-edit-tutor.component.css']
})
export class ProfileEditTutorComponent implements OnInit {

  form;

  constructor(
    fb: FormBuilder,
    private registerService: RegisterService
  ) {

    this.form = fb.group({
      fname: [''],
      lname: [''],
      mobile: ['', Validators.minLength(10)],
      location: [''],
      subject: ['']
    })

   }

  ngOnInit() {
  }

  get fname(){return this.form.get('fname')}
  get lname(){return this.form.get('lname')}
  get mobile(){return this.form.get('mobile')}
  get location(){return this.form.get('location')}
  get subject(){return this.form.get('subject')}

  /* onSubmit(form){
    this.registerService.profileEditTutor(form.value)
      .subscribe(response => {
        console.log(response);
      })
  } */


}
