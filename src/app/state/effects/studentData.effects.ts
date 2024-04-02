import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { API } from 'src/app/constants/enums/API';
import { APIResponse } from 'src/app/models/ApiResponse';
import * as StudentDataActions from '../action/studentData.actions';
import { Student } from 'src/app/models/Student';

@Injectable()
export class StudentDataEffects {
  private url = API.BASE_URL + API.STUDENTS;

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadStudentsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentDataActions.loadAllStudents),
      switchMap(({pageNo}) =>
        this.http
          .get<APIResponse<Student[]>>(this.url + `?pageSize=8&pageNo=${pageNo}`)
          .pipe(
            map((StudentsData) =>
              StudentDataActions.loadAllStudentsSuccess({
                student: StudentsData.data,
              })
            ),
            catchError((error) => {
              return of(StudentDataActions.loadAllStudentsFailed({ error }));
            })
          )
      )
    )
  );
}
