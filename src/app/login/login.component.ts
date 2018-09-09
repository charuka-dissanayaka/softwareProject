import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  logInvalid = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  ngOnInit() {
    //this.authService.logOut();
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  get role(){
    return this.form.get('role');
  }


  onSubmit(loginForm){
    let user = loginForm.value;
    this.authService.loginUser(user).subscribe(
      res=>{
        if(res.json().token){
          localStorage.setItem('token', res.json().token);
          if(this.authService.currentUser.user.role == 'tutor'){
            this.router.navigate(['profile-edit-tutor']);
          }else{
            this.router.navigate(['studenthome']);            
          }
        }
        else{
          this.form.reset();
          this.logInvalid = true;
        }
      },
      err=>{
        throw err;
      }
    )
  }
}
