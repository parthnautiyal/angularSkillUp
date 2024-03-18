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
  allPathsData: any[] = [];
  allCoursesData: any[] = [];
  allBatchesData: any[] = [];
  constructor(
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private batchDataService: BatchDataService,
    private router: Router
  ) {
    this.pathDataService.getData().subscribe((data: any) => {
      this.allPathsData = data.data;
      console.log(this.allPathsData);
    });
    this.courseDataService.getCourseData().subscribe((data: any) => {
      this.allCoursesData = data.data;
      console.log(this.allCoursesData);
    });
    this.batchDataService.getBatchDetails().subscribe((data: any) => {
      this.allBatchesData = data.data;
      console.log(this.allBatchesData);
    });
  }

  getOngoingPathsData() {
    return this.pathDataService.getOngoingPathsData();
  }

  getOngoingCoursesData() {
    return this.courseDataService.getOngoingCourses();
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
