import * as fromCourse from './course.selector';
import { CourseState } from '../reducer/course.reducer';

fdescribe('Course Selectors', () => {
  const initialState: CourseState = {
    allCourses: [],
    enrolledCourses: [],
    courseAboutInfo: {
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
    chapterData: [],
    noOfEnrolledCourses: 0,
    isLoading: false,
    error: null,
    errorEnrolled: null,
    favoriteCourses: [],
    isLoadingFavourite: false,
    isLoadingChapterData: false,
    isLoadingAboutInfo: false
  };

  it('should select all courses', () => {
    const result = fromCourse.selectCourses.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the loading state', () => {
    const result = fromCourse.selectCoursesLoading.projector(initialState);
    expect(result).toEqual(false);
  });

  it('should select the error', () => {
    const result = fromCourse.selectCoursesError.projector(initialState);
    expect(result).toBeNull();
  });

  it('should select the number of enrolled courses', () => {
    const result = fromCourse.selectNoOfCourses.projector(initialState);
    expect(result).toEqual(0);
  });

  it('should select the enrolled courses', () => {
    const result = fromCourse.selectEnrolledCourses.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the error for enrolled courses', () => {
    const result = fromCourse.selectEnrolledCoursesError.projector(initialState);
    expect(result).toBeNull();
  });

  it('should select the chapter data', () => {
    const result = fromCourse.selectChapterData.projector(initialState);
    expect(result).toEqual([]);
  });

  it('should select the course about info', () => {
    const result = fromCourse.selectCourseAboutInfo.projector(initialState);
    expect(result).toBe(initialState.courseAboutInfo);
  });

  it('should select the favorite courses', () => {
    const result = fromCourse.selectFavoritecourses.projector(initialState);
    expect(result).toEqual([]);
  });
});
