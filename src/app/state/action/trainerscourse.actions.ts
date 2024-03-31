import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/Course';

export const loadTrainersCourses = createAction(
  '[Trainer Courses] Load Trainer Courses',
  props<{ pageNo: number }>()
);
export const loadTrainersCoursesSuccess = createAction(
  '[Trainer Courses] Load Trainer Courses Success',
  props<{ courses: Course[] }>()
);
export const loadTrainersCoursesFailure = createAction(
  '[Trainer Courses] Load Trainer Courses Failure',
  props<{ error: string }>()
);
