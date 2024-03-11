import { PathDataService } from '../services/path-data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  courseData: any[] = [];
  constructor(
    private pathDataService: PathDataService
  ) {
    this.courseData = this.pathDataService.getCoursesData().courses;
  }

  ngOnInit(): void {}
}
