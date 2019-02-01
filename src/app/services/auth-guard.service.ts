import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) {
  }

  canActivate() {
    if (sessionStorage.getItem('user') !== null) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
