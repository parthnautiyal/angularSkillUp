import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UploadState } from '../reducer/ImageUpload.reducer';

const selectUploadState = createFeatureSelector<UploadState>('upload');

export const selectUploading = createSelector(
  selectUploadState,
  (state: UploadState) => state.uploading
);

export const selectUploaded = createSelector(
  selectUploadState,
  (state: UploadState) => state.uploaded
);

export const selectImageUrl = createSelector(
  selectUploadState,
  (state: UploadState) => state.imageUrl
);

export const selectUploadError = createSelector(
  selectUploadState,
  (state: UploadState) => state.error
);
