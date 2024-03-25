import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { Batch } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesLoading,
  selectEnrolledCourses,
  selectEnrolledCoursesError,
} from 'src/app/state/selector/course.selector';
import {
  selectBatchs,
  selectBatchsError,
  selectBatchsLoading,
} from 'src/app/state/selector/batch.selector';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import {
  selectEnrolledPaths,
  selectEnrolledPathsError,
  selectPaths,
  selectPathsError,
  selectPathsLoading,
} from 'src/app/state/selector/path.selector';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.actions';
import { loadAllBatches } from 'src/app/state/action/batch.actions';
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.actions';
import { Error } from 'src/app/models/Error';
import { MessageService } from 'primeng/api';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import { BatchDetails, EnrolledBatches } from 'src/app/models/EnrolledBatches';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
  providers: [MessageService],
})
export class CardContainerComponent implements OnInit {
  loading: Boolean = true;
  error: Boolean = false;
  errorEnrolled: Boolean = false;
  isActive = true;
  Title = Title;
  RouterLinks = RouterLinks;
  allPaths: Path[] = [];
  allCourses: Course[] = [];
  allBatches: Batch[] = [];
  enrolledBatches: BatchDetails[] = [];

  @Input() title: string = '';
  @Input() prefixWord: string = '';
  errorBatch: Error = {
    message: '',
    code: 0,
  };
  errorCourse: Error = {
    message: '',
    code: 0,
  };
  errorPath: Error = {
    message: '',
    code: 0,
  };

  constructor(
    private store: Store,
    private router: Router,
    private messageService: MessageService,
    private miscService: MiscellaneousService
  ) {}
  ngOnInit(): void {
    if (this.router.url == '/dashboard') {
      if (this.title == Title.COURSES) {
        this.store.dispatch(loadAllCourses());
        this.store.select(selectCourses).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allCourses = res;
            this.error = false;
          }
        });

        this.store.select(selectCoursesError).subscribe((res) => {
          if (res != null) {
            this.errorCourse.message = res.message.split('`').slice(1);
            this.errorCourse.code = res.message.split('`').slice(0, 1);
            this.error = true;
          }
        });
        this.store.select(selectCoursesLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }
      if (this.title == Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
        this.store.select(selectBatchs).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allBatches = res;
            this.error = false;
          }
        });
        this.store.select(selectBatchsError).subscribe((res) => {
          if (res != null) {
            this.errorBatch.message = res.message.split('`').slice(1);
            this.errorBatch.code = res.message.split('`').slice(0, 1);
            this.error = true;
          }
        });
        this.store.select(selectBatchsLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }
      if (this.title == Title.PATHS) {
        this.store.dispatch(loadAllPaths());
        this.store.select(selectPaths).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allPaths = res;
            this.error = false;
          }
        });
        this.store.select(selectPathsError).subscribe((res) => {
          if (res != null) {
            this.errorPath.message = res.message.split('`').slice(1);
            this.errorPath.code = res.message.split('`').slice(0, 1);
            this.error = true;
          }
        });
        this.store.select(selectPathsLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }
    }
    if (this.router.url == '/user') {
      if (this.title == Title.BATCHES) {
        // this.store.dispatch(loadAllBatches());
        // this.store.select(selectBatchs).subscribe((res) => {
        //   if (typeof res === 'object' && Object.keys(res).length > 0) {
        //     this.allBatches = res;
        //   }
        // });

        this.miscService.pathsData$.subscribe((res) => {
          console.log(res);
          this.allBatches = res.enrolledBatches;
        });

        this.store.select(selectBatchsError).subscribe((res) => {
          if (res != null) {
            this.error = true;
          }
        });
        this.store.select(selectBatchsLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }

      if (this.title == Title.COURSES) {
        this.store.dispatch(loadEnrolledCourses());
        this.store.select(selectEnrolledCourses).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allCourses = res;
            this.errorEnrolled = false;
          }
        });
        this.store.select(selectEnrolledCoursesError).subscribe((res) => {
          if (res != null) {
            this.errorCourse.message = res.message.split('`').slice(1);
            this.errorCourse.code = res.message.split('`').slice(0, 1);
            this.errorEnrolled = true;
          }
        });
        this.store.select(selectCoursesLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }
      if (this.title == Title.PATHS) {
        this.store.dispatch(loadEnrolledPaths());
        this.store.select(selectEnrolledPaths).subscribe((res) => {
          if (typeof res === 'object' && Object.keys(res).length > 0) {
            this.allPaths = res;
            this.errorEnrolled = false;
          }
        });
        this.store.select(selectEnrolledPathsError).subscribe((res) => {
          if (res != null) {
            this.errorPath.message = res.message.split('`').slice(1);
            this.errorPath.code = res.message.split('`').slice(0, 1);
            this.errorEnrolled = true;
          }
        });
        this.store.select(selectPathsLoading).subscribe((res) => {
          if (res == false) {
            setTimeout(() => {
              this.loading = res;
            }, 500);
          } else {
            this.loading = res;
          }
        });
      }
    }
  }
}
