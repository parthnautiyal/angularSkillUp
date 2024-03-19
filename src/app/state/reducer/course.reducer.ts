import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/Course';
import * as CourseActions from '../action/course.action';

export interface CourseState {
  courses: Course[];
  loadingData: boolean;
  error: any;
}

export const initialState: CourseState = {
  courses: [],
  loadingData: false,
  error: null,
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loadingData: true,
    error: null,
  })),
  on(CourseActions.coursesLoaded, (state, { courses }) => ({
    ...state,
    courses,
    loadingData: false,
    error: null,
  })),
  on(CourseActions.coursesLoadFailed, (state, { error }) => ({
    ...state,
    loadingData: false,
    error,
  }))
);

export const getCourses = (state: CourseState) => state.courses;
export const getCoursesLoading = (state: CourseState) => state.loadingData;
export const getCoursesError = (state: CourseState) => state.error;
