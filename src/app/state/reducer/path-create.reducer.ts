import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import {
  deletePathCreateCollaborator,
  setPathCreateCollaborators,
  setPathCreateCourse,
  setPathCreateImage,
} from '../action/path-create.action';

export interface CreatePathState {
  selectedCourses: Course[];
  selectedCollaborators: User[];
  img: string;
  uploadLoading: boolean;
}

export const initialCreatePath: CreatePathState = {
  selectedCourses: [],
  selectedCollaborators: [],
  img: '',
  uploadLoading: false,
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
  }))
);
