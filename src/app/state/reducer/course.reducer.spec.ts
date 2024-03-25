import { courseReducer, CourseState, initialState, reducer } from './course.reducer';
import * as CourseActions from '../action/course.actions';
import { Action } from '@ngrx/store';
import { state } from '@angular/animations';

fdescribe('CourseReducer', () => {
  it('should return the default state', () => {
    const action = { type: 'Unknown' };
    const state = courseReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  //Load all courses
  it('should set isLoading to true and error to null', () => {
    const action = CourseActions.loadAllCourses();
    const state = courseReducer(initialState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });


  it('should update allCourses and set isLoading to false', () => {
    const courses = [{
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
    ];
    const action = CourseActions.loadAllCoursesSuccess({ courses });
    const state = courseReducer(initialState, action);

    expect(state.allCourses).toEqual(courses);
    expect(state.isLoading).toBe(false);
  });


  it('should update error and set isLoading to false', () => {
    const error = { message: 'Error loading courses' };
    const action = CourseActions.loadAllCoursesFailed({ error });
    const state = courseReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.isLoading).toBe(false);
  });

  it('should update state for loadEnrolledCourses action', () => {
    const action = CourseActions.loadEnrolledCourses();
    const newState = courseReducer(initialState, action);
    expect(newState.isLoading).toBe(true);
    expect(newState.error).toBe(null);
  });

  it('should update state for loadEnrolledCoursesSuccess action', () => {
    const enrolledCourses = [{
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
    }];
    const action = CourseActions.loadEnrolledCoursesSuccess({ enrolledCourses });
    const newState = courseReducer(initialState, action);
    expect(newState.enrolledCourses).toEqual(enrolledCourses);
    expect(newState.isLoading).toBe(false);
  });

  it('should update state for loadEnrolledCoursesFailed action', () => {
    const error = new Error('Test Error');
    const action = CourseActions.loadEnrolledCoursesFailed({ error });
    const newState = courseReducer(initialState, action);
    expect(newState.errorEnrolled).toEqual(error);
    expect(newState.isLoading).toBe(false);
  });

  // Load Course About Info
  it('should set isLoadingAboutInfo to true and error to null', () => {
    const action = CourseActions.loadCourseAboutInfo({ courseId: '2' });
    const state = courseReducer(initialState, action);

    expect(state.isLoadingAboutInfo).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should update courseAboutInfo and set isLoading to false', () => {
    const course = {
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
    };
    const action = CourseActions.loadCourseAboutInfoSuccess({ course });
    const state = courseReducer(initialState, action);

    expect(state.courseAboutInfo).toEqual(course);
    expect(state.isLoading).toBe(false);
  });

  it('should update error and set isLoading to false', () => {
    const error = { message: 'Error loading course about info' };
    const action = CourseActions.loadCourseAboutInfoFailed({ error });
    const state = courseReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.isLoading).toBe(false);
  });

  // Load Chapter Data
  it('should set isLoadingChapterData to true and error to null', () => {
    const action = CourseActions.loadChapterData({ courseId: '2' });
    const state = courseReducer(initialState, action);

    expect(state.isLoadingChapterData).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should update chapterData and set isLoading to false', () => {
    const chapterData = [{
      id: 1,
      name: "Introduction to TypeScript",
      resourceResponses: [
        {
          id: 101,
          resourceName: "TypeScript Basics",
          resourceLink: "http://example.com/resource1",
          isCompleted: false,
          isVisited: false
        },
        {
          id: 102,
          resourceName: "Advanced TypeScript",
          resourceLink: "http://example.com/resource2",
          isCompleted: false,
          isVisited: false
        }
      ],
      quizResponses: [
        {
          id: 201,
          name: "Quiz 1",
          link: "http://example.com/quiz1",
          status: "Not Started",
          quizType: "Multiple Choice"
        },
        {
          id: 202,
          name: "Quiz 2",
          link: "http://example.com/quiz2",
          status: "Not Started",
          quizType: "True or False"
        }
      ],
      progress: 0
    }
    ];
    const action = CourseActions.loadChapterDataSuccess({ chapterData });
    const state = courseReducer(initialState, action);

    expect(state.chapterData).toEqual(chapterData);
    expect(state.isLoading).toBe(false);
  });

  it('should update error and set isLoading to false', () => {
    const error = { message: 'Error loading chapter data' };
    const action = CourseActions.loadChapterDataFailed({ error });
    const state = courseReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.isLoading).toBe(false);
  });

  // Load Number of Enrolled Courses
  it('should set isLoading to true and error to null', () => {
    const action = CourseActions.loadNoOfEnrolledCourses();
    const state = courseReducer(initialState, action);

    expect(state.isLoading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should update noOfEnrolledCourses and set isLoading to false', () => {
    const count = 5;
    const action = CourseActions.loadNoOfEnrolledCoursesSuccess({ count });
    const state = courseReducer(initialState, action);

    expect(state.noOfEnrolledCourses).toEqual(count);
    expect(state.isLoading).toBe(false);
  });

  it('should update error and set isLoading to false', () => {
    const error = { message: 'Error loading number of enrolled courses' };
    const action = CourseActions.loadNoOfEnrolledCoursesFailed({ error });
    const state = courseReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.isLoading).toBe(false);
  });

  // Load Favorite Courses
  it('should set isLoadingFavourite to true and error to null', () => {
    const action = CourseActions.loadFavoriteCourses();
    const state = courseReducer(initialState, action);

    expect(state.isLoadingFavourite).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should update favoriteCourses and set isLoading to false', () => {
    const favoriteCourses = [{
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
    }];
    const action = CourseActions.loadFavoriteCoursesSuccess({ favoriteCourses });
    const state = courseReducer(initialState, action);

    expect(state.favoriteCourses).toEqual(favoriteCourses);
    expect(state.isLoading).toBe(false);
  });

  it('should update error and set isLoading to false', () => {
    const error = { message: 'Error loading favorite courses' };
    const action = CourseActions.loadFavoriteCoursesFailed({ error });
    const state = courseReducer(initialState, action);

    expect(state.error).toEqual(error);
    expect(state.isLoading).toBe(false);
  });

});

describe('Reducer', () => {
  let initialState: CourseState;

  beforeEach(() => {
    // Initialize your state here
    initialState = {
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
      isLoadingFavourite:false,
      isLoadingChapterData:false,
      isLoadingAboutInfo:false,
      error: null,
      errorEnrolled: null,
      favoriteCourses: [],
    };
  });

  it('should return the initial state', () => {
    const action = {} as Action;
    const state = reducer(initialState, action);

    expect(state).toBe(initialState);
  });
});
