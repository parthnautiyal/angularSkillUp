import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/services/course-data.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass'],
})
export class DashboardHeaderComponent implements OnInit {
  constructor(private coursesService : CourseDataService) {}
  noOfEnrolledCourses : any

  ngOnInit(): void {
    this.getNoOfEnrolledCourses()
  }
  
  getNoOfEnrolledCourses() {
    // return this.batchDataService.getData();
   this.coursesService.getNoOfEnrolledCourses().subscribe(
    (response) => {
      console.log(response)
      this.noOfEnrolledCourses = response
    },
    (error) => {console.log(error)})
  }
}
