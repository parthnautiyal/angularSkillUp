import { BatchDataService } from './../../../services/batch-data.service';
import { CourseDataService } from './../../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { PathDataService } from './../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-section-container',
  templateUrl: './all-section-container.component.html',
  styleUrls: ['./all-section-container.component.sass'],
})
export class AllSectionContainerComponent implements OnInit {
  prefix: string = '';
  heading: string = '';
  constructor(
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private batchDataService: BatchDataService,
    private router: Router,
  ) {}
  getPathsData() {
    return this.pathDataService.getData();
  }
  getOngoingPathsData() {
    return this.pathDataService.getOngoingPathsData();
  }
  getCoursesData() {
    return this.courseDataService.getData();
  }
  getOngoingCoursesData() {
    return this.courseDataService.getOngoingCourses();
  }
  getBatchesData() {
    return this.batchDataService.getData();
  }
  getFavouritesCoursesData() {
    return this.courseDataService.getData();
  }
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);

      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
      }
      if (urlSegments.length >= 2) {
        this.prefix = urlSegments[1].path;
        if (this.prefix == 'ongoing') {
          this.prefix = 'my';
        }
      }
    });
  }
}
