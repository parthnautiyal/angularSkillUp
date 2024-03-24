import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BatchState } from '../reducer/batch.reducer';

export const selectBatchState = createFeatureSelector<BatchState>('batch');

export const selectBatchs = createSelector(
  selectBatchState,
  (state) => state.batches
);

export const selectBatchsLoading = createSelector(
  selectBatchState,
  (state) => state.isLoading
);

export const selectBatchsError = createSelector(
  selectBatchState,
  (state) => state.error
);
