import { createReducer, on } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import * as BatchActions from '../action/batch.action';
import { User } from 'src/app/models/User';
import { Course } from 'src/app/models/Course';

export interface BatchState {
  batches: Batch[];
  isLoading: boolean;
  isLoadingTrainer: boolean;
  isLoadingStudents: boolean;
  isLoadingPaths: boolean;
  error: any;
  errorStudents: any;
  errorTrainer: any;
  errorPaths: any;
  students: User[];
  trainers: User[];
  batchDetails: Batch;
  pathData: Course;
}

export const initialState: BatchState = {
  batches: [],
  isLoading: false,
  error: null,
  students: [],
  isLoadingTrainer: false,
  isLoadingStudents: false,
  errorStudents: null,
  errorTrainer: null,
  trainers: [],
  batchDetails: {
    createdAt: '',
    createdBy: {
      email: '',
      id: 0,
      imageUrl: '',
      name: '',
      isActive: false,
    },
    endDate: '',
    startDate: '',
    id: 0,
    isAccessible: false,
    name: '',
    noOfPaths: 0,
    noOfStudents: 0,
    noOfTrainers: 0,
    streamName: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 0,
  },
  pathData: {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  },
  isLoadingPaths: false,
  errorPaths: undefined,
};

export const batchReducer = createReducer(
  initialState,
  on(BatchActions.loadAllBatches, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(BatchActions.loadAllBatchesSuccess, (state, { batches }) => ({
    ...state,
    batches,
    isLoading: false,
    error: null,
  })),
  on(BatchActions.loadAllBatchesFailed, (state, { error }) => ({
    ...state,
    isloading: false,
    error,
  })),
  on(BatchActions.loadBatchById, (state) => ({
    ...state,
    isloading: true,
  })),
  on(BatchActions.loadBatchByIdSuccess, (state, { batchDetails }) => ({
    ...state,
    isloading: false,
    batchDetails: batchDetails,
  })),
  on(BatchActions.loadBatchByIdFailed, (state, { error }) => ({
    ...state,
    isloading: false,
    error,
  })),

  on(BatchActions.loadStudentsById, (state) => ({
    ...state,
    isLoadingStudents: true,
    errorStudents: null,
  })),

  on(BatchActions.loadStudentsByIdSuccess, (state, { students }) => ({
    ...state,
    students,
    isLoadingStudents: false,
    errorStudents: null,
  })),
  on(BatchActions.loadStudentsByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingStudents: false,
    errorStudents: error,
  })),
  on(BatchActions.loadTrainersById, (state) => ({
    ...state,
    isLoadingTrainer: true,
    errorTrainer: null,
  })),

  on(BatchActions.loadTrainersByIdSuccess, (state, { trainers }) => ({
    ...state,
    trainers,
    isLoadingTrainer: false,
    errorTrainer: null,
  })),
  on(BatchActions.loadTrainersByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingTrainer: false,
    errorTrainer: error,
  })),

  on(BatchActions.loadBatchPathById, (state) => ({
    ...state,
    isLoadingPaths: true,
    error: null,
  })),

  on(BatchActions.loadBatchPathByIdSuccess, (state, { pathById }) => ({
    ...state,
    pathData: pathById,
    isLoadingPaths: false,
  })),
  on(BatchActions.loadBatchPathByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingPaths: false,
    errorPaths: error,
  }))
);

export const getbatch = (state: BatchState) => state.batches;
export const getbatchLoading = (state: BatchState) => state.isLoading;
export const getbatchError = (state: BatchState) => state.error;
