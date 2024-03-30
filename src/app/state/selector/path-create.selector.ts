import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { CreatePathState } from '../reducer/path-create.reducer';
export const selectPathCreateState =
  createFeatureSelector<CreatePathState>('pathCreate');

export const selectPathCreateCourses = createSelector(
  selectPathCreateState,
  (state) => state.selectedCourses
);

export const selectPathCreateCollaborators = createSelector(
  selectPathCreateState,
  (state) => state.selectedCollaborators
);
