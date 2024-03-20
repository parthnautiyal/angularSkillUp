import { CourseDataService } from "./../../../services/course-data.service";
import { ActivatedRoute } from "@angular/router";
import { PathDataService } from "./../../../services/path-data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { combineLatest } from "rxjs";
import { Store, select } from "@ngrx/store";
import { loadCourses } from "src/app/state/action/course.action";
import {
  selectCourses,
  selectCoursesError,
} from "src/app/state/selector/course.selector";
import { Observable } from "rxjs";
import { Course } from "src/app/models/Course";
import { loadBatch } from "src/app/state/action/batch.action";
import { Batch } from "src/app/models/Batch";
import { selectBatchs } from "src/app/state/selector/batch.selector";

@Component({
  selector: "app-all-section-container",
  templateUrl: "./all-section-container.component.html",
  styleUrls: ["./all-section-container.component.sass"],
})
export class AllSectionContainerComponent implements OnInit {
  prefix: string = "";
  heading: string = "";
  allPathsData: any[] = [];
  allCoursesData: any[] = [];
  allBatchesData: any[] = [];
  // loading: boolean = true;
  // batch$!: Observable<Batch[]>;
  // loadingData$!: Observable<boolean>;
  // error$!: Observable<any>;
  constructor(
    private store: Store,
    private pathDataService: PathDataService,
    private activatedRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    private router: Router
  ) {}
  getAllPaths() {
    this.pathDataService.getPaths();
    combineLatest([this.pathDataService.allPathsData$]).subscribe(
      ([pathsdata]) => {
        if (
          typeof pathsdata === "object" &&
          Object.keys(pathsdata).length > 0
        ) {
          // this.loading = false;
          this.allPathsData = pathsdata.data;
        }
      }
    );
  }
  getAllCourses() {
    this.store.dispatch(loadCourses());
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
    this.store.dispatch(loadBatch());
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
    this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
      this.allCoursesData = data.data.enrolledCourses;
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
        if (this.prefix == "ongoing") {
          this.prefix = "my";
        }
      }
    });
    if (this.heading === "paths") {
      if (this.prefix === "all") {
        this.getAllPaths();
      }
      if (this.prefix === "my") {
        this.getEnrolledPaths();
      }
    } else if (this.heading === "courses") {
      if (this.prefix === "all") {
        this.getAllCourses();
      }
      if (this.prefix === "my") {
        this.getEnrolledCourses();
      }
    } else if (this.heading === "batches") {
      if (this.prefix === "all") {
        this.getAllBatches();
      }
    }
  }
}
