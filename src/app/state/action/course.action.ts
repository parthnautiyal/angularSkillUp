import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/Course';
import { CourseInfo } from 'src/app/models/CouseInfo';
import { enrolledCourses } from 'src/app/models/EnrolledCourses';

export const loadAllCourses = createAction('[Course] Load All Courses');

export const loadAllCoursesSuccess = createAction(
  '[Course] Load All Courses Success',
  props<{ courses: Course[] }>()
);

export const loadAllCoursesFailed = createAction(
  '[Course] Load All Courses Failed',
  props<{ error: any }>()
);
export const loadEnrolledCourses = createAction(
  '[Course] Load Enrolled Courses'
);

export const loadEnrolledCoursesSuccess = createAction(
  '[Course] Load Enrolled Courses Success',
  props<{ enrolledCourses: Course[] }>()
);

export const loadEnrolledCoursesFailed = createAction(
  '[Course] Load Enrolled Courses Failed',
  props<{ error: any }>()
);
export const loadCourseAboutInfo = createAction(
  '[Course] Load Course About Info',
  props<{ courseId: string }>()
);

export const loadCourseAboutInfoSuccess = createAction(
  '[Course] Load Course About Info Success',
  props<{ course: any }>()
);

export const loadCourseAboutInfoFailed = createAction(
  '[Course] Load Course About Info Failed',
  props<{ error: any }>()
);
export const loadChapterData = createAction(
  '[Course] Load Chapter Data',
  props<{ courseId: string }>()
);

export const loadChapterDataSuccess = createAction(
  '[Course] Load Chapter Data Success',
  props<{ data: any[] }>()
);

export const loadChapterDataFailed = createAction(
  '[Course] Load Chapter Data Failed',
  props<{ error: any }>()
);
export const loadNoOfEnrolledCourses = createAction(
  '[Course] Load Number of Enrolled Courses'
);

export const loadNoOfEnrolledCoursesSuccess = createAction(
  '[Course] Load Number of Enrolled Courses Success',
  props<{ count: number }>()
);

export const loadNoOfEnrolledCoursesFailed = createAction(
  '[Course] Load Number of Enrolled Courses Failed',
  props<{ error: any }>()
);
