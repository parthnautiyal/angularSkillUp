import { createReducer, on } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import * as BatchActions from '../action/batch.action';

export interface BatchState {
  batch: Batch[];
  loadingData: boolean;
  error: any;
}

export const initialState: BatchState = {
  batch: [],
  loadingData: false,
  error: null,
};

export const batchReducer = createReducer(
  initialState,
  on(BatchActions.loadBatch, (state) => ({
    ...state,
    loadingData: true,
    error: null,
  })),
  on(BatchActions.batchLoaded, (state, { batch }) => ({
    ...state,
    batch,
    loadingData: false,
    error: null,
  })),
  on(BatchActions.batchLoadFailed, (state, { error }) => ({
    ...state,
    loadingData: false,
    error,
  }))
);

export const getbatch = (state: BatchState) => state.batch;
export const getbatchLoading = (state: BatchState) => state.loadingData;
export const getbatchError = (state: BatchState) => state.error;
