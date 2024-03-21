import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from '../../../services/course-data.service';
import { PathDataService } from '../../../services/path-data.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BatchDataService } from '../../../services/batch-data.service';
import { Course, CourseList } from 'src/app/models/Course';
import { PathList } from 'src/app/models/Path';
import { Batch, BatchList } from 'src/app/models/Batch';
import { Store } from '@ngrx/store';
import { selectCourses } from 'src/app/state/selector/course.selector';
import { Observable } from 'rxjs';
import { selectBatchs } from 'src/app/state/selector/batch.selector';
import { RandomColorDirective } from './random-color.directive';
import { Title } from 'src/app/constants/enums/title';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.sass'],
 

})
export class CardContainerComponent implements OnInit {
  heading: string = '';
  isActive = true;
  Title=Title;
  RouterLinks=RouterLinks;

  allPaths: PathList = {
    data: [],
  };
  allCourses: CourseList = {
    data: [],
  };
  allBatches: BatchList = {
    data: [],
  };
  courses$!: Observable<Course[]>;
  batch$!: Observable<Batch[]>;
  @Input() title: string = '';
  @Input() prefixWord: string = '';
  constructor(
    private batchDataService: BatchDataService,
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
    this.pathDataService.getPaths();
    this.pathDataService.allPathsData$.subscribe((data: PathList) => {
      console.log(data);
      this.allPaths = data;
    });

    this.courses$ = this.store.select(selectCourses);
    this.batch$ = this.store.select(selectBatchs);
    this.activatedRoute.url.subscribe((urlSegments) => {
      if (urlSegments.length >= 1) {
        this.heading = urlSegments[0].path;
        if (this.heading == 'user') this.isActive = false;
        else this.isActive = true;
      }
    });
    console.log(this.isActive);
    if (!this.isActive) {
      this.pathDataService.getEnrolledPaths().subscribe((data: any) => {
        this.allPaths = data.data.enrolledPaths;
        console.log('inside if -> ' + this.allPaths);
      });
    }

    if (!this.isActive) {
      this.courseDataService.getEnrolledCourses().subscribe((data: any) => {
        this.allCourses = data;
        console.log(this.allCourses);
      });
    }


  }
}
