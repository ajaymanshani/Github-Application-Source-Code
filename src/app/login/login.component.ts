import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { UserDataSharedService } from '../services/user-data.shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;

  constructor(private authService: AuthService, private router: Router, private userDataSharedService: UserDataSharedService,
    private zone: NgZone) {
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
      .then((res) => {
        this.userDataSharedService.shareUserDetail(res);
        sessionStorage.setItem('user', JSON.stringify(res));
        this.authService.setUserInfoInLocalStorage(res.additionalUserInfo.username);
        this.zone.run(async () => {
          this.router.navigate(['dashboard']);
        });
      })
      .catch((err) => console.log(err));
  }

  ngOnInit() {}

}
