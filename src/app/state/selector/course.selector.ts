import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from '../reducer/course.reducer';

export const selectCourseState = createFeatureSelector<CourseState>('courses');

export const selectCourses = createSelector(
  selectCourseState,
  (state) => state.allCourses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state) => state.isLoading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state) => state.error
);
