import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { loadChapterData, loadCourseAboutInfo } from 'src/app/state/action/course.actions';
import { selectChapterDataLoading, selectCourseAboutInfoLoading, selectCoursesError } from 'src/app/state/selector/course.selector';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.sass'],
})

export class CoursePageComponent implements OnInit {
  id:string = '';
  loading:boolean = true;
  error:boolean = false;
  courseAbout$!: Observable<boolean>;
  chapterData$!: Observable<boolean>;
  constructor(private router: ActivatedRoute,private store:Store) {
    this.id = router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourseAboutInfo({ courseId: this.id }));
    this.store.dispatch(loadChapterData({ courseId: this.id }));
    this.courseAbout$ = this.store.select(selectCourseAboutInfoLoading);
    this.chapterData$ = this.store.select(selectChapterDataLoading);
    combineLatest([this.courseAbout$ ,this.chapterData$ ]).subscribe(([courseAbt,chapterData])=>{
      if (!courseAbt && !chapterData){
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }else{
        this.loading = true;
      }
    });
    this.store.select(selectCoursesError).subscribe((res)=>{
      if (res != null){
        this.error = true;
      }
    });
  }
}
