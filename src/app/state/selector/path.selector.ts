import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AllPathsState,
  EnrolledPathsState,
  PathByIdState,
} from '../reducer/path.reducer';

// Selectors for All Paths
export const selectAllPathsState =
  createFeatureSelector<AllPathsState>('allPaths');

export const selectAllPaths = createSelector(
  selectAllPathsState,
  (state) => state.allPaths
);

export const selectAllPathsLoading = createSelector(
  selectAllPathsState,
  (state) => state.isLoading
);

export const selectAllPathsError = createSelector(
  selectAllPathsState,
  (state) => state.error
);

// Selectors for Path By ID
export const selectPathByIdState =
  createFeatureSelector<PathByIdState>('pathById');

export const selectPathById = createSelector(
  selectPathByIdState,
  (state) => state.pathById
);

export const selectPathByIdLoading = createSelector(
  selectPathByIdState,
  (state) => state.isLoading
);

export const selectPathByIdError = createSelector(
  selectPathByIdState,
  (state) => state.error
);

// Selectors for Enrolled Paths
export const selectEnrolledPathsState =
  createFeatureSelector<EnrolledPathsState>('enrolledPaths');

export const selectEnrolledPaths = createSelector(
  selectEnrolledPathsState,
  (state) => state.enrolledPaths
);
export const selectNoOfEnrolledPaths = createSelector(
  selectEnrolledPathsState,
  (state) => state.numberOfEnrolledPaths
);

export const selectEnrolledPathsLoading = createSelector(
  selectEnrolledPathsState,
  (state) => state.isLoading
);

export const selectEnrolledPathsError = createSelector(
  selectEnrolledPathsState,
  (state) => state.error
);
