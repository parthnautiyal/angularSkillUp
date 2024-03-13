import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass'],
})
export class ProfileHeaderComponent implements OnInit {
  userData: any;
  constructor(private userDataService: UserDataService) {
  }
  getUserData() {
    // return this.batchDataService.getData();
   this.userDataService.getDataV2().subscribe(
    (response) => {
      this.userData = response
    },
    (error) => {console.log(error)})
  }

  ngOnInit(): void {
    this.getUserData()
  }
}
