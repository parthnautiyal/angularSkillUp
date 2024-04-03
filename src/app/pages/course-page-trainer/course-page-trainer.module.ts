import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageTrainerComponent } from './course-page-trainer.component';
import { CoursePageTrainerRoutingModule } from './course-page-trainer-routing.module';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { CoursePageModule } from '../course-page/course-page.module';
import { TrainerPathPageModule } from '../trainer-path-page/trainer-path-page.module';

@NgModule({
  declarations: [CoursePageTrainerComponent],
  imports: [
    CommonModule,
    CoursePageTrainerRoutingModule,
    ShimmerModule,
    CardsModule,
    CoursePageModule,
    ErrorPageModule,
    TrainerPathPageModule,
  ],
})
export class CoursePageTrainerModule {}
