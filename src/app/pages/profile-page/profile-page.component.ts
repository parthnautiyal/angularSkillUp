import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllBatches } from 'src/app/state/action/batch.actions';
import { loadAllCourses, loadEnrolledCourses } from 'src/app/state/action/course.actions';
import { loadEnrolledPaths } from 'src/app/state/action/path.actions';

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
    console.log('init');
    // this.store.dispatch(loadEnrolledPaths());
    // this.store.dispatch(loadEnrolledCourses());
    // this.store.dispatch(loadAllBatches());
  }
  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    localStorage.setItem('profile', 'false');
    console.log('destroyed');
  }
  headingsTitle: string[] = ['batches', 'paths', 'courses'];
}
