import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';

export const setPathCreateCourse = createAction(
  '[Path-Create] Set Path Create Course',
  props<{ selectedCourses: Course[] }>()
);

export const setPathCreateCollaborators = createAction(
  '[Path-Create] Set Path Create Collaborators',
  props<{ selectedCollaborators: User[] }>()
);

export const deletePathCreateCollaborator = createAction(
  '[Path-Create] Delete Path Create Collaborator',
  props<{ selectedCollaborators: User[] }>()
);
