import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userDataArray: any = [
    {
      id: 329,
      name: 'Parth Nautiyal',
      email: 'parth.nautiyal@zopsmart.com',
      imageUrl:
        'https://lh3.googleusercontent.com/a/ACg8ocJ-UYULwlUTJq_wSGyLl4JHwkUW3xdpUynNTbejdnca=s96-c',
    },
  ];
  constructor() {}

  getData() {
    return this.userDataArray[0];
  }
}
