import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import { Chapter } from 'src/app/models/Chapter';
import { Ratings } from 'src/app/models/Ratings';
import { ResourceData } from 'src/app/models/Resource';

export const loadTrainerCourseDataById = createAction(
  '[Trainer Course Data] Load Trainer Course Data',
  props<{ id: number }>()
);

export const loadTrainerCourseDataByIdSuccess = createAction(
  '[Trainer Course Data] Load Trainer Course Data Success',
  props<{ courseData: Course }>()
);

export const loadTrainerCourseDataByIdFailed = createAction(
  '[Trainer Course Data] Load Trainer Course Data Failed',
  props<{ error: any }>()
);

export const loadTrainerCourseChaptersById = createAction(
  '[Trainer Course Chapters] Load Trainer Course Chapters',
  props<{ id: number }>()
);

export const loadTrainerCourseChaptersByIdSuccess = createAction(
  '[Trainer Course Chapters] Load Trainer Course Chapters Success',
  props<{ courseChapters: Chapter[] }>()
);

export const loadTrainerCourseChaptersByIdFailed = createAction(
  '[Trainer Course Chapters] Load Trainer Course Chapters Failed',
  props<{ error: any }>()
);

export const loadTrainerCourseRatingById = createAction(
  '[Trainer Course Rating] Load Trainer Course Rating',
  props<{ id: number }>()
);

export const loadTrainerCourseRatingByIdSuccess = createAction(
  '[Trainer Course Rating] Load Trainer Course Rating Success',
  props<{ courseRating: Ratings }>()
);

export const loadTrainerCourseRatingByIdFailed = createAction(
  '[Trainer Course Rating] Load Trainer Course Rating Failed',
  props<{ error: any }>()
);

export const loadTrainerCourseResourcesById = createAction(
  '[Trainer Course Resources] Load Trainer Course Resources',
  props<{ id: number }>()
);

export const loadTrainerCourseResourcesByIdSuccess = createAction(
  '[Trainer Course Resources Success] Load Trainer Course Resources Success',
  props<{ courseResourceData: ResourceData[] }>()
);

export const loadTrainerCourseResourcesByIdFailed = createAction(
  '[Trainer Course Resources Failed] Load Trainer Course Resources Failed',
  props<{ error: any }>()
);
