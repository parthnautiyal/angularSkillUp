import * as fromPath from './path.selector';
import { PathState } from '../reducer/path.reducer';

describe('Path Selectors', () => {
  const initialState: PathState = {
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
  };

  it('should select all paths', () => {
    const result = fromPath.selectPaths.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the loading state', () => {
    const result = fromPath.selectPathsLoading.projector(initialState);
    expect(result).toEqual(false);
  });

  it('should select the error', () => {
    const result = fromPath.selectPathsError.projector(initialState);
    expect(result).toBeNull();
  });

  it('should select the enrolled paths', () => {
    const result = fromPath.selectEnrolledPaths.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the number of enrolled paths', () => {
    const result = fromPath.selectNoOfEnrolledPaths.projector(initialState);
    expect(result).toEqual(0);
  });

  it('should select the error for enrolled paths', () => {
    const result = fromPath.selectEnrolledPathsError.projector(initialState);
    expect(result).toBeNull();
  });

  it('should select the path by id', () => {
    const result = fromPath.selectPathById.projector(initialState);
    expect(result).toBe(initialState.pathById);
  });
});
