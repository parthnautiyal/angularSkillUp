import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as BatchActions from '../action/batch.actions';
import { batchReducer, getbatch, getbatchError, getbatchLoading, initialState } from './batch.reducer';

describe('Batch Reducer', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

  });

  // Test cases for loadAllBatches
  it('should set isLoading to true when loadAllBatches action is dispatched', () => {
    const action = BatchActions.loadAllBatches();
    const state = batchReducer(initialState, action);

    expect(state.isLoadingBatches).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should update state when loadAllBatchesSuccess action is dispatched', () => {
    const batches = [{
      createdAt: '2024-03-24T13:00:03Z',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
        isActive: true,
      },
      endDate: '2024-06-24T13:00:03Z',
      startDate: '2024-03-24T13:00:03Z',
      id: 1,
      isAccessible: true,
      name: 'Batch 1',
      noOfPaths: 10,
      noOfStudents: 30,
      noOfTrainers: 5,
      streamName: 'Stream 1',
      stream: {
        streamId: 1,
        streamName: 'Stream 1',
      },
      progress: 50,
    }];

    const action = BatchActions.loadAllBatchesSuccess({ batches });
    const state = batchReducer(initialState, action);

    expect(state.batches).toEqual(batches);
    expect(state.isLoadingBatches).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should update state when loadAllBatchesFailed action is dispatched', () => {
    const error = new Error('Error loading batches');
    const action = BatchActions.loadAllBatchesFailed({ error });
    const state = batchReducer(initialState, action);

    expect(state.isLoadingBatches).toBe(false);
    expect(state.error).toEqual(error);
  });

  // Test cases for loadBatchById
  it('should set isLoading to true when loadBatchById action is dispatched', () => {
    const action = BatchActions.loadBatchById({id: '2'});
    const state = batchReducer(initialState, action);

    expect(state.isLoadingBatches).toBe(true);
  });

  it('should update state when loadBatchByIdSuccess action is dispatched', () => {
    const batchDetails = {
      createdAt: '2024-03-24T13:00:03Z',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
        isActive: true,
      },
      endDate: '2024-06-24T13:00:03Z',
      startDate: '2024-03-24T13:00:03Z',
      id: 1,
      isAccessible: true,
      name: 'Batch 1',
      noOfPaths: 10,
      noOfStudents: 30,
      noOfTrainers: 5,
      streamName: 'Stream 1',
      stream: {
        streamId: 1,
        streamName: 'Stream 1',
      },
      progress: 50,
    };
    const action = BatchActions.loadBatchByIdSuccess({ batchDetails });
    const state = batchReducer(initialState, action);

    expect(state.batchDetails).toEqual(batchDetails);
    expect(state.isLoadingBatches).toBe(false);
  });

  it('should update state when loadBatchByIdFailed action is dispatched', () => {
    const error = new Error('Error loading batch details');
    const action = BatchActions.loadBatchByIdFailed({ error });
    const state = batchReducer(initialState, action);

    expect(state.isLoadingBatches).toBe(false);
    expect(state.error).toEqual(error);
  });

  // Test cases for loadStudentsById
it('should set isLoadingStudents to true when loadStudentsById action is dispatched', () => {
  const action = BatchActions.loadStudentsById({id: '3'});
  const state = batchReducer(initialState, action);

  expect(state.isLoadingStudents).toBe(true);
  expect(state.errorStudents).toBe(null);
});

it('should update state when loadStudentsByIdSuccess action is dispatched', () => {
  const students = [{
    email: 'john.doe@example.com',
    id: 1,
    imageUrl: 'https://example.com/john-doe.jpg',
    name: 'John Doe',
    isActive: true,
  }];
  const action = BatchActions.loadStudentsByIdSuccess({ students });
  const state = batchReducer(initialState, action);

  expect(state.students).toEqual(students);
  expect(state.isLoadingStudents).toBe(false);
  expect(state.errorStudents).toBe(null);
});

it('should update state when loadStudentsByIdFailed action is dispatched', () => {
  const error = new Error('Error loading students');
  const action = BatchActions.loadStudentsByIdFailed({ error });
  const state = batchReducer(initialState, action);

  expect(state.isLoadingStudents).toBe(false);
  expect(state.errorStudents).toEqual(error);
});

// Test cases for loadTrainersById
it('should set isLoadingTrainer to true when loadTrainersById action is dispatched', () => {
  const action = BatchActions.loadTrainersById({id: '3'});
  const state = batchReducer(initialState, action);

  expect(state.isLoadingTrainer).toBe(true);
  expect(state.errorTrainer).toBe(null);
});

it('should update state when loadTrainersByIdSuccess action is dispatched', () => {
  const trainers = [{
    email: 'john.doe@example.com',
    id: 1,
    imageUrl: 'https://example.com/john-doe.jpg',
    name: 'John Doe',
    isActive: true,
  }];
  const action = BatchActions.loadTrainersByIdSuccess({ trainers });
  const state = batchReducer(initialState, action);

  expect(state.trainers).toEqual(trainers);
  expect(state.isLoadingTrainer).toBe(false);
  expect(state.errorTrainer).toBe(null);
});

it('should update state when loadTrainersByIdFailed action is dispatched', () => {
  const error = new Error('Error loading trainers');
  const action = BatchActions.loadTrainersByIdFailed({ error });
  const state = batchReducer(initialState, action);

  expect(state.isLoadingTrainer).toBe(false);
  expect(state.errorTrainer).toEqual(error);
});

// Test cases for loadBatchPathById
it('should set isLoadingPaths to true when loadBatchPathById action is dispatched', () => {
  const action = BatchActions.loadBatchPathById({id: '2'});
  const state = batchReducer(initialState, action);

  expect(state.isLoadingPaths).toBe(true);
  expect(state.error).toBe(null);
});

it('should update state when loadBatchPathByIdSuccess action is dispatched', () => {
  const pathById = {
    id: 1,
    name: 'Path 1',
    courseName: 'Course 1',
    imageUrl: 'https://example.com/path-1.jpg',
    isAccessible: true,
    description: 'Description for Path 1',
    about: 'About Path 1',
    createdBy: {
      id: 1,
      name: 'John Doe',
      imageUrl: 'https://example.com/john-doe.jpg',
      email: 'john.doe@example.com',
    },
    createdAt: '2024-03-24T13:00:03Z',
    isFavourite: false,
    progress: 50,
    enrolledAt: '2024-03-24T13:00:03Z',
    completedAt: '2024-06-24T13:00:03Z',
    noOfChapters: 10,
    updatedAt: '2024-06-24T13:00:03Z',
    level: 1,
  };
  const action = BatchActions.loadBatchPathByIdSuccess({ pathById });
  const state = batchReducer(initialState, action);

  expect(state.pathData).toEqual(pathById);
  expect(state.isLoadingPaths).toBe(false);
});

it('should update state when loadBatchPathByIdFailed action is dispatched', () => {
  const error = new Error('Error loading batch path');
  const action = BatchActions.loadBatchPathByIdFailed({ error });
  const state = batchReducer(initialState, action);

  expect(state.isLoadingPaths).toBe(false);
  expect(state.errorPaths).toEqual(error);
});

describe('BatchState selectors', () => {
  let state : any;

  beforeEach(() => {
    state = {
      batches: [{
        createdAt: '2024-03-24T13:00:03Z',
        createdBy: {
          id: 1,
          name: 'John Doe',
          imageUrl: 'https://example.com/john-doe.jpg',
          email: 'john.doe@example.com',
          isActive: true,
        },
        endDate: '2024-06-24T13:00:03Z',
        startDate: '2024-03-24T13:00:03Z',
        id: 1,
        isAccessible: true,
        name: 'Batch 1',
        noOfPaths: 10,
        noOfStudents: 30,
        noOfTrainers: 5,
        streamName: 'Stream 1',
        stream: {
          streamId: 1,
          streamName: 'Stream 1',
        },
        progress: 50,
      }],
      isLoadingBatches: false,
      isLoadingTrainer: false,
      isLoadingStudents: false,
      isLoadingPaths: false,
      error: null,
      errorStudents: null,
      errorTrainer: null,
      errorPaths: null,
      students: [{
        email: 'john.doe@example.com',
        id: 1,
        imageUrl: 'https://example.com/john-doe.jpg',
        name: 'John Doe',
        isActive: true,
      }],
      trainers: [{
        email: 'john.doe@example.com',
        id: 1,
        imageUrl: 'https://example.com/john-doe.jpg',
        name: 'John Doe',
        isActive: true,
      }],
      batchDetails: {
        createdAt: '2024-03-24T13:00:03Z',
        createdBy: {
          id: 1,
          name: 'John Doe',
          imageUrl: 'https://example.com/john-doe.jpg',
          email: 'john.doe@example.com',
          isActive: true,
        },
        endDate: '2024-06-24T13:00:03Z',
        startDate: '2024-03-24T13:00:03Z',
        id: 1,
        isAccessible: true,
        name: 'Batch 1',
        noOfPaths: 10,
        noOfStudents: 30,
        noOfTrainers: 5,
        streamName: 'Stream 1',
        stream: {
          streamId: 1,
          streamName: 'Stream 1',
        },
        progress: 50,
      },
      pathData: {
        id: 1,
        name: "Introduction to TypeScript",
        courseName: "Intro to TS",
        imageUrl: "http://example.com/course.jpg",
        isAccessible: true,
        description: "This is a beginner's course on TypeScript.",
        about: "In this course, you will learn the basics of TypeScript.",
        createdBy: {
          id: 101,
          name: "John Doe",
          imageUrl: "http://example.com/john.jpg",
          email: "john@example.com"
        },
        createdAt: "2024-03-24T13:46:46.000Z",
        isFavourite: false,
        progress: 0,
        enrolledAt: "2024-03-24T13:46:46.000Z",
        completedAt: "",
        noOfChapters: 10,
        updatedAt: "2024-03-24T13:46:46.000Z",
        level: 1
      }
    };
  });

  it('getbatch should return batches', () => {
    expect(getbatch(state)).toEqual([{
      createdAt: '2024-03-24T13:00:03Z',
      createdBy: {
        id: 1,
        name: 'John Doe',
        imageUrl: 'https://example.com/john-doe.jpg',
        email: 'john.doe@example.com',
        isActive: true,
      },
      endDate: '2024-06-24T13:00:03Z',
      startDate: '2024-03-24T13:00:03Z',
      id: 1,
      isAccessible: true,
      name: 'Batch 1',
      noOfPaths: 10,
      noOfStudents: 30,
      noOfTrainers: 5,
      streamName: 'Stream 1',
      stream: {
        streamId: 1,
        streamName: 'Stream 1',
      },
      progress: 50,
    }]);
  });

  it('getbatchLoading should return loading state', () => {
    expect(getbatchLoading(state)).toEqual(false);
  });

  it('getbatchError should return error state', () => {
    expect(getbatchError(state)).toEqual(null);
  });
});

});

