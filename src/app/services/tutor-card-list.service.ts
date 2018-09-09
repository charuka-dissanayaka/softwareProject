import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TutorCardListService{

   constructor(private http: Http){
   }

   getTutorList(){
       return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
   
}