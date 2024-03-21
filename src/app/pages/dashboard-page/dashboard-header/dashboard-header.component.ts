import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BatchDataService } from 'src/app/services/batch-data.service';
import { CourseDataService } from 'src/app/services/course-data.service';
import { PathDataService } from 'src/app/services/path-data.service';
import { loadNoOfEnrolledCourses } from 'src/app/state/action/course.action';
import { selectNoOfCourses } from 'src/app/state/selector/course.selector';

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
  constructor(
    private courseService: CourseDataService,
    private pathService: PathDataService,
    private store$: Store
  ) {
    this.pathService.getNoOfEnrolledPaths().subscribe((data: any) => {
      this.enrolledPathsNumber = data.data;
    });
  }

  ngOnInit(): void {
    this.store$.dispatch(loadNoOfEnrolledCourses());
    this.store$.select(selectNoOfCourses).subscribe((data) => {
      this.enrolledCoursesNumber = data;
    });

    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
