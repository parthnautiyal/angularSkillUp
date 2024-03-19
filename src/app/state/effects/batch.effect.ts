import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BatchActions from '../action/batch.action';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Batch } from 'src/app/models/Batch';
import { APIResponse } from 'src/app/models/ApiResponse';

@Injectable()
export class BatchEffects {
  private url = 'https://api.training.zopsmart.com/student';

  loadBatch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BatchActions.loadBatch),
      switchMap(() =>
        this.http.get<APIResponse<Batch[]>>(this.url + '/batches/all').pipe(
          map((batch) =>
            this.store.dispatch(BatchActions.batchLoaded({ batch: batch.data }))
          ),
          catchError((error) => {
            return of(BatchActions.loadBatchsFailure({ error }));
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
