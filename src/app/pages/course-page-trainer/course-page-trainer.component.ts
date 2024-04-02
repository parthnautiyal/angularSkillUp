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
  id: string = '';
  loading: boolean = true;
  isChapterLoading: boolean = true;
  error: boolean = false;
  isAccessiblity: boolean = false;
  errors: Error = {
    code: 0,
    message: '',
  };
  isRed: boolean = true;
  courseAbout$!: Observable<boolean>;
  chapterData$!: Observable<boolean>;
  constructor(
    private router: ActivatedRoute,
    private store: Store,
    private mis: MiscellaneousService
  ) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    this.courseAbout$ = this.store.select(selectCourseAboutInfoLoading);
    this.courseAbout$.subscribe((res) => {
      if (res == false) {
        this.loading = res;
        this.store.select(selectCourseAboutInfo).subscribe((res) => {
          if (res) {
            this.isAccessiblity = res.isEnrolled || false;
            // console.log(this.isAccessiblity);
            this.isRed = res.isFavourite;
            if (this.isAccessiblity) {
              this.store.dispatch(loadChapterData({ courseId: this.id }));
              this.store.select(selectChapterDataLoading).subscribe((res) => {
                this.isChapterLoading = res;
              });
            }
          }
        });

        setTimeout(() => {
          this.loading = res;
        }, 500);
      } else {
        this.loading = res;
      }
    });

    this.store.dispatch(loadCourseRating({ id: this.id }));
    this.mis.getCourseReviews(parseInt(this.id));
    this.mis.getMyReviews(parseInt(this.id));

    this.store.select(selectCourseAboutInfoError).subscribe((res) => {
      if (res != null) {
        this.error = true;
        this.errors.message = res.message.split('`').slice(1);
        this.errors.code = res.message.split('`').slice(0, 1);
      }
    });
  }
}
