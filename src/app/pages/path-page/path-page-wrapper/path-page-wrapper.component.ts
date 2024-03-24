import { ActivatedRoute } from '@angular/router';
import { MiscellaneousService } from '../../../services/miscellaneous.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPathById } from 'src/app/state/action/path.action';
import { selectPathById } from 'src/app/state/selector/path.selector';
import { Course } from 'src/app/models/Course';
@Component({
  selector: 'app-path-page-wrapper',
  templateUrl: './path-page-wrapper.component.html',
  styleUrls: ['./path-page-wrapper.component.sass'],
})
export class PathPageWrapperComponent implements OnInit {
  id: string = '';
  courseData: Course[] = [];
  constructor(private store: Store, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    // this.pathDataService.getPathData(this.id).subscribe((data) => {
    //   this.Course = data.valueOf();
    //   this.courseData = this.Course.data.courses;
    //   console.log(this.courseData);
    // });
    this.store.dispatch(loadPathById({ id: this.id }));
    this.store.select(selectPathById).subscribe((path) => {
      console.log('path=', path);
      this.courseData = path.courses;
      console.log(this.courseData);
    });
  }

  ngOnInit(): void {}
}
