import { createAction, props } from '@ngrx/store';
import { Path } from 'src/app/models/Path';

export const loadTrainersPaths = createAction(
  '[Trainers Paths] Load Paths',
  props<{ pageNo: number }>()
);
export const loadTrainersPathsSuccess = createAction(
  '[Trainers Paths] Load Paths Success',
  props<{ paths: Path[] }>()
);
export const loadTrainersPathsFailure = createAction(
  '[Trainers Paths] Load Paths Failure',
  props<{ error: string }>()
);
