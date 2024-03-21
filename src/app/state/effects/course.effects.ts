import { coursesLoadFailed } from './../action/course.action';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CourseActions from '../action/course.action';
import { Store } from '@ngrx/store';
import { coursesLoaded } from '../action/course.action';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/Course';
import { APIResponse } from 'src/app/models/ApiResponse';

@Injectable()
export class CourseEffects {
  private url = 'https://api.training.zopsmart.com/students';

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            this.url + '/courses?pageSize=12&pageNo=1'
          )
          .pipe(
            map((courses) =>
              this.store.dispatch(coursesLoaded({ courses: courses.data }))
            ),
            catchError((error) => {
              this.store.dispatch(coursesLoadFailed({ error }));
              return of(CourseActions.loadCoursesFailure({ error }));
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private http: HttpClient
  ) {}
}
