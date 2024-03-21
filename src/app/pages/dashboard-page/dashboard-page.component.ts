import { Component, OnInit } from '@angular/core';
import { PathDataService } from 'src/app/services/path-data.service';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadAllCourses } from 'src/app/state/action/course.action';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import { selectCourses } from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';
import { Batch } from 'src/app/models/Batch';
import { selectBatchs } from 'src/app/state/selector/batch.selector';
import { HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
import { loadAllPaths } from 'src/app/state/action/path.action';
import { selectPaths } from 'src/app/state/selector/path.selector';
import { Path } from 'src/app/models/Path';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  courses$!: Observable<Course[]>;
  paths$!: Observable<Path[]>;
  batch$!: Observable<Batch[]>;
  error$!: Observable<any>;
  constructor(
    private pathDataService: PathDataService,
    private store$: Store
  ) {}
  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;

  ngOnInit(): void {
    this.store$.dispatch(loadAllCourses());
    this.store$.dispatch(loadAllBatches());
    this.store$.dispatch(loadAllPaths());
    this.courses$ = this.store$.select(selectCourses);
    this.batch$ = this.store$.select(selectBatchs);
    this.paths$ = this.store$.select(selectPaths);

    combineLatest([this.paths$, this.courses$, this.batch$]).subscribe(
      ([pathsdata, batch, course]) => {
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
          console.log(batch);
          console.log(course);

          this.loading = false;
        }
      }
    );
  }
}
