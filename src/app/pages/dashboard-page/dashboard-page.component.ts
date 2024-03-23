import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadAllCourses } from 'src/app/state/action/course.action';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import {
  selectCourses,
  selectCoursesError,
} from 'src/app/state/selector/course.selector';
import { Course } from 'src/app/models/Course';
import { Batch } from 'src/app/models/Batch';
import { selectBatchs, selectBatchsError } from 'src/app/state/selector/batch.selector';
import { HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
import { loadAllPaths } from 'src/app/state/action/path.action';
import { selectPaths } from 'src/app/state/selector/path.selector';
import { Path } from 'src/app/models/Path';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
  providers: [MessageService],
})
export class DashboardPageComponent implements OnInit {
  isError: boolean = false;
  courses$!: Observable<Course[]>;
  paths$!: Observable<Path[]>;
  batch$!: Observable<Batch[]>;
  error$!: Observable<any>;
  constructor(
    private store$: Store,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {
    // if (localStorage.getItem('logginFlag') === 'true') {
    console.log('Logged In');
    this.showSuccess();
    // localStorage.setItem('logginFlag', 'false');
    // }
  }
  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.store$.dispatch(loadAllCourses());
    this.store$.dispatch(loadAllBatches());
    this.store$.dispatch(loadAllPaths());
    this.courses$ = this.store$.select(selectCourses);
    this.batch$ = this.store$.select(selectBatchs);
    this.paths$ = this.store$.select(selectPaths);
    this.error$ = this.store$.select(selectCoursesError);
    // this.primengConfig.ripple = true;
    this.courses$.subscribe((data) => {
      if (localStorage.getItem('logginFlag') === 'true') {
        console.log('Courses in dashboard -> ' + data);

        this.showSuccess();
      }
    });

    this.error$.subscribe((data) => {
      console.log('Error -> ' + data);

      if (data != null) {
        this.isError = true;
        this.showError(data);
        // this.showSuccess();

        this.loading = false;
      } else {
        this.showSuccess();
      }
    });

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
          localStorage.setItem('logginFlag', 'false');

          this.loading = false;
          // this.showError();
        }
      }
    );
  }
  showError(data: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: data,
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'info',
      summary: 'Logged In',
      detail: 'Loggin Successful',
    });
  }
}
