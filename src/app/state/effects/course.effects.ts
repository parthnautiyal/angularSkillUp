import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CourseActions from '../action/course.action';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/Course';
import { APIResponse } from 'src/app/models/ApiResponse';
import { enrolledCourses } from 'src/app/models/EnrolledCourses';
import { Chapter } from 'src/app/models/Chapter';

@Injectable()
export class CourseEffects {
  private url = 'https://api.training.zopsmart.com/students';

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadAllCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            this.url + '/courses?pageSize=122&pageNo=1'
          )
          .pipe(
            map((courses) =>
              CourseActions.loadAllCoursesSuccess({ courses: courses.data })
            ),
            catchError((error) => {
              console.log('Error -> ' + error);
              //of(CourseActions.loadAllCoursesFailed({ error }));
              return of(CourseActions.loadAllCoursesFailed({ error }));
            })
          )
      )
    )
  );
  loadNoOfEnrolledCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadNoOfEnrolledCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<number>>(this.url + '/no-of-enrolled-courses')
          .pipe(
            map((count) =>
              CourseActions.loadNoOfEnrolledCoursesSuccess({
                count: count.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadNoOfEnrolledCoursesFailed({ error }))
            )
          )
      )
    )
  );
  loadCourseAboutInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourseAboutInfo),
      switchMap(({ courseId }) =>
        this.http
          .get<APIResponse<Course>>(this.url + '/courses/' + courseId)
          .pipe(
            map((course) =>
              CourseActions.loadCourseAboutInfoSuccess({
                course: course.data,
              })
            ),
            catchError((error) => {
              return of(CourseActions.loadCourseAboutInfoFailed({ error }));
            })
          )
      )
    )
  );
  loadEnrolledCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadEnrolledCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<enrolledCourses>>(
            'https://api.training.zopsmart.com/students/enrolled-courses'
          )
          .pipe(
            map((course) =>
              CourseActions.loadEnrolledCoursesSuccess({
                enrolledCourses: course.data.enrolledCourses,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadEnrolledCoursesFailed({ error }))
            )
          )
      )
    )
  );
  loadChapterData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadChapterData),
      switchMap(({ courseId }) =>
        this.http
          .get<APIResponse<Chapter[]>>(
            this.url + '/courses/' + courseId + '/chapters'
          )
          .pipe(
            map((chapterData) =>
              CourseActions.loadChapterDataSuccess({
                chapterData: chapterData.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadChapterDataFailed({ error }))
            )
          )
      )
    )
  );
  loadFavoriteCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadFavoriteCourses),
      switchMap(() =>
        this.http
          .get<APIResponse<Course[]>>(
            'https://api.training.zopsmart.com/student/favourites'
          )
          .pipe(
            map((courses) =>
              CourseActions.loadFavoriteCoursesSuccess({
                favoriteCourses: courses.data,
              })
            ),
            catchError((error) =>
              of(CourseActions.loadFavoriteCoursesFailed({ error }))
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
