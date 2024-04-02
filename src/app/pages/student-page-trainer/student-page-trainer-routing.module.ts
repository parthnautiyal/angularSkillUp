import { NgModule } from '@angular/core';
import { StudentPageTrainerComponent } from './student-page-trainer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentPageTrainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageTrainerRoutingModule {}
