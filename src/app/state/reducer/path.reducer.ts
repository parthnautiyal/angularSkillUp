import { createReducer, on } from '@ngrx/store';
import * as PathActions from '../action/path.action';
import { Path } from '../../models/Path';

export interface PathState {
  allPaths: Path[];
  pathById: Path | null;
  enrolledPaths: Path[];
  numberOfEnrolledPaths: number | null;
  error: any | null;
  isLoading: boolean;
}

export const initialPathState: PathState = {
  allPaths: [],
  pathById: null,
  enrolledPaths: [],
  numberOfEnrolledPaths: null,
  error: null,
  isLoading: false,
};

export const pathReducer = createReducer(
  initialPathState,
  on(PathActions.loadAllPaths, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(PathActions.loadAllPathsSuccess, (state, { paths }) => ({
    ...state,
    allPaths: paths,
    error: null,
  })),

  on(PathActions.loadAllPathsFailed, (state, { error }) => ({
    ...state,
    allPaths: [],
    error,
  })),

  on(PathActions.loadPathByIdSuccess, (state, { path }) => ({
    ...state,
    pathById: path,
    error: null,
  })),

  on(PathActions.loadPathByIdFailed, (state, { error }) => ({
    ...state,
    pathById: null,
    error,
  })),

  on(PathActions.loadEnrolledPathsSuccess, (state, { enrolledPaths }) => ({
    ...state,
    enrolledPaths,
    error: null,
  })),

  on(PathActions.loadEnrolledPathsFailed, (state, { error }) => ({
    ...state,
    enrolledPaths: [],
    error,
  })),

  on(
    PathActions.loadNumberOfEnrolledPathsSuccess,
    (state, { numberOfEnrolledPaths }) => ({
      ...state,
      numberOfEnrolledPaths,
      error: null,
    })
  ),

  on(PathActions.loadNumberOfEnrolledPathsFailed, (state, { error }) => ({
    ...state,
    numberOfEnrolledPaths: null,
    error,
  }))
);
