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
  console.log('inside loadCoursesFailure function -> ' + arg0.error);
  //return arg0.error;
  throw new Error('inside loadCoursesFailure function -> ');
}
