import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private username: string;
  private clientid = 'b6ad24705c2aad9d4c42';
  private clientsecret = 'a3ce3c17c183a294dc5eb7d7d1e8beb8daea39d9';

  constructor(private http: HttpClient) { }

  public getUser(): any {
    let myResponse = this.http.get('https://api.github.com/users' + '/' + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    return myResponse;
  }

  public getProfileRepos(): any {
    let UserRepos = this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    return UserRepos;
  }


  updateProfile(username: string) {
    this.username = username;
  }

}
