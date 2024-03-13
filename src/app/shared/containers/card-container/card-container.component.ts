import { CourseDataService } from '../../../services/course-data.service';
import { PathDataService } from '../../../services/path-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { BatchDataService } from '../../../services/batch-data.service';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
})
export class CardContainerComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  @Input() title: string = '';

  // path: string = '';

  constructor(
    private batchDataService: BatchDataService,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService
  ) {}
  getBatchesData() {
    return this.batchDataService.getData();
  }
  getCoursesData() {
    return this.courseDataService.getData();
  }
  getPathsData() {
    return this.pathDataService.getData();
  }
  ngOnInit(): void {}
}
