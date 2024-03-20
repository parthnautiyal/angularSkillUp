import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { PathDataService } from '../../../services/path-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { BatchDataService } from '../../../services/batch-data.service';
import { Course, CourseList } from 'src/app/models/Course';
import { PathList } from 'src/app/models/Path';
import { BatchList } from 'src/app/models/Batch';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
})
export class CardContainerComponent implements OnInit {
  heading: string = '';
  isActive = true;
  allPaths: PathList = {
    data: []
  };
  allCourses: CourseList = {
    data: []
  };
  allBatches: BatchList = {
    data: []
  };

  @Input() title: string = '';
  @Input() prefixWord: string = '';
  constructor(
    private batchDataService: BatchDataService,
    private activatedRoute: ActivatedRoute,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService
  ) {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);
    });
  }

  ngOnInit(): void {
    this.pathDataService.getPaths();
    this.pathDataService.allPathsData$.subscribe((data: PathList) => {
      console.log(data);
      this.allPaths = data;
    });
    this.courseDataService.getCoursesData();
    this.courseDataService.allCourses$.subscribe((data: CourseList) => {
      this.allCourses = data;
      console.log(this.allCourses);
    });
    this.batchDataService.getBatchesDetails();
    this.batchDataService.allBatches$.subscribe((data: BatchList) => {
      this.allBatches = data;
    });
    this.activatedRoute.url.subscribe((urlSegments) => {
      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
        if (this.heading == 'user') this.isActive = false;
        else this.isActive = true;
      }
    });
    console.log(this.isActive);
    if (!this.isActive) {
      this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
        this.allPaths = data.data.enrolledPaths;
        console.log('inside if -> ' + this.allPaths);
      });
    } else {
      this.pathDataService.getAllPaths().subscribe((data) => {
        this.allPaths = data;
        console.log('inside else - > ' + this.allPaths);
      });
    }

    if (!this.isActive) {
      this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
        this.allCourses = data;
        console.log(this.allCourses);
      });
    } else {
      
      this.courseDataService.getAllCourses().subscribe((data) => {
        this.allCourses = data;
        console.log(this.allCourses);
      });
    }
    this.batchDataService.getAllBatches().subscribe((data) => {
      this.allBatches = data;
      console.log(this.allBatches);
    });
  }
}