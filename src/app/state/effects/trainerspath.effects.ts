import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TrainerPathsActions from '../action/trainerspath.actions';

import { HttpClient } from '@angular/common/http';
import { Path } from 'src/app/models/Path';
import { APIResponse } from 'src/app/models/ApiResponse';

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

  constructor(private actions$: Actions, private http: HttpClient) {}
}
