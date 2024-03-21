import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as PathActions from '../action/path.action';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Path } from 'src/app/models/Path';
import { EnrolledPathsData } from 'src/app/models/EnrolledPath';

@Injectable()
export class PathEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  private url = 'https://api.training.zopsmart.com/students/paths';
  loadAllPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadAllPaths),
      mergeMap(() =>
        this.http
          .get<APIResponse<Path[]>>(this.url + '?pageSize=10&pageNo=1')
          .pipe(
            map((paths) =>
              PathActions.loadAllPathsSuccess({ paths: paths.data })
            ),
            catchError((error) => of(PathActions.loadAllPathsFailed({ error })))
          )
      )
    )
  );

  loadEnrolledPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadEnrolledPaths),
      mergeMap(() =>
        this.http
          .get<APIResponse<EnrolledPathsData>>(
            'https://api.training.zopsmart.com/students/enrolled-paths'
          )
          .pipe(
            map((enrolledPaths) =>
              PathActions.loadEnrolledPathsSuccess({
                enrolledPaths: enrolledPaths.data.enrolledPaths,
              })
            ),
            catchError((error) =>
              of(PathActions.loadEnrolledPathsFailed({ error }))
            )
          )
      )
    )
  );

  loadNoOfEnrolledPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PathActions.loadNumberOfEnrolledPaths),
      mergeMap(() =>
        this.http
          .get<APIResponse<number>>(
            'https://api.training.zopsmart.com/students/no-of-enrolled-paths'
          )
          .pipe(
            map((count) =>
              PathActions.loadNumberOfEnrolledPathsSuccess({
                numberOfEnrolledPaths: count.data,
              })
            ),
            catchError((error) =>
              of(PathActions.loadNumberOfEnrolledPathsFailed({ error }))
            )
          )
      )
    )
  );
}
