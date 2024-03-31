import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../reducer/trainerscourse.reducer';

const selectCoursesState =
  createFeatureSelector<CoursesState>('trainerCourses');

export const selectTrainersCourses = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.courses
);

export const selectTrainersCoursesLoading = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.loading
);

export const selectTrainersCoursesError = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.error
);
