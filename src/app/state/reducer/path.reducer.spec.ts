import { TestBed } from '@angular/core/testing';
import { pathReducer, initialPathState } from './path.reducer';
import * as PathActions from '../action/path.actions';

describe('PathReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = pathReducer(undefined, action);

    expect(state).toBe(initialPathState);
  });

  it('should handle loadAllPaths action', () => {
    const action = PathActions.loadAllPaths();
    const state = pathReducer(initialPathState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle loadAllPathsSuccess action', () => {
    const paths = [{
      id: 1,
      name: "Sample Path",
      pathName: "sample_path",
      imageUrl: "https://example.com/sample_image.jpg",
      isAccessible: true,
      noOfCourses: 5,
      progress: 0,
      completedAt: null,
    }];
    const action = PathActions.loadAllPathsSuccess({ paths });
    const state = pathReducer(initialPathState, action);

    expect(state.allPaths).toEqual(paths);
    expect(state.isLoading).toBeFalse();
    expect(state.error).toBeNull();
  });

  it('should handle loadAllPathsFailed action', () => {
    const error = 'Failed to load paths';
    const action = PathActions.loadAllPathsFailed({ error });
    const state = pathReducer(initialPathState, action);

    expect(state.allPaths).toEqual([]);
    expect(state.isLoading).toBeFalse();
    expect(state.error).toEqual(error);
  });

  it('should handle loadPathById action', () => {
    const action = PathActions.loadPathById({ id: '1' });
    const state = pathReducer(initialPathState, action);

    expect(state.isLoading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('should handle loadPathByIdSuccess action', () => {
    const pathById = {
      id: 1,
      name: "Sample Path",
      imageUrl: "https://example.com/sample_image.jpg",
      about: "This is a sample path about text.",
      createdBy: {
        id: 1,
        name: "John Doe",
        imageUrl: "https://example.com/user_image.jpg",
        email: "john@example.com",
      },
      updatedAt: "2024-03-24T12:00:00Z",
      noOfCourses: 5,
      isEnrolled: true,
      isCompleted: false,
      createdAt: "2024-03-20T08:00:00Z",
      courses: [
        {
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
      ],
    };
    const action = PathActions.loadPathByIdSuccess({ pathById });
    const state = pathReducer(initialPathState, action);

    expect(state.pathById).toEqual(pathById);
    expect(state.error).toBeNull();
  });

  it('should handle loadPathByIdFailed action', () => {
    const error = 'Failed to load path by ID';
    const action = PathActions.loadPathByIdFailed({ error });
    const state = pathReducer(initialPathState, action);

    expect(state.error).toEqual(error);
  });

  it('should handle loadEnrolledPaths action', () => {
    const action = PathActions.loadEnrolledPaths();
    const state = pathReducer(initialPathState, action);

    expect(state.isLoading).toBeTrue();
    expect(state.error).toBeNull();
  });

  it('should handle loadEnrolledPathsSuccess action', () => {
    const enrolledPaths = [{
      id: 1,
      name: "Sample Path",
      pathName: "sample_path",
      imageUrl: "https://example.com/sample_image.jpg",
      isAccessible: true,
      noOfCourses: 5,
      progress: 0,
      completedAt: null,
    }];
    const action = PathActions.loadEnrolledPathsSuccess({ enrolledPaths });
    const state = pathReducer(initialPathState, action);

    expect(state.enrolledPaths).toEqual(enrolledPaths);
    expect(state.isLoading).toBeFalse();
    expect(state.error).toBeNull();
  });

  it('should handle loadEnrolledPathsFailed action', () => {
    const error = 'Failed to load enrolled paths';
    const action = PathActions.loadEnrolledPathsFailed({ error });
    const state = pathReducer(initialPathState, action);

    expect(state.enrolledPaths).toEqual([]);
    expect(state.errorEnrolled).toEqual(error);
    expect(state.isLoading).toBeFalse();
  });

  it('should handle loadNumberOfEnrolledPathsSuccess action', () => {
    const numberOfEnrolledPaths = 2;
    const action = PathActions.loadNumberOfEnrolledPathsSuccess({ numberOfEnrolledPaths });
    const state = pathReducer(initialPathState, action);

    expect(state.numberOfEnrolledPaths).toEqual(numberOfEnrolledPaths);
    expect(state.error).toBeNull();
  });

  it('should handle loadNumberOfEnrolledPathsFailed action', () => {
    const error = 'Failed to load number of enrolled paths';
    const action = PathActions.loadNumberOfEnrolledPathsFailed({ error });
    const state = pathReducer(initialPathState, action);

    expect(state.numberOfEnrolledPaths).toEqual(0);
    expect(state.error).toEqual(error);
  });
});
