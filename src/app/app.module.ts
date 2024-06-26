
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './error-page/page-not-found/page-not-found.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZopsmartApiInterceptorService } from './services/zopsmart-api-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/effects/course.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BatchEffects } from './state/effects/batch.effects';
import {
  batchDetailsReducer,
  batchReducer,
  enrolledBatchesReducer,
  pathDataReducer,
  studentReducer,
  trainerReducer,
} from './state/reducer/batch.reducer';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PathEffects } from './state/effects/path.effects';
import {
  NoOfenrolledPathsReducer,
  PathByIdReducer,
  enrolledPathsReducer,
  pathReducer,
} from './state/reducer/path.reducer';
import { RouterModule } from '@angular/router';
import {
  allCoursesReducer,
  chapterDataReducer,
  courseAboutInfoReducer,
  courseRatingReducer,
  enrolledCoursesReducer,
  favoriteCoursesReducer,
  noOfEnrolledCoursesReducer,
} from './state/reducer/course.reducer';
import { ToastModule } from 'primeng/toast';
import { pathCreateReducer } from './state/reducer/path-create.reducer';
import {
  TrainerPathDataReducer,
  TrainerProfilepathsReducer,
  TrainerpathsReducer,
} from './state/reducer/trainerspath.reducer';
import {
  PublishTrainerCourseReducer,
  RemoveCourseReducer,
  TrainerprofileCoursesReducer,
  trainerCoursesReducer,
} from './state/reducer/trainerscourse.reducer';
import { TrainerCoursesEffects } from './state/effects/trainersCourse.effects';
import { TrainerPathsEffects } from './state/effects/trainerspath.effects';
import { CardsModule } from './shared/cards/cards.module';
import { DatePipe } from '@angular/common';
import { ContainersModule } from './shared/containers/containers.module';
import { StudentDataEffects } from './state/effects/studentData.effects';
import { studentDataReducer } from './state/reducer/studentData.reducer';
import { uploadReducer } from './state/reducer/ImageUpload.reducer';
import { UploadEffects } from './state/effects/imageUpload.effects';
import { MessageService } from 'primeng/api';
import { TrainerCourseChaptersReducer, TrainerCourseDataReducer } from './state/reducer/trainer-course-data.reducer';
import { TrainerCourseDataByIdEffects } from './state/effects/trainer-course-data.effects';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    StoreModule.forRoot({
      allCourses: allCoursesReducer,
      enrolledCourses: enrolledCoursesReducer,
      courseAboutInfo: courseAboutInfoReducer,
      chapterData: chapterDataReducer,
      noOfEnrolledCourses: noOfEnrolledCoursesReducer,
      favoriteCourses: favoriteCoursesReducer,
      batch: batchReducer,
      allPaths: pathReducer,
      pathById: PathByIdReducer,
      enrolledPaths: enrolledPathsReducer,
      student: studentReducer,
      trainer: trainerReducer,
      batchDetails: batchDetailsReducer,
      batchPathData: pathDataReducer,
      enrolledBatches: enrolledBatchesReducer,
      numberOfEnrolledPaths: NoOfenrolledPathsReducer,
      courseRating: courseRatingReducer,
      pathCreate: pathCreateReducer,
      trainerPaths: TrainerpathsReducer,
      trainerCourses: trainerCoursesReducer,
      StudentData: studentDataReducer,
      trainerProfilePaths: TrainerProfilepathsReducer,
      trainerProfileCourses: TrainerprofileCoursesReducer,
      publishCourse: PublishTrainerCourseReducer,
      RemoveCourse: RemoveCourseReducer,
      upload: uploadReducer,
      trainerCourseData: TrainerCourseDataReducer,
      trainerCourseChapters: TrainerCourseChaptersReducer,
      trainerPathData: TrainerPathDataReducer,
    }),
    EffectsModule.forRoot([
      CourseEffects,
      BatchEffects,
      PathEffects,
      TrainerCoursesEffects,
      TrainerPathsEffects,
      StudentDataEffects,
      UploadEffects,
      TrainerCourseDataByIdEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    RouterModule,
    CardsModule,
    ContainersModule
  ],

  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZopsmartApiInterceptorService,
      multi: true,
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
