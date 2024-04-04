import * as TrainerCourseDataAction from './../action/trainer-course-data.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Course } from 'src/app/models/Course';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';
import { ResourceData } from 'src/app/models/Resource';

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
                TrainerCourseDataAction.loadTrainerCourseDataByIdFailed({
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
                TrainerCourseDataAction.loadTrainerCourseChaptersByIdFailed({
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
                TrainerCourseDataAction.loadTrainerCourseRatingByIdFailed({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );

  loadTrainerCourseResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerCourseDataAction.loadTrainerCourseResourcesById),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<ResourceData[]>>(
            `https://staging.api.training.zopsmart.com/admin/courses/${id}/resources`
          )
          .pipe(
            map(
              (resource) => (
                console.log(resource.data),
                TrainerCourseDataAction.loadTrainerCourseResourcesByIdSuccess({
                  courseResourceData: resource.data,
                })
              )
            ),
            catchError((error) =>
              of(
                TrainerCourseDataAction.loadTrainerCourseResourcesByIdFailed({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
}
