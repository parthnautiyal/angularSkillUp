import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadNoOfEnrolledCourses } from 'src/app/state/action/course.action';
import { loadNumberOfEnrolledPaths } from 'src/app/state/action/path.action';
import { selectNoOfCourses } from 'src/app/state/selector/course.selector';
import { selectNoOfEnrolledPaths } from 'src/app/state/selector/path.selector';
import { enrolledCourses } from '../../../models/EnrolledCourses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  userProfile: any;
  enrolledCourse: any;
  enrolledPathsNumber: number = 0;
  enrolledCoursesNumber: number = 0;
  noOfEnrolledCourses!: Observable<Number>;
  constructor(
    private store$: Store,
    private http: HttpClient,
    private router: Router
  ) {}

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

    this.http
      .get('https://api.training.zopsmart.com/students/enrolled-courses')
      .subscribe((response) => {
        const data = response as any;
        const courses = data.data.enrolledCourses;
        if (courses.length > 0) {
          const randomIndex = Math.floor(Math.random() * courses.length);
          this.enrolledCourse = courses[randomIndex];
        }
      });
  }
  navigateToCourse() {
    this.router.navigate(['/course', this.enrolledCourse.courseId]);
  }
}
