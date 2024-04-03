import * as TrainerCourseDataAction from './../action/trainer-course-data.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CoursesActions from '../action/trainerscourse.actions';
import { Course, ProfileCourse } from 'src/app/models/Course';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';

@Injectable()
export class TrainerCourseDataByIdEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  loadTrainerCourseData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerCourseDataAction.loadTrainerCourseDataById),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<Course>>(
            `https://staging.api.training.zopsmart.com/admin/courses/${id}`
          )
          .pipe(
            map(
              (courses) => (
                console.log(courses.data),
                TrainerCourseDataAction.loadTrainerCourseDataByIdSuccess({
                  courseData: courses.data,
                })
              )
            ),
            catchError((error) =>
              of(
                TrainerCourseDataAction.loadTrainerCourseDataByIdFailed
                ({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
  loadTrainerCourseChapters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerCourseDataAction.loadTrainerCourseChaptersById),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<Chapter[]>>(
            `https://staging.api.training.zopsmart.com/admin/courses/${id}/chapters`
          )
          .pipe(
            map(
              (chapters) => (
                console.log(chapters.data),
                TrainerCourseDataAction.loadTrainerCourseChaptersByIdSuccess({
                  courseChapters: chapters.data,
                })
              )
            ),
            catchError((error) =>
              of(
                TrainerCourseDataAction.loadTrainerCourseChaptersByIdFailed
                ({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
  loadTrainerCourseRating$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerCourseDataAction.loadTrainerCourseRatingById),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<Ratings>>(
            `https://staging.api.training.zopsmart.com/admin/courses/${id}/ratings`
          )
          .pipe(
            map(
              (rating) => (
                console.log(rating.data),
                TrainerCourseDataAction.loadTrainerCourseRatingByIdSuccess({
                  courseRating: rating.data,
                })
              )
            ),
            catchError((error) =>
              of(
                TrainerCourseDataAction.loadTrainerCourseRatingByIdFailed
                ({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
}
