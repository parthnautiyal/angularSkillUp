import { CourseInfoDataService } from '../services/course-info-data-service'
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  courseData: any[] = [];
  constructor(
    private courseInfoDataService: CourseInfoDataService
  ) {
    this.courseData = this.courseInfoDataService.getData().courses;
  }

  ngOnInit(): void {}
}
