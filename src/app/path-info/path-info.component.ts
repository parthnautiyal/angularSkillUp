import { CourseInfoDataServiceService } from './../services/course-info-data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  courseData:any={};
  constructor(
    private courseInfoDataServiceService: CourseInfoDataServiceService
  ) {
    this.courseData=this.courseInfoDataServiceService.getData();
  }

  ngOnInit(): void {}
}
