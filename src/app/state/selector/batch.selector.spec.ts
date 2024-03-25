import { Course } from 'src/app/models/Course';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromBatch from './batch.selector';
import { BatchState } from '../reducer/batch.reducer';
import { TestBed } from '@angular/core/testing';

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
    const result = fromBatch.selectBatchs.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the loading state', () => {
    const result = fromBatch.selectBatchsLoading.projector(initialState);
    expect(result).toEqual(false);
  });

  it('should select the error', () => {
    const result = fromBatch.selectBatchsError.projector(initialState);
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
});
