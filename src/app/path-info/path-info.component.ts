import { CourseInfoDataService } from '../services/course-info-data-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  courseData: any = {};
  constructor(
    private courseInfoDataService: CourseInfoDataService
  ) {
    this.courseData = this.courseInfoDataService.getData();
  }

  ngOnInit(): void {}
}
