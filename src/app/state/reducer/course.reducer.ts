import { Action, createReducer, on } from '@ngrx/store';
import * as CourseActions from '../action/course.action';
import { Course } from '../../models/Course';
import { CourseInfo } from 'src/app/models/CouseInfo';
import { enrolledCourses } from 'src/app/models/EnrolledCourses';

export interface CourseState {
  allCourses: Course[];
  enrolledCourses: Course[];
  courseAboutInfo: any[];
  chapterData: any[];
  noOfEnrolledCourses: number;
  isLoading: boolean;
  error: any;
}

const initialState: CourseState = {
  allCourses: [],
  enrolledCourses: [],
  courseAboutInfo: [],
  chapterData: [],
  noOfEnrolledCourses: 0,
  isLoading: false,
  error: null,
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
    error: null,
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
    error: error,
  })),

  // Load Course About Info
  on(CourseActions.loadCourseAboutInfo, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadCourseAboutInfoSuccess, (state, { course }) => ({
    ...state,
    courseAboutInfo: course,
    isLoading: false,
  })),
  on(CourseActions.loadCourseAboutInfoFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),

  // Load Chapter Data
  on(CourseActions.loadChapterData, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CourseActions.loadChapterDataSuccess, (state, { data }) => ({
    ...state,
    chapterData: data,
    isLoading: false,
  })),
  on(CourseActions.loadChapterDataFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
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
  }))
);
export function reducer(state: CourseState | undefined, action: Action) {
  return courseReducer(state, action);
}
