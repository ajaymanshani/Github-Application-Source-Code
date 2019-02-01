import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataSharedService {
  user: any;
  getUser: EventEmitter<any> = new EventEmitter<any>();

  shareUserDetail(user) {
    this.user = user;
    this.getUser.next(user);
  }

}
