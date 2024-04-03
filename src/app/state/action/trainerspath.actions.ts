import { createAction, props } from '@ngrx/store';
import { Path, PathData } from 'src/app/models/Path';
import { TrainerPathData } from 'src/app/models/TrainerPathData';

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

export const loadTrainersProfilePaths = createAction(
  '[Trainers Profile Paths] Load Profile Paths'
);
export const loadTrainersProfilePathsSuccess = createAction(
  '[Trainers Profile Paths] Load Profile Paths Success',
  props<{ paths: Path[] }>()
);
export const loadTrainersProfilePathsFailure = createAction(
  '[Trainers Profile Paths] Load Profile Paths Failure',
  props<{ error: string }>()
);

export const loadTrainerPathData = createAction(
  '[Trainers Path Data] Load Trainers Path Data',
  props<{ id: number }>()
);
export const loadTrainerPathDataSuccess = createAction(
  '[Trainers Path Data] Load Trainers Path Data Success',
  props<{ paths: TrainerPathData }>()
);
export const loadTrainerPathDataFailure = createAction(
  '[Trainers Path Data] Load Trainers Path Data Failure',
  props<{ error: string }>()
);
