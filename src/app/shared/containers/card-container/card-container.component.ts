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
  isActive = true;
  allPaths: any = [];
  allCourses: any = [];
  allBatches: any = [];

  @Input() title: string = '';
  @Input() prefixWord: string = '';
  constructor(
    private batchDataService: BatchDataService,
    private activatedRoute: ActivatedRoute,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService,
  ) {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);

      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
        if (this.heading == 'user') {
          console.log('inside user if');

          this.isActive = false;
        } else this.isActive = true;
      }
    });
    console.log(this.isActive);

    if (!this.isActive) {
      this.pathDataService.getOngoingPathsData().subscribe((data: any) => {
        this.allPaths = data.data.enrolledPaths;
        console.log('inside if -> ' + this.allPaths);
      });
    } else {
      this.pathDataService.getData().subscribe((data) => {
        this.allPaths = data.valueOf();
        this.allPaths = this.allPaths.data;
        console.log('inside else - > ' + this.allPaths);
      });
    }

    if (!this.isActive) {
      this.courseDataService.getOngoingCoursesV2().subscribe((data: any) => {
        this.allCourses = data.data.enrolledCourses;
        console.log(this.allCourses);
      });
    } else {
      this.courseDataService.getCourseData().subscribe((data) => {
        this.allCourses = data.valueOf();
        this.allCourses = this.allCourses.data;
        console.log(this.allCourses);
      });
    }
    this.batchDataService.getBatchDetails().subscribe((data) => {
      this.allBatches = data.valueOf();
      this.allBatches = this.allBatches.data;
      console.log(this.allBatches);
    });
  }

  ngOnInit(): void {}
}
