import { Course } from 'src/app/models/Course';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromBatch from './batch.selector';
import { BatchState } from '../reducer/batch.reducer';
import { TestBed } from '@angular/core/testing';
import { initTestScheduler } from 'jasmine-marbles';

fdescribe('Batch Selectors', () => {
  let store: MockStore;
  const initialState: BatchState = {
    batches: [],
    isLoadingBatches: false,
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
    isLoadingBatchById: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.inject(MockStore);
  });

  it('should select the list of batches', () => {
    const result = fromBatch.selectBatches.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the loading state', () => {
    const result = fromBatch.selectBatchesLoading.projector(initialState);
    expect(result).toBe(false);
  });

  it('should select the error', () => {
    const result = fromBatch.selectBatchesError.projector(initialState);
    expect(result).toBe(null);
  });

  it('should select the batch details', () => {
    const result = fromBatch.selectBatchById.projector(initialState);
    expect(result).toBe(initialState.batchDetails);
  });

  it('should select the list of trainers', () => {
    const result = fromBatch.selectTrainers.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the list of students', () => {
    const result = fromBatch.selectStudents.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the path data', () => {
    const result = fromBatch.selectBatchPaths.projector(initialState);
    expect(result).toBe(initialState.pathData);
  });

  it('should select isLoadingPaths', () => {
    const result = fromBatch.selectBatchPathsLoading.projector(initialState);
    expect(result).toBe(initialState.isLoadingPaths);
  })

  it('should select isLoadingStudents', () => {
    const result = fromBatch.selectStudentsLoading.projector(initialState);
    expect(result).toBe(initialState.isLoadingStudents);
  })

  it('should select isLoadingTrainer', () => {
    const result = fromBatch.selectTrainersLoading.projector(initialState);
    expect(result).toBe(initialState.isLoadingTrainer);
  })

  it('should select isLoadingBatchById', () => {
    const result = fromBatch.selectBatchesLoadingById.projector(initialState);
    expect(result).toBe(initialState.isLoadingBatchById);
  })
});
