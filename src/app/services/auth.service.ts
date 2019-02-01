import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  private clientid = 'b6ad24705c2aad9d4c42';
  private clientsecret = 'a3ce3c17c183a294dc5eb7d7d1e8beb8daea39d9';

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );

  }

  public getUser(): any {
    return this.http.get('https://api.github.com/users' + '/' +
      this.getUserInfoFromLocalstorage() + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  public getProfileRepos(): any {
    return this.http.get("https://api.github.com/users/" + this.getUserInfoFromLocalstorage() + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  public getFollowing(): any {
    return this.http.get("https://api.github.com/users/" + this.getUserInfoFromLocalstorage() + "/following?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  public getFollowers(): any {
    return this.http.get("https://api.github.com/users/" + this.getUserInfoFromLocalstorage() + "/followers?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  public getFollowerDetails(username): any {
    return this.http.get("https://api.github.com/users/" + username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  public getRepos(username): any {
    return this.http.get("https://api.github.com/users/" + username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }

  setUser(user) {
    this.user = user;
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('username', JSON.stringify(data));
  };

  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('username'));
  };

  logout() {
    return this.firebaseAuth.auth.signOut();
  }

}
