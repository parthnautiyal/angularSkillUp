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
  batchData : any
  coursesData : any
  pathData : any
  heading: string = '';
  isActive = false;

  @Input() title: string = '';
  @Input() prefixWord: string = '';
  constructor(
    private batchDataService: BatchDataService,
    private activatedRoute: ActivatedRoute,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService
  ) {}
  getBatchesData() {
    // return this.batchDataService.getData();
    this.batchDataService.getAll().subscribe(
    (response) => {
      this.batchData = response
    },
    (error) => {console.log(error)})
  }

  getCoursesData() {
    // return this.courseDataService.getData();
    this.courseDataService.getCourseData().subscribe(
    (response) => {
      this.coursesData = response
    },
    (error) => {console.log(error)})
  }

  getPathsData() {
    this.pathDataService.getDataV2().subscribe(
    (response) => {
      this.pathData = response
    },
    (error) => {console.log(error)})
  }
  ngOnInit(): void {
    this.getBatchesData()
    this.getCoursesData()
    this.getPathsData()
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
