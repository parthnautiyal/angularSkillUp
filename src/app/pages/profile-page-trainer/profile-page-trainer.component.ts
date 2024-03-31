import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-trainer',
  templateUrl: './profile-page-trainer.component.html',
  styleUrls: ['./profile-page-trainer.component.sass'],
})
export class ProfilePageTrainerComponent implements OnInit {
  userProfile: any;

  constructor() {}

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
