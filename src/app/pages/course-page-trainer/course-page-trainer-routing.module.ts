import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageTrainerComponent } from './course-page-trainer.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePageTrainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageTrainerRoutingModule {}
