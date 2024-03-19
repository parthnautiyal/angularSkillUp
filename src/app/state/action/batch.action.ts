import { createAction, props } from '@ngrx/store';
import { Batch } from '../../models/Batch';

export const loadBatch = createAction('[Batch] Load Batch');
export const batchLoaded = createAction(
  '[Batch] Batch Loaded',
  props<{ batch: Batch[] }>()
);
export const batchLoadFailed = createAction(
  '[batch] batch Load Failed',
  props<{ error: any }>()
);
export function loadBatchsSuccess(arg0: { Batch: Object }): any {
  throw new Error('Function not implemented.');
}

export function loadBatchsFailure(arg0: { error: any }): any {
  throw new Error('Function not implemented.');
}
