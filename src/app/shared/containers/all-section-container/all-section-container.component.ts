import { LoadingCardComponent } from './../../cards/loading-card/loading-card.component';
import { BatchDataService } from './../../../services/batch-data.service';
import { CourseDataService } from './../../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { PathDataService } from './../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadCourses } from 'src/app/state/action/course.action';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesLoading,
} from 'src/app/state/selector/course.selector';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { loadBatch } from 'src/app/state/action/batch.action';
import { Batch } from 'src/app/models/Batch';
import { selectBatchs } from 'src/app/state/selector/batch.selector';

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
  onGoingPathsData: any[] = [];
  onGoingCoursesData: any[] = [];
  loading: boolean = true;
  courses: Course[] = [];
  batch$!: Observable<Batch[]>;
  loadingData$!: Observable<boolean>;
  error$!: Observable<any>;
  constructor(
    private store: Store,
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private batchDataService: BatchDataService,
    private router: Router
  ) {
    this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
      this.onGoingPathsData = data.data.enrolledPaths;
    });
    this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
      this.onGoingCoursesData = data.data.enrolledCourses;
    });
  }
  getAllPaths() {
    combineLatest([this.pathDataService.allPathsData$]).subscribe(
      ([pathsdata]) => {
        if (
          typeof pathsdata === 'object' &&
          Object.keys(pathsdata).length > 0
        ) {
          this.loading = false;
          this.allPathsData = pathsdata.data;
        }
      }
    );
    this.pathDataService.getPaths();
    console.log('nyaz');
  }
  getAllCourses() {
    this.store.dispatch(loadCourses());
    this.store.select(selectCourses).subscribe((res) => {
      this.loading = false;
      this.courses = res;
      console.log('nyaz 3');
    });
    // this.loading$ = this.store.pipe(select(selectCoursesLoading));
    this.error$ = this.store.pipe(select(selectCoursesError));
    // if (Object.keys(this.courses$).length > 0) {
    //   this.loading = false;
    // }
    console.log('nyaz 3');
  }
  getAllBatches() {
    this.store.dispatch(loadBatch());
    this.batch$ = this.store.select(selectBatchs);
    console.log(this.batch$);
    if (Object.keys(this.batch$).length > 0) {
      this.loading = false;
    }
    console.log('nyaz 2');
  }
  ngOnInit(): void {
    // this.store.dispatch(loadCourses());
    // this.courses$ = this.store.select(selectCourses);
    // this.loadingData$ = this.store.pipe(select(selectCoursesLoading));
    // this.error$ = this.store.pipe(select(selectCoursesError));

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
