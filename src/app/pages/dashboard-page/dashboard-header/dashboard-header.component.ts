import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';
import { CourseDataService } from 'src/app/services/course-data.service';
import { PathDataService } from 'src/app/services/path-data.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  userProfile: any;
  enrolledPathsNumber: number = 0;
  enrolledCoursesNumber: number = 0;
  constructor(
    private courseService: CourseDataService,
    private pathService: PathDataService
  ) {
    this.courseService.getNoOfEnrolledCourses().subscribe((data: any) => {
      this.enrolledCoursesNumber = data.data;
    });
    this.pathService.getNoOfEnrolledPaths().subscribe((data: any) => {
      this.enrolledPathsNumber = data.data;
    });
  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
