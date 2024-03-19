import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/Course';
import * as CourseActions from '../action/course.action';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: any;
}

export const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CourseActions.coursesLoaded, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),
  on(CourseActions.coursesLoadFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);

export const getCourses = (state: CourseState) => state.courses;
export const getCoursesLoading = (state: CourseState) => state.loading;
export const getCoursesError = (state: CourseState) => state.error;
