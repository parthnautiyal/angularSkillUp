import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { Quiz, Resource } from 'src/app/models/CreateCourse';
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

export const setPathCreateImage = createAction(
  '[Path-Create] Set Path Create Image',
  props<{ img: string }>()
);

export const setPathCreateImageUploaded = createAction(
  '[Path-Create] Set Path Create Image Uploaded'
);

export const setPathCreateImageFailed = createAction(
  '[Path-Create] Set Path Create Image Failed'
);

export const setResource = createAction(
  '[Path-Create] Set Resource',
  props<{ resource: Resource }>()
);

export const setQuiz = createAction(
  '[Path-Create] Set Quiz',
  props<{ quiz: Quiz }>()
);
