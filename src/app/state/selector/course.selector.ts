import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from '../reducer/course.reducer';

export const selectCourseState = createFeatureSelector<CourseState>('courses');

export const selectCourses = createSelector(
  selectCourseState,
  (state) => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state) => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state) => state.error
);
