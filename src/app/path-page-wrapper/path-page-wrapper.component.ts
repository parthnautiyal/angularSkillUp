import { CourseInfoDataServiceService } from './../services/course-info-data-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  courseData: any[] = [];
  constructor(
    private CourseInfoDataServiceService: CourseInfoDataServiceService,
  ) {
    this.courseData = this.CourseInfoDataServiceService.getData().courses;
  }

  ngOnInit(): void {}
}
