import { CourseDataService } from './../../../services/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { PathDataService } from './../../../services/path-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.action';
import {
  selectCourses,
  selectEnrolledCourses,
} from 'src/app/state/selector/course.selector';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import { selectBatchs } from 'src/app/state/selector/batch.selector';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Prefix } from 'src/app/constants/enums/prefix';
import { Path } from 'src/app/models/Path';
import { Course } from 'src/app/models/Course';
import { Batch } from 'src/app/models/Batch';
import { loadAllPaths } from 'src/app/state/action/path.action';
import { selectPaths } from 'src/app/state/selector/path.selector';

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
  enrolledCourses: Course[] = [];
  // loading: boolean = true;
  // batch$!: Observable<Batch[]>;
  // loadingData$!: Observable<boolean>;
  // error$!: Observable<any>;

  //enums
  Title = Title;
  RouterLinks = RouterLinks;
  Prefix = Prefix;

  constructor(
    private store: Store,
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  getAllPaths() {
    this.store.dispatch(loadAllPaths());
    this.store.select(selectPaths).subscribe((res) => {
      if (res.length > 0) this.allPathsData = res;
    });
  }
  getAllCourses() {
    this.store.dispatch(loadAllCourses());
    this.store.select(selectCourses).subscribe((res) => {
      // this.loading = false;
      if (res.length > 0) this.allCoursesData = res;
    });
    // this.loading$ = this.store.pipe(select(selectCoursesLoading));
    // this.error$ = this.store.pipe(select(selectCoursesError));
    // if (Object.keys(this.courses$).length > 0) {
    //   this.loading = false;
    // }
  }
  getAllBatches() {
    this.store.dispatch(loadAllBatches());
    this.store.select(selectBatchs).subscribe((res) => {
      // this.loading = false;
      if (res.length > 0) this.allBatchesData = res;
    });
  }
  getEnrolledPaths() {
    this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
      this.allPathsData = data.data.enrolledPaths;
    });
  }
  getEnrolledCourses() {
    this.store.dispatch(loadEnrolledCourses());
    this.store.select(selectEnrolledCourses).subscribe((res) => {
      // this.loading = false;
      this.enrolledCourses = res;
    });

    // this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
    //   this.allCoursesData = data.data.enrolledCourses;
    // });
  }
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);
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
    } else if (this.heading === Title.BATCHES) {
      if (this.prefix === Prefix.ALL) {
        this.getAllBatches();
      }
    }
  }
}
