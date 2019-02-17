import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { UserDataSharedService } from '../services/user-data.shared.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userProfile: any = {};
  user: any = {};
  repositories: any[];
  following: any[];
  followers: any[];

  constructor(public auth: AuthService, private userDataSharedService: UserDataSharedService, private router: Router, private spinner: NgxSpinnerService) {
  }

  getProfile() {
    this.auth.getUser()
      .subscribe(profile => {
        console.log(profile);
        this.userProfile = profile;
      });

    this.auth.getProfileRepos()
      .subscribe(repositories => {
        console.log(repositories);
        this.repositories = repositories;
      })

    this.auth.getFollowing()
      .subscribe(following => {
        console.log(following);
        this.following = following;
      })

    this.auth.getFollowers()
      .subscribe(followers => {
        console.log(followers);
        this.followers = followers;
      })
  }

  ngOnInit() {
    this.getProfile();

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['']);
      localStorage.clear();
      sessionStorage.clear();
    });
  }

}
