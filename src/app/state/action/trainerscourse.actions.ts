import { createAction, props } from '@ngrx/store';
import { Course, ProfileCourse } from 'src/app/models/Course';

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

export const loadTrainersProfileCourses = createAction(
  '[Trainers Profile Courses] Load Profile Courses'
);

export const loadTrainersProfileCoursesSuccess = createAction(
  '[Trainers Profile Courses] Load Profile Courses Success',
  props<{ courses: ProfileCourse[] }>()
);

export const loadTrainersProfileCoursesFailure = createAction(
  '[Trainers Profile Courses] Load Profile Courses Failure',
  props<{ error: string }>()
);

export const PublishTrainersCourse = createAction(
  '[Publish Course] Publish Trainers Course',
  props<{ id: number; body: any }>()
);
export const PublishTrainersCourseSuccess = createAction(
  '[Publish Course] Publish Trainers Course Success',
  props<{ courseId: number }>()
);
export const PublishTrainersCourseFailure = createAction(
  '[Publish Course] Publish Trainers Course Failure',
  props<{ error: string }>()
);
