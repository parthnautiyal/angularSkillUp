import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  heading: string = 'Profile';
  constructor(private store: Store, private mis: MiscellaneousService) {}

  ngOnInit(): void {
    localStorage.setItem('profile', 'true');
    this.mis.getBatchesData();
  }
  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('profile', 'false');
  }
  headingsTitle: string[] = ['batches', 'paths', 'courses'];
}
