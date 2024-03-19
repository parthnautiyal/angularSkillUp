import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BatchState } from '../reducer/batch.reducer';

export const selectBatchState = createFeatureSelector<BatchState>('batch');

export const selectBatchs = createSelector(
  selectBatchState,
  (state) => state.batch
);

export const selectBatchsLoading = createSelector(
  selectBatchState,
  (state) => state.loadingData
);

export const selectBatchsError = createSelector(
  selectBatchState,
  (state) => state.error
);
