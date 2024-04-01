import { Router } from '@angular/router';
import { Component, HostListener, Input, NgZone, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { Batch } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';

import { Error } from 'src/app/models/Error';
import { MessageService } from 'primeng/api';
import { EnrolledBatches } from 'src/app/models/EnrolledBatches';
import {
  selectTrainersCourses,
  selectTrainersCoursesError,
  selectTrainersCoursesLoading,
} from 'src/app/state/selector/trainerscourse.selector';
import {
  selectTrainersPaths,
  selectTrainersPathsError,
  selectTrainersPathsLoading,
} from 'src/app/state/selector/trainerspath.selector';
import { loadTrainersCourses } from 'src/app/state/action/trainerscourse.actions';
@Component({
  selector: 'app-trainers-card-container',
  templateUrl: './trainers-card-container.component.html',
  styleUrls: ['./trainers-card-container.component.sass'],
})
export class TrainersCardContainerComponent implements OnInit {
  i: number = 0;
  loading: Boolean = true;
  error: Boolean = false;
  errorEnrolled: Boolean = false;
  isActive = true;
  isDashBoard = false;
  Title = Title;
  RouterLinks = RouterLinks;
  allPaths?: Path[] = [];
  allCourses: Course[] = [];
  allBatches?: any[] = [
    {
      id: 4,
      name: 'JavaScript - 2022-11-14',
      streamName: 'JavaScript',
      noOfStudents: 14,
      createdAt: '20 Mar 2024',
      endDate: '20 April 2024',
    },
    {
      id: 13,
      name: 'Angular Batch - 2023-03-01',
      streamName: 'JavaScript',
      noOfStudents: 12,
      createdAt: '20 Mar 2024',
      endDate: '20 April 2024',
    },
    {
      id: 16,
      name: 'Angular Batch - 2023-12-12',
      streamName: 'JavaScript',
      noOfStudents: 8,
      createdAt: '20 Mar 2024',
      endDate: '20 April 2024',
    },
    {
      id: 19,
      name: 'Angular Batch - 2024-01-09',
      streamName: 'JavaScript',
      noOfStudents: 12,
      createdAt: '20 Mar 2024',
      endDate: '20 April 2024',
    },
  ];

  enrolledBatches: EnrolledBatches = {
    averageProgress: 0,
    count: 0,
    enrolledBatches: [],
  };
  height: number = 0;
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
  enrolled: boolean = false;
  constructor(
    private store: Store,
    private router: Router,
    private ngZone: NgZone
  ) {}
  onScroll(percentage: number) {
    if (percentage > 80 && this.i <= 5 && !this.loading) {
      this.loading = true;
      this.i = this.i + 1;
      this.store.dispatch(loadTrainersCourses({ pageNo: this.i }));
    }
  }

  ngOnInit(): void {
    if (this.title == Title.COURSES) {
      this.height = 262;
      this.i = this.i + 1;

      this.store.select(selectTrainersCourses).subscribe((data) => {
        console.log(data);
        if (this.i === 1) {
          this.allCourses = data;
        } else {
          this.allCourses = [...this.allCourses, ...data];
          this.loading = false;
        }
      });

      // this.store.select(selectTrainersCourses).subscribe((res) => {
      //   if (typeof res === 'object' && Object.keys(res).length > 0) {
      //     this.allCourses = res;
      //   }
      // });
      this.store.select(selectTrainersCoursesError).subscribe((res) => {
        if (res != null) {
          this.errorCourse.message = res.message.split('`').slice(1);
          this.errorCourse.code = res.message.split('`').slice(0, 1);
          this.error = true;
        } else {
          this.error = false;
        }
      });
      this.store.select(selectTrainersCoursesLoading).subscribe((res) => {
        this.loading = res;
      });
    }
    if (this.title == Title.PATHS) {
      this.height = 112;
      this.store.select(selectTrainersPaths).subscribe((res) => {
        if (typeof res === 'object' && Object.keys(res).length > 0) {
          this.allPaths = res;
        }
      });
      this.store.select(selectTrainersPathsError).subscribe((res) => {
        if (res != null) {
          this.errorPath.message = res.message.split('`').slice(1);
          this.errorPath.code = res.message.split('`').slice(0, 1);
          this.error = true;
        } else {
          this.error = false;
        }
      });
      this.store.select(selectTrainersPathsLoading).subscribe((res) => {
        this.loading = res;
      });
    }
    this.onResize();
  }
  shimmerCount = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.ngZone.run(() => {
      if (window.innerWidth <= 768) {
        // adjust the value as per your requirement
        this.shimmerCount = 1; // adjust the value as per your requirement
      } else {
        this.shimmerCount = 3; // adjust the value as per your requirement
      }
    });
  }
  ngOnDestroy(): void {
    if (this.allPaths) {
      this.allPaths = undefined;
    }
  }
}
