import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { PathDataService } from '../../../services/path-data.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BatchDataService } from '../../../services/batch-data.service';
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
import { selectPaths } from 'src/app/state/selector/path.selector';
import { loadEnrolledCourses } from 'src/app/state/action/course.action';
import { enrolledCourses } from 'src/app/models/EnrolledCourses';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import { loadAllPaths } from 'src/app/state/action/path.action';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService,
    private store: Store
  ) {
    this.activatedRoute.url.subscribe((urlSegments) => {
      console.log(urlSegments);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllBatches());
    this.store.dispatch(loadAllPaths());
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

    this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
      this.allPaths = data.data.enrolledPaths;
      console.log('inside if -> ' + this.allPaths);
    });
    this.store.dispatch(loadEnrolledCourses());
    this.store.select(selectEnrolledCourses).subscribe((res) => {
      // this.loading = false;
      this.enrolledCourses = res;
      console.log('enrolled courses', res);
    });
  }
}
