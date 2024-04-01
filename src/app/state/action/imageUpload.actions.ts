import { createAction, props } from '@ngrx/store';

export const uploadImage = createAction(
  '[Upload] Upload Image',
  props<{ file: File }>()
);
export const uploadImageSuccess = createAction(
  '[Upload] Upload Image Success',
  props<{ imageUrl: string }>()
);
export const uploadImageFailure = createAction(
  '[Upload] Upload Image Failure',
  props<{ error: string }>()
);
export const resetUploadState = createAction('[Upload] Reset Upload State');
