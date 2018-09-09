import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TutorCardListService{

   constructor(private http: Http){
   }

   getTutorList(name){
    //when api created send "name" parameter with get request
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
   
}