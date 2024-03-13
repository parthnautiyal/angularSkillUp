import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
})
// export class ProfilePageComponent implements OnInit, OnDestroy {
//   @HostListener('window:beforeunload')
//   ngOnDestroy(): void {
//     localStorage.setItem('profile', 'false');
//     console.log('destroyed');
export class ProfilePageComponent implements OnInit,OnDestroy {
  heading:string = "Profile";
  // constructor() { }
  // ngOnInit(): void {
  // }
  constructor() {}
  @HostListener('window:beforeunload')
  
  ngOnInit(): void {
    localStorage.setItem('profile', 'true');
    console.log('init');
  }
  ngOnDestroy(): void {
    localStorage.setItem('profile', 'false');
    console.log('destroyed');
  }
  headingsTitle: string[] = ['batches', 'paths', 'courses'];
}
