import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as PathActions from '../action/path.action';
import { APIResponse } from 'src/app/models/ApiResponse';
import { Path } from 'src/app/models/Path';

@Injectable()
export class PathEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  private url = 'https://api.training.zopsmart.com/students/paths';
  loadAllCourses$ = createEffect(() =>
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
}
