import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CoursesState,
  publishCourseState,
} from '../reducer/trainerscourse.reducer';

const selectCoursesState =
  createFeatureSelector<CoursesState>('trainerCourses');

export const selectTrainersCourses = createSelector(
  selectCoursesState,
  (state) => state.courses
);

export const selectTrainersCoursesLoading = createSelector(
  selectCoursesState,
  (state) => state.loading
);

export const selectTrainersCoursesError = createSelector(
  selectCoursesState,
  (state) => state.error
);

const selecttrainersProfileCoursesState = createFeatureSelector<CoursesState>(
  'trainerProfileCourses'
);

export const selectTrainersProfileCourses = createSelector(
  selecttrainersProfileCoursesState,
  (state) => state.courses
);

export const selectTrainersCProfileCoursesLoading = createSelector(
  selecttrainersProfileCoursesState,
  (state) => state.loading
);

export const selectTrainersProfileCoursesError = createSelector(
  selecttrainersProfileCoursesState,
  (state) => state.error
);

const selectPublishCourseState =
  createFeatureSelector<publishCourseState>('publishCourse');

export const selectPublishCourse = createSelector(
  selectPublishCourseState,
  (state) => state.courseId
);

export const selectPublishCourseUpdateing = createSelector(
  selectPublishCourseState,
  (state) => state.updating
);

export const selectPublishCourseError = createSelector(
  selectPublishCourseState,
  (state) => state.error
);
