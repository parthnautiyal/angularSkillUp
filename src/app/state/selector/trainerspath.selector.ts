import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TrainersPathsState,
  TrainersProfilePathsState,
} from '../reducer/trainerspath.reducer';

const selectPathsState =
  createFeatureSelector<TrainersPathsState>('trainerPaths');

export const selectTrainersPaths = createSelector(
  selectPathsState,
  (state) => state.paths
);

export const selectTrainersPathsLoading = createSelector(
  selectPathsState,
  (state) => state.loading
);

export const selectTrainersPathsError = createSelector(
  selectPathsState,
  (state) => state.error
);
const selectProfilePathsState =
  createFeatureSelector<TrainersProfilePathsState>('trainerProfilePaths');

export const selectTrainersProfilePaths = createSelector(
  selectProfilePathsState,
  (state) => state.paths
);

export const selectTrainersProfilePathsLoading = createSelector(
  selectProfilePathsState,
  (state) => state.loading
);

export const selectTrainersProfilePathsError = createSelector(
  selectProfilePathsState,
  (state) => state.error
);
