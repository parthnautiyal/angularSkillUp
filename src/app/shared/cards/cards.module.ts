import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchCardComponent } from './batch-card/batch-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { PathCardComponent } from './path-card/path-card.component';



@NgModule({
  declarations: [BatchCardComponent,CourseCardComponent,PathCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BatchCardComponent,CourseCardComponent,PathCardComponent]
})
export class CardsModule { }
