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
import { API } from 'src/app/constants/enums/API';

@Injectable()
export class CourseEffects {
  // private url = 'https://api.training.zopsmart.com/students';

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            API.BASE_URL + API.STUDENTS + API.COURSES_ALL
          )
          .pipe(
            map((courses) =>
              this.store.dispatch(coursesLoaded({ courses: courses.data }))
            ),
            catchError((error) => {
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
