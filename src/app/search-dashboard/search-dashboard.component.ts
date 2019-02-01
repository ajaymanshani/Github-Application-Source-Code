import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.css']
})
export class SearchDashboardComponent implements OnInit {
  profile: any[];
  username: string;
  repositories: any[];

  constructor(private searchService: SearchService, private location: Location, private spinner: NgxSpinnerService) { }

  findProfile() {
    this.searchService.updateProfile(this.username);
    this.searchService.getUser().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    },
      error => {
        console.log("Some Error Occured")
      });

    this.searchService.getProfileRepos().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
    })

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
