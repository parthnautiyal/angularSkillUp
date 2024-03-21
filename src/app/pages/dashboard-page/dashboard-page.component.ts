import { CourseDataService } from './../../services/course-data.service';
import { BatchDataService } from 'src/app/services/batch-data.service';
import { Component, OnInit } from '@angular/core';
import { PathDataService } from 'src/app/services/path-data.service';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCourses } from 'src/app/state/action/course.action';
import { loadBatch } from 'src/app/state/action/batch.action';
import {
  selectCourses,
  selectCoursesError,
} from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';
import { Batch } from 'src/app/models/Batch';
import { selectBatchs } from 'src/app/state/selector/batch.selector';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  courses$!: Observable<Course[]>;
  batch$!: Observable<Batch[]>;
  error$!: Observable<any>;
  constructor(
    private pathDataService: PathDataService,
    // private batchDataService: BatchDataService,
    // private courseDataService: CourseDataService,
    private store$: Store
  ) {}
  loading: boolean = true;
  headingsTitle: string[] = ['batches', 'paths', 'courses'];

  ngOnInit(): void {
    this.store$.dispatch(loadCourses());
    this.store$.dispatch(loadBatch());
    this.courses$ = this.store$.select(selectCourses);
    this.batch$ = this.store$.select(selectBatchs);
    this.pathDataService.getPaths();
    this.error$ = this.store$.select(selectCoursesError);
    this.error$.subscribe((error) => {
      console.log('Course error from store -> ' + error);
    });

    combineLatest([
      this.pathDataService.allPathsData$,
      this.courses$,
      this.batch$,
    ]).subscribe(([pathsdata, batch, course]) => {
      if (
        typeof pathsdata === 'object' &&
        Object.keys(pathsdata).length > 0 &&
        typeof batch === 'object' &&
        Object.keys(batch).length > 0 &&
        typeof course === 'object' &&
        Object.keys(course).length > 0
      ) {
        // Handle the combined results here
        console.log('All data loaded');
        console.log(pathsdata);

        this.loading = false;
      }
    });
  }
}
