import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.sass'],
})
export class ProfileHeaderComponent implements OnInit {
  userData: any = {};
  constructor(private userDataService: UserDataService) {
    this.userData = this.userDataService.getData();
  }

  ngOnInit(): void {}
}
