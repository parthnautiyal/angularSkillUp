import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  heading: string = 'Profile';
  constructor(private store:Store) {}

  ngOnInit(): void {
    localStorage.setItem('profile', 'true');
  }
  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('profile', 'false');
  }
  headingsTitle: string[] = ['batches', 'paths', 'courses'];
}
