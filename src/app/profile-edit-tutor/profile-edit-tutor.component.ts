import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileEditService } from './profile-edit.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit-tutor',
  templateUrl: './profile-edit-tutor.component.html',
  styleUrls: ['./profile-edit-tutor.component.css']
})
export class ProfileEditTutorComponent implements OnInit {

  form;

  constructor(
    fb: FormBuilder,
    private profileEditService: ProfileEditService,
    private authService: AuthService
  ) {
    let user = this.authService.currentUser.user;
    this.form = fb.group({
      fname: [user.fname],
      lname: [user.lname],
      mobile: [user.mobile, Validators.minLength(10)],
      location: [user.location],
      subject: [user.subject]
    })

   }

  ngOnInit() {
  }

  get fname(){return this.form.get('fname')}
  get lname(){return this.form.get('lname')}
  get mobile(){return this.form.get('mobile')}
  get location(){return this.form.get('location')}
  get subject(){return this.form.get('subject')}

  onSubmit(form){
    let profile = form.value;
    
    let user = {
      fname: profile.fname,
      lname: profile.lname,
      mobile: profile.mobile,
      location: profile.location,
      subject: profile.subject,
      role: this.authService.currentUser.user.role,
      email: this.authService.currentUser.user.email
    }

    this.profileEditService.updateProfile(user)
      .subscribe(response => {
        if(response.json().success){
          console.log("profile edited successfully");
        }else{
          console.log("Profile edit error");
        }
      })
  }


}
