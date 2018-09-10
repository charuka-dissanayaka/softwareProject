import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProfileEditService{

    constructor(
        private http: Http,
    ){

    }

    updateProfile(profile){
        return this.http.put("http://localhost:3000/editProfile", profile);
    }
}