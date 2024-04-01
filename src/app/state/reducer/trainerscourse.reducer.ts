import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from '../action/trainerscourse.actions';
import { Course, ProfileCourse } from 'src/app/models/Course';
export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: any;
}
export interface TrainersProfileCoursesState {
  courses: ProfileCourse[];
  loading: boolean;
  error: any;
}
export interface publishCourseState {
  courseId: number;
  updating: boolean;
  error: any;
}
export const initialPublishState: publishCourseState = {
  courseId: 0,
  updating: false,
  error: null,
};
export interface RemoveCourseState {
  isSuccess: boolean;
  error: any;
}
export const initialRemoveCourseState: RemoveCourseState = {
  isSuccess: false,
  error: null,
};

export const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};
export const initialTrainersCourseState: TrainersProfileCoursesState = {
  courses: [],
  loading: false,
  error: null,
};

export const trainerCoursesReducer = createReducer(
  initialState,
  on(CoursesActions.loadTrainersCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(CoursesActions.loadTrainersCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null,
  })),
  on(CoursesActions.loadTrainersCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
export const TrainerprofileCoursesReducer = createReducer(
  initialTrainersCourseState,
  on(CoursesActions.loadTrainersProfileCourses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    CoursesActions.loadTrainersProfileCoursesSuccess,
    (state, { courses }) => ({
      ...state,
      courses,
      loading: false,
      error: null,
    })
  ),
  on(CoursesActions.loadTrainersProfileCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const PublishTrainerCourseReducer = createReducer(
  initialPublishState,
  on(CoursesActions.PublishTrainersCourse, (state) => ({
    ...state,
    updating: true,
    error: null,
  })),
  on(CoursesActions.PublishTrainersCourseSuccess, (state, { courseId }) => ({
    ...state,
    courseId,
    updating: false,
    error: null,
  })),
  on(CoursesActions.PublishTrainersCourseFailure, (state, { error }) => ({
    ...state,
    updating: false,
    error,
  }))
);

export const RemoveCourseReducer = createReducer(
  initialRemoveCourseState,
  on(CoursesActions.RemoveTrainersCourse, (state) => ({
    ...state,
    isSuccess: false,
    error: null,
  })),
  on(CoursesActions.RemoveTrainersCourseSuccess, (state, { isSuccess }) => ({
    ...state,
    isSuccess: isSuccess,
    error: null,
  })),
  on(CoursesActions.RemoveTrainersCourseFailure, (state, { error }) => ({
    ...state,
    isSuccess: false,
    error,
  }))
);
