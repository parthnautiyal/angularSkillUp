import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CoursesActions from '../action/trainerscourse.actions';
import { Course } from 'src/app/models/Course';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/models/ApiResponse';

@Injectable()
export class TrainerCoursesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  loadTrainerCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadTrainersCourses),
      switchMap(({ pageNo }) =>
        this.http
          .get<APIResponse<Course[]>>(
            `https://staging.api.training.zopsmart.com/admin/courses?projection=&pageSize=12&pageNo=${pageNo}`
          )
          .pipe(
            map(
              (courses) => (
                console.log(courses.data),
                CoursesActions.loadTrainersCoursesSuccess({
                  courses: courses.data,
                })
              )
            ),
            catchError((error) =>
              of(
                CoursesActions.loadTrainersCoursesFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
}
