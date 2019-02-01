import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-follower-view',
  templateUrl: './follower-view.component.html',
  styleUrls: ['./follower-view.component.css']
})
export class FollowerViewComponent implements OnInit {

  public username;
  public currentFollower;
  public currentFollowerRepos;

  constructor(private route: ActivatedRoute, private Auth: AuthService, private location: Location, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('follower.login');
    console.log(this.username);
    this.getFollowerDetails(this.username);
    this.getFollowerRepos(this.username)

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  getFollowerDetails(uName) {
    this.Auth.getFollowerDetails(uName).subscribe(
      data => {
        this.currentFollower = data;
        console.log(data);
      }
    )
  }

  getFollowerRepos(uName) {
    this.Auth.getRepos(uName).subscribe(
      data => {
        this.currentFollowerRepos = data;
        console.log(data);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
