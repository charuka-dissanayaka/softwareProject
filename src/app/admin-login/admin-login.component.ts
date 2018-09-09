import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form;

  constructor(
    private router: Router,
    private authService: AuthService,
    fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(form){
    let user = form.value;
    this.authService.adminLogin(user)
      .subscribe(response=>{
        if(response.json().token){
          let token = response.json().token;
          localStorage.setItem('token', token);
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['noaccess']);
        }
      });
  }


  ngOnInit() {
  }

}
