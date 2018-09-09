import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  has = false;
  

  ngOnInit() {
  }

  constructor(
    private router: Router,
    private registerService: RegisterService,
    fb: FormBuilder){
    this.form = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      role: ['', Validators.required]
    });
  }

  get fname(){
    return this.form.get('fname');
  }

  get lname(){
    return this.form.get('lname');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get role(){
    return this.form.get('role');
  }

  onSubmit(regForm){
   
    let user = regForm.value;
    console.log(regForm.value);
    this.userRegister(user);
    this.form.reset();
  }

  userRegister(user){
    this.registerService.registerUser(user).subscribe(data => {
      if(data.json().success){
        if(data.json().has){
          this.has = true;
        }else{
          this.router.navigate(['login']);
        }
      } else {
        alert('User register unsuccess');
      }
    });
  }

}
