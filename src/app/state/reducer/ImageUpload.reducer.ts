import { createReducer, on } from '@ngrx/store';
import * as UploadActions from '../action/imageUpload.actions';
export interface UploadState {
  uploading: boolean;
  uploaded: boolean;
  error: string | null;
  imageUrl: string;
}

export const initialState: UploadState = {
  uploading: false,
  uploaded: false,
  error: null,
  imageUrl: '',
};

export const uploadReducer = createReducer(
  initialState,
  on(UploadActions.uploadImage, (state) => ({
    ...state,
    uploading: true,
    uploaded: false,
    error: null,
  })),
  on(UploadActions.uploadImageSuccess, (state, { imageUrl }) => ({
    ...state,
    uploading: false,
    uploaded: true,
    imageUrl,
    error: null,
  })),
  on(UploadActions.uploadImageFailure, (state, { error }) => ({
    ...state,
    uploading: false,
    uploaded: false,
    error,
    imageUrl: '',
  })),
  on(UploadActions.resetUploadState, () => initialState)
);
