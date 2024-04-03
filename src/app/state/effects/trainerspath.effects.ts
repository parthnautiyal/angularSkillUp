import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TrainerPathsActions from '../action/trainerspath.actions';

import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/models/Path';
import { APIResponse } from 'src/app/models/ApiResponse';
import { TrainerPathData } from 'src/app/models/TrainerPathData';

@Injectable()
export class TrainerPathsEffects {
  loadTrainerPaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerPathsActions.loadTrainersPaths),
      switchMap(({ pageNo }) =>
        this.http
          .get<APIResponse<Path[]>>(
            `https://staging.api.training.zopsmart.com/admin/paths?projection=&pageSize=10&pageNo=${pageNo}`
          )
          .pipe(
            map((paths) =>
              TrainerPathsActions.loadTrainersPathsSuccess({
                paths: paths.data,
              })
            ),
            catchError((error) =>
              of(
                TrainerPathsActions.loadTrainersPathsFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
  loadTrainerProfilePaths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerPathsActions.loadTrainersProfilePaths),
      switchMap(() =>
        this.http
          .get<APIResponse<Path[]>>(
            `https://staging.api.training.zopsmart.com/trainers/327/paths`
          )
          .pipe(
            map((paths) =>
              TrainerPathsActions.loadTrainersProfilePathsSuccess({
                paths: paths.data,
              })
            ),
            catchError((error) =>
              of(
                TrainerPathsActions.loadTrainersProfilePathsFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );
  loadTrainerPathData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrainerPathsActions.loadTrainerPathData),
      switchMap(({ id }) =>
        this.http
          .get<APIResponse<TrainerPathData>>(
            `https://staging.api.training.zopsmart.com/admin/paths/${id}?projection=course`
          )
          .pipe(
            map((paths) =>
              TrainerPathsActions.loadTrainerPathDataSuccess({
                paths: paths.data,
              })
            ),
            catchError((error) =>
              of(
                TrainerPathsActions.loadTrainerPathDataFailure({
                  error: error.message,
                })
              )
            )
          )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
