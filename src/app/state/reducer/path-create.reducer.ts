import { createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import {
  deletePathCreateCollaborator,
  setPathCreateCollaborators,
  setPathCreateCourse,
} from '../action/path-create.action';

export interface CreatePathState {
  selectedCourses: Course[];
  selectedCollaborators: User[];
}

export const initialCreatePath: CreatePathState = {
  selectedCourses: [],
  selectedCollaborators: [],
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
  }))
);
