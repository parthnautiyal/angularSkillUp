import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/services/course-data.service';
import { PathDataService } from 'src/app/services/path-data.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  constructor(private coursesService : CourseDataService,
    private pathService : PathDataService) {}
  noOfEnrolledCourses : any
  noOfEnrolledPaths : any

  ngOnInit(): void {
    this.getNoOfEnrolledCourses()
    this.getNoOfPaths()
  }
  
  getNoOfEnrolledCourses() {
    // return this.batchDataService.getData();
   this.coursesService.getNoOfEnrolledCourses().subscribe(
    (response) => {
      this.noOfEnrolledCourses = response
    },
    (error) => {console.log(error)})
  }

  getNoOfPaths() {
    // return this.batchDataService.getData();
   this.pathService.getNoOfEnrolledPaths().subscribe(
    (response) => {
      this.noOfEnrolledPaths = response
    },
    (error) => {console.log(error)})
  }
}
