import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { Batch } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import {
  selectCourses,
  selectCoursesError,
  selectEnrolledCourses,
} from 'src/app/state/selector/course.selector';
import { Observable } from 'rxjs';
import {
  selectBatchs,
  selectBatchsError,
} from 'src/app/state/selector/batch.selector';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import {
  selectEnrolledPaths,
  selectPaths,
  selectPathsError,
} from 'src/app/state/selector/path.selector';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.action';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.action';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
})
export class CardContainerComponent implements OnInit {
  loading: Boolean = true;
  error: Boolean = false;
  isActive = true;
  Title = Title;
  RouterLinks = RouterLinks;
  allPaths: Path[] = [];
  allCourses: Course[] = [];
  allBatches: Batch[] = [];
  @Input() title: string = '';
  @Input() prefixWord: string = '';

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url == '/dashboard') {
      if (this.title == Title.COURSES) {
        this.store.dispatch(loadAllCourses());
        this.store.select(selectCourses).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allCourses = res;
            this.loading = false;
          }
        });
        this.store.select(selectCoursesError).subscribe((res) => {
          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }
      if (this.title == Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
        this.store.select(selectBatchs).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allBatches = res;
            this.loading = false;
          }
        });
        this.store.select(selectBatchsError).subscribe((res) => {
          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }
      if (this.title == Title.PATHS) {
        this.store.dispatch(loadAllPaths());
        this.store.select(selectPaths).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allPaths = res;
            this.loading = false;
            this.error = false;
          }
        });
        this.store.select(selectPathsError).subscribe((res) => {
          console.log('error in paths');

          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }
    }
    if (this.router.url == '/user') {
      if (this.title == Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
        this.store.select(selectBatchs).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allBatches = res;
            this.loading = false;
          }
        });
        this.store.select(selectBatchsError).subscribe((res) => {
          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }

      if (this.title == Title.COURSES) {
        this.store.dispatch(loadEnrolledCourses());
        this.store.select(selectEnrolledCourses).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allCourses = res;
            this.loading = false;
          }
        });
        this.store.select(selectCoursesError).subscribe((res) => {
          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }
      if (this.title == Title.PATHS) {
        this.store.dispatch(loadEnrolledPaths());
        this.store.select(selectEnrolledPaths).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allPaths = res;
            this.loading = false;
          }
        });
        this.store.select(selectPathsError).subscribe((res) => {
          if (res != null) {
            console.log(res);
            this.loading = false;
            this.error = true;
          }
        });
      }
    }
  }
}
