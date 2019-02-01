import {TestBed, inject} from '@angular/core/testing';

import {UserDataSharedService} from './user-data.shared.service';

describe('UserData.SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataSharedService]
    });
  });

  it('should be created', inject([UserDataSharedService], (service: UserData.SharedService) => {
    expect(service).toBeTruthy();
  }));
});
