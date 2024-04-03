import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TrainerCourseChaptersState, TrainerCourseDataState, TrainerCourseRatingState } from "../reducer/trainer-course-data.reducer";

export const selectTrainerCourseDataState = createFeatureSelector<TrainerCourseDataState>('trainerCourseData');

export const selectTrainerCourseData = createSelector(
  selectTrainerCourseDataState,
  (state) => state.courseData
);

export const selectTrainerCourseDataLoading = createSelector(
  selectTrainerCourseDataState,
  (state) => state.loading
);

export const selectTrainerCourseDataError = createSelector(
  selectTrainerCourseDataState,
  (state) => state.error
);

export const selectTrainerCourseChaptersState = createFeatureSelector<TrainerCourseChaptersState>('trainerCourseChapters');

export const selectTrainerCourseChapters = createSelector(
  selectTrainerCourseChaptersState,
  (state) => state.courseChapters
);

export const selectTrainerCourseChaptersLoading = createSelector(
  selectTrainerCourseChaptersState,
  (state) => state.loading
);

export const selectTrainerCourseChaptersError = createSelector(
  selectTrainerCourseChaptersState,
  (state) => state.error
);

export const selectTrainerCourseRatingState = createFeatureSelector<TrainerCourseRatingState>('trainerCourseRating');

export const selectTrainerCourseRating = createSelector(
  selectTrainerCourseRatingState,
  (state) => state.courseRating
);

export const selectTrainerCourseRatingLoading = createSelector(
  selectTrainerCourseRatingState,
  (state) => state.loading
);

export const selectTrainerCourseRatingError = createSelector(
  selectTrainerCourseRatingState,
  (state) => state.error
);