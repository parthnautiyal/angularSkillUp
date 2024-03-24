import { createReducer, on } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import * as BatchActions from '../action/batch.action';

export interface BatchState {
  batches: Batch[];
  isLoading: boolean;
  error: any;
}

export const initialState: BatchState = {
  batches: [],
  isLoading: false,
  error: null,
};

export const batchReducer = createReducer(
  initialState,
  on(BatchActions.loadAllBatches, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadAllBatchesSuccess, (state, { batches }) => ({
    ...state,
    batches,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadAllBatchesFailed, (state, { error }) => ({
    ...state,
    isloading: false,
    error,
  }))
);

export const getbatch = (state: BatchState) => state.batches;
export const getbatchLoading = (state: BatchState) => state.isLoading;
export const getbatchError = (state: BatchState) => state.error;
