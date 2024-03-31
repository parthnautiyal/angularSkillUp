import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from '../action/trainerscourse.actions';
import { Course } from 'src/app/models/Course';
export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: any;
}

export const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};

export const trainerCoursesReducer = createReducer(
  initialState,
  on(CoursesActions.loadTrainersCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CoursesActions.loadTrainersCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null,
  })),
  on(CoursesActions.loadTrainersCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
