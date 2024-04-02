import { createReducer, on } from '@ngrx/store';
import { Student } from 'src/app/models/Student';
import * as StudentDataActions from '../action/studentData.actions';

export interface StudentDataState {
  students: Student[];
  loading: boolean;
  error: any;
}

export const initialStudentDataState: StudentDataState = {
  students: [],
  loading: false,
  error: null,
};

export const studentDataReducer = createReducer(
  initialStudentDataState,
  on(StudentDataActions.loadAllStudents, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(StudentDataActions.loadAllStudentsSuccess, (state, { student }) => {
    return {
      ...state,
      students: student,
      loading: false,
    };
  }),
  on(StudentDataActions.loadAllStudentsFailed, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
    };
  })
);
