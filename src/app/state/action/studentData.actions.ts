import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/models/Student';

export const loadAllStudents = createAction(
  '[Student] Load All Students',
  props<{ pageNo: number }>()
);

export const loadAllStudentsSuccess = createAction(
  '[Student] Load All Students Success',
  props<{ student: Student[] }>()
);

export const loadAllStudentsFailed = createAction(
  '[Student] Load All Students Failed',
  props<{ error: any }>()
);
