import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  loadAllCourses,
  loadEnrolledCourses,
  loadFavoriteCourses,
} from 'src/app/state/action/course.action';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesLoading,
  selectEnrolledCourses,
  selectEnrolledCoursesError,
  selectFavoritecourses,
  selectFavouriteCoursesLoading,
} from 'src/app/state/selector/course.selector';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import {
  selectBatchs,
  selectBatchsError,
  selectBatchsLoading,
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
} from 'src/app/state/action/path.action';
import {
  selectEnrolledPaths,
  selectEnrolledPathsError,
  selectPaths,
  selectPathsError,
  selectPathsLoading,
} from 'src/app/state/selector/path.selector';
import { Error } from 'src/app/models/Error';

@Component({
  selector: 'app-all-section-container',
  templateUrl: './all-section-container.component.html',
  styleUrls: ['./all-section-container.component.sass'],
})
export class AllSectionContainerComponent implements OnInit {
  prefix: string = '';
  heading: string = '';
  allPathsData: Path[] = [];
  allCoursesData: Course[] = [];
  allBatchesData: Batch[] = [];
  loading: boolean = true;
  error: boolean = false;
  errorCard: Error = {
    message: '',
    code: 0,
  };
  //enums
  Title = Title;
  RouterLinks = RouterLinks;
  Prefix = Prefix;
  noContent:boolean = false;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  getAllPaths() {
    this.store.dispatch(loadAllPaths());
    this.store.select(selectPaths).subscribe((res) => {
      if (res.length > 0) {
        this.allPathsData = res;
        this.error = false;
      }
    });

    this.store.select(selectPathsError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      }
    });

    this.store.select(selectPathsLoading).subscribe((res) => {
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
    this.store.dispatch(loadAllCourses());

    this.store.select(selectCourses).subscribe((res) => {
      if (res.length > 0) {
        this.allCoursesData = res;
        this.error=false;
      }
    });

    this.store.select(selectCoursesError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      }
    });

    this.store.select(selectCoursesLoading).subscribe((res) => {
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
    this.store.select(selectBatchs).subscribe((res) => {
      if (res.length > 0) {
        this.allBatchesData = res;
        this.error=false;
      }
    });

    this.store.select(selectBatchsError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      }
    });

    this.store.select(selectBatchsLoading).subscribe((res) => {
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
      if (res.length > 0) {
        this.allPathsData = res;
        this.error=false;
      }
    });

    this.store.select(selectEnrolledPathsError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      }
    });

    this.store.select(selectPathsLoading).subscribe((res) => {
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
        this.error=false;
      }
    });

    this.store.select(selectEnrolledCoursesError).subscribe((res) => {
      if (res) {
        this.error = true;
        this.errorCard.message = res.message.split('`').slice(1);
        this.errorCard.code = res.message.split('`').slice(0, 1);
      }
    });

    this.store.select(selectCoursesLoading).subscribe((res) => {
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
    this.store.select(selectFavouriteCoursesLoading).subscribe((res)=>{
      if (res == false){
        setTimeout(() => {
          this.loading = res;
        }, 500);
      }else{
        this.loading = res;
      }
    });
    this.store.select(selectFavoritecourses).subscribe((res) =>{
      if (res.length > 0) {
        this.allCoursesData = res;
        this.loading = false;
        this.noContent = false;
      }
      if (res.length == 0){
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
          this.prefix = Prefix.MY;
        }
      }
    });
    if (this.heading === Title.PATHS) {
      if (this.prefix === Prefix.ALL) {
        this.getAllPaths();
      }
      if (this.prefix === Prefix.MY) {
        this.getEnrolledPaths();
      }
    } else if (this.heading === Title.COURSES) {
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
      if (this.prefix === Prefix.ALL) {
        this.getAllBatches();
      }
    }
  }
}
