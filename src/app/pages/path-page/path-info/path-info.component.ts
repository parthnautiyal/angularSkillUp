import { PathDataService } from '../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  courseData: any = {};
  constructor(private pathDataService: PathDataService) {
    this.courseData = this.pathDataService.getCoursesData();
  }

  ngOnInit(): void {}
}
