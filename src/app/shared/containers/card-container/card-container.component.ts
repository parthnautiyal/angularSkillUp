import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { Batch } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import {
  selectCourses,
  selectEnrolledCourses,
} from 'src/app/state/selector/course.selector';
import { Observable } from 'rxjs';
import { selectBatchs } from 'src/app/state/selector/batch.selector';
import { RandomColorDirective } from './random-color.directive';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import {
  selectEnrolledPaths,
  selectPaths,
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
import { EnrolledPath } from 'src/app/models/EnrolledPath';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
})
export class CardContainerComponent implements OnInit {
  heading: string = '';
  isActive = true;
  Title = Title;
  RouterLinks = RouterLinks;
  allPaths: Path[] = [];
  allCourses: Course[] = [];
  allBatches: Batch[] = [];
  courses$!: Observable<Course[]>;
  batch$!: Observable<Batch[]>;
  path$!: Observable<Path[]>;
  @Input() title: string = '';
  @Input() prefixWord: string = '';
  enrolledCourses: Course[] = [];
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllBatches());
    this.store.dispatch(loadAllPaths());
    this.store.dispatch(loadAllCourses());
    this.path$ = this.store.select(selectPaths);
    this.courses$ = this.store.select(selectCourses);
    this.batch$ = this.store.select(selectBatchs);

    // this.activatedRoute.url.subscribe((urlSegments) => {
    //   if (urlSegments.length >= 1) {
    //     this.heading = urlSegments[0].path;
    //     if (this.heading == 'user') this.isActive = true;
    //     else this.isActive = true;
    //   }
    // });
    this.store.dispatch(loadEnrolledPaths());
    this.store.select(selectEnrolledPaths).subscribe((data) => {
      this.allPaths = data;
    });

    this.store.dispatch(loadEnrolledCourses());
    this.store.select(selectEnrolledCourses).subscribe((res) => {
      // this.loading = false;
      this.enrolledCourses = res;
      console.log('enrolled courses', res);
    });
  }
}
