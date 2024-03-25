import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BatchState } from '../reducer/batch.reducer';
import { state } from '@angular/animations';

export const selectBatchState = createFeatureSelector<BatchState>('batch');

export const selectBatches = createSelector(
  selectBatchState,
  (state) => state.batches
);

export const selectBatchesLoading = createSelector(
  selectBatchState,
  (state) => state.isLoadingBatches
);

export const selectBatchesError = createSelector(
  selectBatchState,
  (state) => state.error
);

export const selectBatchById = createSelector(
  selectBatchState,
  (state) => state.batchDetails
);
export const selectBatchesLoadingById = createSelector(
  selectBatchState,
  (state) => state.isLoadingBatchById
);
export const selectTrainers = createSelector(
  selectBatchState,
  (state) => state.trainers
);
export const selectTrainersLoading = createSelector(
  selectBatchState,
  (state) => state.isLoadingTrainer
 );
export const selectStudents = createSelector(
  selectBatchState,
  (state) => state.students
);
export const selectStudentsLoading = createSelector(
  selectBatchState,
  (state) => state.isLoadingStudents
);
export const selectBatchPaths = createSelector(
  selectBatchState,
  (state) => state.pathData
);
export const selectBatchPathsLoading = createSelector(
  selectBatchState,
  (state) => state.isLoadingPaths
);
