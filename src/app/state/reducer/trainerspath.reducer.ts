import { createReducer, on } from '@ngrx/store';
import { Path } from 'src/app/models/Path';

import * as TrainerPathActions from '../action/trainerspath.actions';

export interface TrainersPathsState {
  paths: Path[];
  loading: boolean;
  error: any;
}

export interface TrainersProfilePathsState {
  paths: Path[];
  loading: boolean;
  error: any;
}
export const initialState: TrainersPathsState = {
  paths: [],
  loading: true,
  error: null,
};
export const initialPathState: TrainersProfilePathsState = {
  paths: [],
  loading: true,
  error: null,
};

export const TrainerpathsReducer = createReducer(
  initialState,
  on(TrainerPathActions.loadTrainersPaths, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainerPathActions.loadTrainersPathsSuccess, (state, { paths }) => ({
    ...state,
    paths,
    loading: false,
    error: null,
  })),
  on(TrainerPathActions.loadTrainersPathsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const TrainerProfilepathsReducer = createReducer(
  initialPathState,
  on(TrainerPathActions.loadTrainersProfilePaths, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    TrainerPathActions.loadTrainersProfilePathsSuccess,
    (state, { paths }) => ({
      ...state,
      paths,
      loading: false,
      error: null,
    })
  ),
  on(
    TrainerPathActions.loadTrainersProfilePathsFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
