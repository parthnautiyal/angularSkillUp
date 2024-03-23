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
export const selectNoOfCourses = createSelector(
  selectCourseState,
  (state) => state.noOfEnrolledCourses
);

export const selectEnrolledCourses = createSelector(
  selectCourseState,
  (state) => state.enrolledCourses
);
export const selectChapterData = createSelector(
  selectCourseState,
  (state) => state.chapterData
);
export const selectCourseAboutInfo = createSelector(
  selectCourseState,
  (state) => state.courseAboutInfo
);
export const selectFavoritecourses = createSelector(
  selectCourseState,
  (state) => state.favoriteCourses
);
