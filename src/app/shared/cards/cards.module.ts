import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchCardComponent } from './batch-card/batch-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { PathCardComponent } from './path-card/path-card.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';

@NgModule({
  declarations: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    ComponentHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    ComponentHeaderComponent,
  ],
})
export class CardsModule {}
