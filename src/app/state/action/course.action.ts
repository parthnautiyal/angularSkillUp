import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/Course';

export const loadCourses = createAction('[Course] Load Courses');
export const coursesLoaded = createAction(
  '[Course] Courses Loaded',
  props<{ courses: Course[] }>()
);
export const coursesLoadFailed = createAction(
  '[Course] Courses Load Failed',
  props<{ error: any }>()
);
export function loadCoursesFailure(arg0: { error: any }): any {
  throw new Error('Function not implemented.');
}
