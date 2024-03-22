import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BatchActions from '../action/batch.action';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Batch } from 'src/app/models/Batch';
import { APIResponse } from 'src/app/models/ApiResponse';
import { API } from 'src/app/constants/enums/API';

@Injectable()
export class BatchEffects {
  loadAllBatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadAllBatches),
      switchMap(() =>
        this.http
          .get<APIResponse<Batch[]>>(
            API.BASE_URL + API.STUDENT + API.BATCHES_ALL
          )
          .pipe(
            map((batch) =>
              BatchActions.loadAllBatchesSuccess({ batches: batch.data })
            ),
            catchError((error) =>
              of(BatchActions.loadAllBatchesFailed({ error }))
            )
          )
      )
    )
  );
  loadBatchById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadBatchById),
      switchMap(({ id }) =>
        this.http.get<any>(API.BASE_URL + API.STUDENT + API.BATCHES + id).pipe(
          map((batch) => BatchActions.loadBatchByIdSuccess({ batch })),
          catchError((error) => of(BatchActions.loadBatchByIdFailed({ error })))
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
