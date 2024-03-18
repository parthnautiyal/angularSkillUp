import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchCardComponent } from './batch-card/batch-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { PathCardComponent } from './path-card/path-card.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { CircularProgressBarComponent } from './circular-progress-bar/circular-progress-bar.component';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { PathCourseCardComponent } from './path-course-card/path-course-card.component';
import { NameInfoCardComponent } from './name-info-card/name-info-card.component';

@NgModule({
  declarations: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    ComponentHeaderComponent,
    FormsComponent,
    CircularProgressBarComponent,
    PathCourseCardComponent,
    NameInfoCardComponent,
  ],
  imports: [CommonModule, FormsModule, ProgressBarModule],
  exports: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    FormsComponent,
    ComponentHeaderComponent,
    CircularProgressBarComponent,
    PathCourseCardComponent,
    NameInfoCardComponent,
  ],
})
export class CardsModule {}
