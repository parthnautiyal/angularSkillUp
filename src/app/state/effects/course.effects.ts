import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CourseActions from '../action/course.action';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/Course';
import { APIResponse } from 'src/app/models/ApiResponse';

@Injectable()
export class CourseEffects {
  private url = 'https://api.training.zopsmart.com/students';

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            this.url + '/courses?pageSize=12&pageNo=1'
          )
          .pipe(
            map((courses) =>
              CourseActions.loadAllCoursesSuccess({ courses: courses.data })
            ),
            catchError((error) =>
              of(CourseActions.loadAllCoursesFailed({ error }))
            )
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
