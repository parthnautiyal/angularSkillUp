import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MiscellaneousService } from 'src/app/services/miscellaneous.service';
import {
  loadCourseAboutInfo,
  loadChapterData,
  loadCourseRating,
} from 'src/app/state/action/course.actions';
import {
  selectCourseAboutInfoLoading,
  selectCourseAboutInfo,
  selectChapterDataLoading,
  selectCourseAboutInfoError,
} from 'src/app/state/selector/course.selector';
import { Error } from 'src/app/models/Error';
import { loadTrainerCourseDataById } from 'src/app/state/action/trainer-course-data.actions';
import { selectTrainerCourseData } from 'src/app/state/selector/trainer-course-data.selector';

@Component({
  selector: 'app-course-page-trainer',
  templateUrl: './course-page-trainer.component.html',
  styleUrls: ['./course-page-trainer.component.sass'],
})
export class CoursePageTrainerComponent implements OnInit {
  nameData: any = {
    imageUrl:
      'https://storage.googleapis.com/zopsmart-media/5282/images/originals/20240331/d194b7d3-8547-48ae-a567-a2c3f4bdf994-tnsBackground.webp',

    name: 'Parth Nautiyal',
    email: 'parthnautiyal2002@gmail.com',
  };
  id: number = 0;
  loading: boolean = false;
  isChapterLoading: boolean = true;
  error: boolean = false;
  isAccessiblity: boolean = false;
  errors: Error = {
    code: 0,
    message: '',
  };
  isRed: boolean = true;
  // courseAbout$!: Observable<boolean>;
  chapterData$!: Observable<boolean>;
  constructor(
    private router: ActivatedRoute,
    private store: Store,
    private mis: MiscellaneousService
  ) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(loadTrainerCourseDataById({ id: this.id }));
    this.store.select(selectTrainerCourseData).subscribe((res) => {
      
    });

    // this.store.dispatch(loadCourseRating({ id: this.id }));
    // this.mis.getCourseReviews(parseInt(this.id));
    // this.mis.getMyReviews(parseInt(this.id));

    this.store.select(selectCourseAboutInfoError).subscribe((res) => {
      if (res != null) {
        this.error = true;
        this.errors.message = res.message.split('`').slice(1);
        this.errors.code = res.message.split('`').slice(0, 1);
      }
    });
  }
}
