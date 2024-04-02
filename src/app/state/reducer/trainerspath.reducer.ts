import { createReducer, on } from '@ngrx/store';
import { Path } from 'src/app/models/Path';

import * as TrainerPathActions from '../action/trainerspath.actions';
import { TrainerPathData } from 'src/app/models/TrainerPathData';

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
export interface TrainerPathDataState {
  paths: TrainerPathData;
  loading: boolean;
  error: any;
}
export const initialTrainerPathDataState: TrainerPathDataState = {
  paths: {
    pathId: 0,
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    isOwner: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    updatedAt: '',
    collaborators: [],
    courses: [],
    courseIds: [],
  },
  loading: true,
  error: null,
};
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

export const TrainerPathDataReducer = createReducer(
  initialTrainerPathDataState,
  on(TrainerPathActions.loadTrainerPathData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainerPathActions.loadTrainerPathDataSuccess, (state, { paths }) => ({
    ...state,
    paths,
    loading: false,
    error: null,
  })),
  on(TrainerPathActions.loadTrainerPathDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
