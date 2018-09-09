import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    return this.http.post('http://localhost:3000/register', user);
  }

  profileEditTutor(user){
    return this.http.post("http://localhost:3000/tutorProfileEdit", user);
  }
}
