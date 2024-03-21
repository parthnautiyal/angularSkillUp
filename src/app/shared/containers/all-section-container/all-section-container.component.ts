import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.action';
import {
  selectEnrolledPaths,
  selectPaths,
} from 'src/app/state/selector/path.selector';

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

  //enums
  Title = Title;
  RouterLinks = RouterLinks;
  Prefix = Prefix;

  constructor(
    private store: Store,
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
  }
  getAllBatches() {
    this.store.dispatch(loadAllBatches());
    this.store.select(selectBatchs).subscribe((res) => {
      // this.loading = false;
      if (res.length > 0) this.allBatchesData = res;
    });
  }
  getEnrolledPaths() {
    this.store.dispatch(loadEnrolledPaths());
    this.store.select(selectEnrolledPaths).subscribe((res) => {
      // this.loading = false;
      if (res.length > 0) this.allPathsData = res;
    });
  }
  getEnrolledCourses() {
    this.store.dispatch(loadEnrolledCourses());
    this.store.select(selectEnrolledCourses).subscribe((res) => {
      this.allCoursesData = res;
    });
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
