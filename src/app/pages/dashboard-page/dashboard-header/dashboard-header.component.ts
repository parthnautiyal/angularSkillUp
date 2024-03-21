import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadNoOfEnrolledCourses } from 'src/app/state/action/course.action';
import { loadNumberOfEnrolledPaths } from 'src/app/state/action/path.action';
import { selectNoOfCourses } from 'src/app/state/selector/course.selector';
import { selectNoOfEnrolledPaths } from 'src/app/state/selector/path.selector';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  userProfile: any;
  enrolledPathsNumber: number = 0;
  enrolledCoursesNumber: number = 0;
  noOfEnrolledCourses!: Observable<Number>;
  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(loadNoOfEnrolledCourses());
    this.store$.select(selectNoOfCourses).subscribe((data) => {
      this.enrolledCoursesNumber = data;
    });
    this.store$.dispatch(loadNumberOfEnrolledPaths());
    this.store$.select(selectNoOfEnrolledPaths).subscribe((data) => {
      this.enrolledPathsNumber = data;
    });

    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
