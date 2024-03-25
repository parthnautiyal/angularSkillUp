import { createReducer, on } from '@ngrx/store';
import { Batch } from '../../models/Batch';
import * as BatchActions from '../action/batch.actions';
import { User } from 'src/app/models/User';
import { Course } from 'src/app/models/Course';

export interface BatchState {
  batches: Batch[];
  isLoadingBatches: boolean;
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
  isLoadingBatchById:boolean;
}

export const initialState: BatchState = {
  batches: [],
  isLoadingBatches: false,
  error: null,
  students: [],
  isLoadingTrainer: false,
  isLoadingStudents: false,
  isLoadingBatchById:false,
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
    isLoadingBatches: true,
    error: null,
  })),
  on(BatchActions.loadAllBatchesSuccess, (state, { batches }) => ({
    ...state,
    batches,
    isLoadingBatches: false,
    error: null,
  })),
  on(BatchActions.loadAllBatchesFailed, (state, { error }) => ({
    ...state,
    error,
    isLoadingBatches: false,
  })),
  on(BatchActions.loadBatchById, (state) => ({
    ...state,
    isLoadingBatchById: true,
  })),
  on(BatchActions.loadBatchByIdSuccess, (state, { batchDetails }) => ({
    ...state,
    isLoadingBatchById: false,
    batchDetails: batchDetails,
  })),
  on(BatchActions.loadBatchByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingBatchById: false,
    error,
  })),

  on(BatchActions.loadStudentsById, (state) => ({
    ...state,
    isLoadingStudents: true,
    error: null,
  })),

  on(BatchActions.loadStudentsByIdSuccess, (state, { students }) => ({
    ...state,
    students,
    isLoadingStudents: false,
    error: null,
  })),
  on(BatchActions.loadStudentsByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingStudents: false,
    error: error,
  })),
  on(BatchActions.loadTrainersById, (state) => ({
    ...state,
    isLoadingTrainer: true,
    error: null,
  })),

  on(BatchActions.loadTrainersByIdSuccess, (state, { trainers }) => ({
    ...state,
    trainers,
    isLoadingTrainer: false,
    error: null,
  })),
  on(BatchActions.loadTrainersByIdFailed, (state, { error }) => ({
    ...state,
    isLoadingTrainer: false,
    error: error,
  })),

  on(BatchActions.loadBatchPathsById, (state) => ({
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
    error: error,
  }))
);

// export const getbatch = (state: Batchestate) => state.batches;
// export const getbatchLoading = (state: Batchestate) => state.isLoadingBatches;
// export const getbatchError = (state: Batchestate) => state.error;
