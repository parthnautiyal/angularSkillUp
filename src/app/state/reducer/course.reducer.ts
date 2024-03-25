import { Action, createReducer, on } from '@ngrx/store';
import * as CourseActions from '../action/course.actions';
import { Course } from '../../models/Course';
import { Chapter } from 'src/app/models/Chapter';

export interface CourseState {
  allCourses: Course[];
  enrolledCourses: Course[];
  courseAboutInfo: Course;
  chapterData: Chapter[];
  noOfEnrolledCourses: number;
  isLoading: boolean;
  isLoadingFavourite: boolean;
  isLoadingChapterData: boolean;
  isLoadingAboutInfo: boolean;
  error: any;
  errorEnrolled: any;
  favoriteCourses: Course[];
}

export const initialState: CourseState = {
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
  isLoadingFavourite: false,
  isLoadingChapterData: false,
  isLoadingAboutInfo: false,
  error: null,
  errorEnrolled: null,
  favoriteCourses: [],
};

export const courseReducer = createReducer(
  initialState,
  // Load All Courses
  on(CourseActions.loadAllCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isLoading: false,
  })),
  on(CourseActions.loadAllCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  // Load Enrolled Courses
  on(CourseActions.loadEnrolledCourses, (state) => ({
    ...state,
    isLoading: true,
    errorEnrolled: null,
  })),
  on(
    CourseActions.loadEnrolledCoursesSuccess,
    (state, { enrolledCourses }) => ({
      ...state,
      enrolledCourses: enrolledCourses,
      isLoading: false,
    })
  ),
  on(CourseActions.loadEnrolledCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorEnrolled: error,
  })),

  // Load Course About Info
  on(CourseActions.loadCourseAboutInfo, (state) => ({
    ...state,
    isLoadingAboutInfo: true,
    error: null,
  })),
  on(CourseActions.loadCourseAboutInfoSuccess, (state, { course }) => ({
    ...state,
    courseAboutInfo: course,
    isLoadingAboutInfo: false,
  })),
  on(CourseActions.loadCourseAboutInfoFailed, (state, { error }) => ({
    ...state,
    isLoadingAboutInfo: false,
    error: error,
  })),

  // Load Chapter Data
  on(CourseActions.loadChapterData, (state) => ({
    ...state,
    isLoadingChapterData: true,
    error: null,
  })),
  on(CourseActions.loadChapterDataSuccess, (state, { chapterData }) => ({
    ...state,
    chapterData: chapterData,
    isLoadingChapterData: false,
  })),
  on(CourseActions.loadChapterDataFailed, (state, { error }) => ({
    ...state,
    isLoadingChapterData: false,
    error: error,
  })),

  // Load Number of Enrolled Courses
  on(CourseActions.loadNoOfEnrolledCourses, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadNoOfEnrolledCoursesSuccess, (state, { count }) => ({
    ...state,
    noOfEnrolledCourses: count,
    isLoading: false,
  })),
  on(CourseActions.loadNoOfEnrolledCoursesFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  // Load favorite Courses

  on(CourseActions.loadFavoriteCourses, (state) => ({
    ...state,
    isLoadingFavourite: true,
    error: null,
  })),
  on(
    CourseActions.loadFavoriteCoursesSuccess,
    (state, { favoriteCourses }) => ({
      ...state,
      favoriteCourses: favoriteCourses,
      isLoadingFavourite: false,
    })
  ),
  on(CourseActions.loadFavoriteCoursesFailed, (state, { error }) => ({
    ...state,
    isLoadingFavourite: false,
    error: error,
  }))
);

export function reducer(state: CourseState | undefined, action: Action) {
  return courseReducer(state, action);
}
