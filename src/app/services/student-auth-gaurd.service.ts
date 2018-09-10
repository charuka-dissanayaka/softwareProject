import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(){
    let role = this.authService.currentUser.user.role;
    if(this.authService.isLogged() && role == 'student') return true;

    this.router.navigate(['']);
    return false;

  }
}
