import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  loadAllCourses,
  loadEnrolledCourses,
  loadFavoriteCourses,
} from 'src/app/state/action/course.actions';
import {
  selectAllCourses,
  selectAllCoursesError,
  selectAllCoursesLoading,
  selectEnrolledCourses,
  selectEnrolledCoursesError,
  selectEnrolledCoursesLoading,
  selectFavoriteCourses,
  selectFavoriteCoursesLoading,
} from 'src/app/state/selector/course.selector';
import { loadAllBatches } from 'src/app/state/action/batch.actions';
import {
  selectBatches,
  selectBatchesError,
  selectBatchesLoading,
} from 'src/app/state/selector/batch.selector';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Prefix } from 'src/app/constants/enums/prefix';
import { Path } from 'src/app/models/Path';
import { Course } from 'src/app/models/Course';
import { Batch } from 'src/app/models/Batch';
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.actions';
import {
  selectAllPaths,
  selectAllPathsError,
  selectAllPathsLoading,
  selectEnrolledPaths,
  selectEnrolledPathsError,
  selectEnrolledPathsLoading,
} from 'src/app/state/selector/path.selector';
import { Error } from 'src/app/models/Error';
import { loadTrainersCourses } from 'src/app/state/action/trainerscourse.actions';
import {
  selectTrainersCourses,
  selectTrainersCoursesError,
  selectTrainersCoursesLoading,
} from 'src/app/state/selector/trainerscourse.selector';

@Component({
  selector: 'app-trainers-all-section-container',
  templateUrl: './trainers-all-section-container.component.html',
  styleUrls: ['./trainers-all-section-container.component.sass'],
})
export class TrainersAllSectionContainerComponent implements OnInit {
  i: number = 0;
  prefix: string = '';
  heading: string = '';
  allPathsData: Path[] = [];
  allCoursesData: Course[] = [];
  allBatchesData: any[] = [
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

  loading: boolean = true;
  error: boolean = false;
  errorCard: Error = {
    message: '',
    code: 0,
  };
  onGoingFlag: boolean = false;
  //enums
  Title = Title;
  RouterLinks = RouterLinks;
  Prefix = Prefix;
  noContent: boolean = false;
  height: number = 112;
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  onScroll(percentage: number) {
    console.log(percentage);

    if (percentage > 80 && this.i <= 5 && !this.loading) {
      this.i = this.i + 1;
      this.store.dispatch(loadTrainersCourses({ pageNo: this.i }));
    }
  }
  getAllPaths() {
    this.store.dispatch(loadAllPaths());
    this.store.select(selectAllPaths).subscribe((res) => {
      if (res.length > 0) {
        this.allPathsData = res;
      }
    });

    this.store.select(selectAllPathsError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        this.error = false;
      }
    });

    this.store.select(selectAllPathsLoading).subscribe((res) => {
      if (!res) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } else {
        this.loading = true;
      }
    });
  }
  getAllCourses() {
    this.i = this.i + 1;
    this.store.dispatch(loadTrainersCourses({ pageNo: this.i }));

    this.store.select(selectTrainersCourses).subscribe((data) => {
      console.log(data);
      if (this.i === 1) {
        this.allCoursesData = data;
      } else {
        this.allCoursesData = [...this.allCoursesData, ...data];
        this.loading = false;
      }
    });

    // this.store.select(selectTrainersCourses).subscribe((res) => {
    //   if (res.length > 0) {
    //     this.allCoursesData = res;
    //   }
    // });

    this.store.select(selectTrainersCoursesError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        this.error = false;
      }
    });

    this.store.select(selectTrainersCoursesLoading).subscribe((res) => {
      if (!res) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } else {
        this.loading = true;
      }
    });
  }
  getAllBatches() {
    this.store.dispatch(loadAllBatches());
    this.store.select(selectBatches).subscribe((res) => {
      if (res.length > 0) {
        this.allBatchesData = res;
      }
    });

    this.store.select(selectBatchesError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        this.error = false;
      }
    });

    this.store.select(selectBatchesLoading).subscribe((res) => {
      if (!res) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } else {
        this.loading = true;
      }
    });
  }
  getEnrolledPaths() {
    this.store.dispatch(loadEnrolledPaths());
    this.store.select(selectEnrolledPaths).subscribe((res) => {
      // console.log('hel;llo');
      if (res.length > 0) {
        this.allPathsData = res;
      }
    });

    this.store.select(selectEnrolledPathsError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        // console.log('hel;llo');
        this.error = false;
      }
    });

    this.store.select(selectEnrolledPathsLoading).subscribe((res) => {
      if (!res) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } else {
        this.loading = true;
      }
    });
  }
  getEnrolledCourses() {
    this.store.dispatch(loadEnrolledCourses());
    this.store.select(selectEnrolledCourses).subscribe((res) => {
      if (res.length > 0) {
        this.allCoursesData = res;
      }
    });

    this.store.select(selectEnrolledCoursesError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      } else {
        this.error = false;
      }
    });

    this.store.select(selectEnrolledCoursesLoading).subscribe((res) => {
      if (!res) {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      } else {
        this.loading = true;
      }
    });
  }
  getFavouriteCourses() {
    this.store.dispatch(loadFavoriteCourses());
    this.store.select(selectFavoriteCoursesLoading).subscribe((res) => {
      if (res == false) {
        setTimeout(() => {
          this.loading = res;
        }, 500);
      }
    });
    this.store.select(selectFavoriteCourses).subscribe((res) => {
      if (res.length > 0) {
        // this.store.select(selectFavoritecourses).subscribe((res) => {
        //   res = res.filter(
        //     (course: Course) => course.id !== this.singleCourse.id
        //   );
        // });
        this.allCoursesData = res;
        this.noContent = false;
      }
      if (res.length == 0) {
        this.noContent = true;
      }
    });
  }
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
      }
      if (urlSegments.length >= 2) {
        this.prefix = urlSegments[1].path;
        if (this.prefix == Prefix.ONGOING) {
          this.onGoingFlag = true;
          this.prefix = Prefix.MY;
        }
      }
    });
    if (this.heading === Title.PATHS) {
      this.height = 112;
      if (this.prefix === Prefix.ALL) {
        this.getAllPaths();
      }
      if (this.prefix === Prefix.MY) {
        this.getEnrolledPaths();
      }
    } else if (this.heading === Title.COURSES) {
      this.height = 262;
      if (this.prefix === Prefix.ALL) {
        this.getAllCourses();
      }
      if (this.prefix === Prefix.MY) {
        this.getEnrolledCourses();
      }
      if (this.prefix === Prefix.FAVOURITES) {
        this.getFavouriteCourses();
      }
    } else if (this.heading === Title.BATCHES) {
      this.height = 200;
      if (this.prefix === Prefix.ALL) {
        this.getAllBatches();
      }
    }
  }

  // onScroll(percentage: number) {
  //   console.log('Scroll percentage:', percentage);
  // }
}
