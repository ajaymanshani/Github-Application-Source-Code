import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserDataSharedService } from './services/user-data.shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private router: Router, private userDataSharedService: UserDataSharedService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (this.user !== null) {
      this.userDataSharedService.shareUserDetail(this.user);
      this.authService.setUserInfoInLocalStorage(this.user.additionalUserInfo.username);
    }
  }
}
