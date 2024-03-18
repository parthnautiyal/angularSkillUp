import { ActivatedRoute } from '@angular/router';
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
  heading: string = '';
  isActive = false;
  allPaths: any = [];
  allCourses: any = [];
  allBatches: any = [];

  @Input() title: string = '';
  @Input() prefixWord: string = '';
  constructor(
    private batchDataService: BatchDataService,
    private activatedRoute: ActivatedRoute,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService
  ) {
    this.pathDataService.getPaths().subscribe((data) => {
      this.allPaths = data.valueOf();
      this.allPaths = this.allPaths.data;
      console.log(this.allPaths);
    });
    this.courseDataService.getCourseData().subscribe((data) => {
      this.allCourses = data.valueOf();
      this.allCourses = this.allCourses.data;
      console.log(this.allCourses);
    });
    this.batchDataService.getBatchDetails().subscribe((data) => {
      this.allBatches = data.valueOf();
      this.allBatches = this.allBatches.data;
      console.log(this.allBatches);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);

      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
        if (this.heading == 'user') this.isActive = false;
        else this.isActive = true;
      }
    });
  }
}
