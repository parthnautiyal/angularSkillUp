import { createReducer, on } from '@ngrx/store';
import * as PathActions from '../action/path.action';
import { Path, PathData } from '../../models/Path';

export interface PathState {
  allPaths: Path[];
  pathById: PathData;
  enrolledPaths: Path[];
  numberOfEnrolledPaths: number;
  error: any | null;
  errorEnrolled: any | null;
  isLoading: boolean;
  isLoadingPathById: boolean,
}

export const initialPathState: PathState = {
  allPaths: [],
  pathById: {
    id: 0,
    name: '',
    imageUrl: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    updatedAt: '',
    noOfCourses: 0,
    isEnrolled: false,
    isCompleted: false,
    createdAt: '',
    courses: [],
  },
  enrolledPaths: [],
  numberOfEnrolledPaths: 0,
  error: null,
  errorEnrolled: null,
  isLoading: false,
  isLoadingPathById: false,
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
    isLoading: false,
    error: null,
  })),

  on(PathActions.loadAllPathsFailed, (state, { error }) => ({
    ...state,
    allPaths: [],
    isLoading: false,
    error,
  })),
  // on(PathActions.loadPathByIdPaths, (state, { id }) => ({
  //   ...state,
  //   isLoadingPathById: true,
  //   error: null,
  // })),

  // on(PathActions.loadPathByIdSuccess, (state, { pathById }) => ({
  //   ...state,
  //   pathById: pathById,
  //   isLoadingPathById: false,
  //   error: null,
  // })),

  // on(PathActions.loadPathByIdFailed, (state, { error }) => ({
  //   ...state,
  //   pathById: {
  //     id: 0,
  //     name: '',
  //     imageUrl: '',
  //     about: '',
  //     createdBy: {
  //       id: 0,
  //       name: '',
  //       imageUrl: '',
  //       email: ''
  //     },
  //     updatedAt: '',
  //     noOfCourses: 0,
  //     isEnrolled: false,
  //     isCompleted: false,
  //     createdAt: '',
  //     courses: []
  //   },
  //   isLoadingPathById: false,
  //   error,
  // })),

  on(PathActions.loadEnrolledPaths, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(PathActions.loadEnrolledPathsSuccess, (state, { enrolledPaths }) => ({
    ...state,
    enrolledPaths,
    isLoading: false,
    error: null,
  })),

  on(PathActions.loadEnrolledPathsFailed, (state, { error }) => ({
    ...state,
    enrolledPaths: [],
    errorEnrolled: error,
    isLoading: false,
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
    numberOfEnrolledPaths: 0,
    error,
  }))
);
