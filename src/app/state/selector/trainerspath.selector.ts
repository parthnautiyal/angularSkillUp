import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TrainersPathsState } from '../reducer/trainerspath.reducer';

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
