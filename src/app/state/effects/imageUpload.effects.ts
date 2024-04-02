import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as UploadActions from '../action/imageUpload.actions';
import { API } from 'src/app/constants/enums/API';

@Injectable()
export class UploadEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  uploadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UploadActions.uploadImage),
      switchMap(({ file }) => {
        const formData = new FormData();
        formData.append('imageUpload', file, file.name);

        const developerToken = '7b172834-1703-4169-b16a-18e9bfabd587';

        const headers = new HttpHeaders({
          'developer-token': developerToken,
        });

        return this.http
          .post(API.MEDIA + API.IMAGE_UPLOAD, formData, { headers })
          .pipe(
            map((response: any) =>
              UploadActions.uploadImageSuccess({ imageUrl: response.data.imageUpload.url })
            ),
            catchError((error) =>
              of(UploadActions.uploadImageFailure({ error: error.message }))
            )
          );
      })
    )
  );
}
