import { Http } from "@angular/http";

export class ProfileEditService{

    constructor(
        private http: Http,
    ){

    }

    updateProfile(profile){
        return this.http.put("\editTutorProfile", profile);
    }
}