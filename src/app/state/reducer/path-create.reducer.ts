import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import {
  deletePathCreateCollaborator,
  setPathCreateCollaborators,
  setPathCreateCourse,
  setPathCreateImage,
  setQuiz,
  setResource,
} from '../action/path-create.action';
import { Quiz, Resource } from 'src/app/models/CreateCourse';

export interface CreatePathState {
  selectedCourses: Course[];
  selectedCollaborators: User[];
  img: string;
  uploadLoading: boolean;
  resource: Resource;
  quiz: Quiz;
}

export const initialCreatePath: CreatePathState = {
  selectedCourses: [],
  selectedCollaborators: [],
  img: '',
  uploadLoading: false,
  resource: {
    resourceName: '',
    resourceLink: '',
    resourceType: '',
  },
  quiz: {
    quizType: '',
    name: '',
    quizLink: '',
    passingMarks: 0,
  },
};

export const pathCreateReducer = createReducer(
  initialCreatePath,
  on(setPathCreateCourse, (state, { selectedCourses }) => ({
    ...state,
    selectedCourses: [...state.selectedCourses, ...selectedCourses],
  })),
  on(setPathCreateCollaborators, (state, { selectedCollaborators }) => ({
    ...state,
    selectedCollaborators: [
      ...state.selectedCollaborators,
      ...selectedCollaborators,
    ],
  })),
  on(deletePathCreateCollaborator, (state, { selectedCollaborators }) => ({
    ...state,
    selectedCollaborators,
  })),

  on(setPathCreateImage, (state, { img }) => ({
    ...state,
    img,
  })),
  on(setResource, (state, { resource }) => ({
    ...state,
    resource,
  })),
  on(setQuiz, (state, { quiz }) => ({
    ...state,
    quiz,
  }))
);
