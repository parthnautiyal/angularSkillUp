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
