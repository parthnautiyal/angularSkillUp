import { loadTrainerCourseDataByIdSuccess } from './../action/trainer-course-data.actions';
import { createReducer, on } from "@ngrx/store";
import { Course } from "src/app/models/Course";
import * as TrainerCourseDataAction from '../action/trainer-course-data.actions'
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';

export interface TrainerCourseDataState {
  courseData : Course;
  loading: boolean;
  error: any;
}

export interface TrainerCourseChaptersState {
  courseChapters: Chapter[];
  loading: boolean;
  error: any;
}

export interface TrainerCourseRatingState {
  courseRating: Ratings;
  loading: boolean;
  error: any;
}

export const initialTrainerCourseDataState : TrainerCourseDataState = {
  courseData: {
    id: 0,
    name: "",
    courseName: "",
    imageUrl: "",
    isAccessible: false,
    description: "",
    about: "",
    createdBy: {
      id: 0,
      name: "",
      imageUrl: "",
      email: ""
    },
    createdAt: "",
    isFavourite: false,
    progress: 0,
    enrolledAt: "",
    completedAt: "",
    noOfChapters: 0,
    updatedAt: "",
    level: 0
  },
  loading: false,
  error: null
}

export const initialTrainerCourseChaptersState : TrainerCourseChaptersState = {
  courseChapters: [],
  loading: false,
  error: null
}

export const initialTrainerCourseRatingState : TrainerCourseRatingState = {
  courseRating: {
    averageRating: 0,
    rating: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0
    }
  },
  loading: false,
  error: null
}


export const TrainerCourseDataReducer = createReducer(
  initialTrainerCourseDataState,
  on(TrainerCourseDataAction.loadTrainerCourseDataById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseDataByIdSuccess, (state, { courseData }) => ({
    ...state,
    courseData,
    loading: false,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseDataByIdFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export const TrainerCourseChaptersReducer = createReducer(
  initialTrainerCourseChaptersState,
  on(TrainerCourseDataAction.loadTrainerCourseChaptersById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseChaptersByIdSuccess, (state, { courseChapters }) => ({
    ...state,
    courseChapters,
    loading: false,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseDataByIdFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

export const TrainerCourseRatingReducer = createReducer(
  initialTrainerCourseRatingState,
  on(TrainerCourseDataAction.loadTrainerCourseRatingById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseRatingByIdSuccess, (state, { courseRating }) => ({
    ...state,
    courseRating,
    loading: false,
    error: null,
  })),
  on(TrainerCourseDataAction.loadTrainerCourseRatingByIdFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);

