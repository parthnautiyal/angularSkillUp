import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PathState } from '../reducer/path.reducer';

export const selectPathState = createFeatureSelector<PathState>('path');

export const selectPaths = createSelector(
  selectPathState,
  (state) => state.allPaths
);

export const selectPathsLoading = createSelector(
  selectPathState,
  (state) => state.isLoading
);

export const selectPathsError = createSelector(
  selectPathState,
  (state) => state.error
);

export const selectEnrolledPaths = createSelector(
  selectPathState,
  (state) => state.enrolledPaths
);

export const selectNoOfEnrolledPaths = createSelector(
  selectPathState,
  (state) => state.numberOfEnrolledPaths
);

export const selectEnrolledPathsError = createSelector(
  selectPathState,
  (state) => state.errorEnrolled
);

export const selectPathById = createSelector(
  selectPathState,
  (state) => state.pathById
);

export const selectPathByIdLoading = createSelector(
  selectPathState,
  (state) => state.isLoadingPathById
);