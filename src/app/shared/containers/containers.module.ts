import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardsModule } from '../cards/cards.module';
import { AllSectionContainerComponent } from './all-section-container/all-section-container.component';
import { BatchInfoCardContainerComponent } from './batch-info-card-container/batch-info-card-container.component';
import { RouterModule } from '@angular/router';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';
import { ToastModule } from 'primeng/toast';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';
import { ScrollTrackerDirective } from '../scroll-tracker.directive';
import { AddCourseContainerComponent } from './add-course-container/add-course-container.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { AddCollaboratorContainerComponent } from './add-collaborator-container/add-collaborator-container.component';
import { TrainersAllSectionContainerComponent } from './all-section-container copy/trainers-all-section-container.component';
import { TrainersCardContainerComponent } from './trainers-card-container/trainers-card-container.component';

@NgModule({
  declarations: [
    CardContainerComponent,
    AllSectionContainerComponent,
    BatchInfoCardContainerComponent,
    AddCourseContainerComponent,
    AddCollaboratorContainerComponent,
    TrainersAllSectionContainerComponent,
    TrainersCardContainerComponent,
  ],
  imports: [
    CommonModule,
    CardsModule,
    RouterModule,
    ShimmerModule,
    ToastModule,
    ErrorPageModule,
    ScrollTrackerDirective,
    ListboxModule,
    FormsModule,
  ],
  exports: [
    CardContainerComponent,
    BatchInfoCardContainerComponent,
    AddCourseContainerComponent,
    AddCollaboratorContainerComponent,
    TrainersCardContainerComponent
  ],
})
export class ContainersModule {}
