import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTrainerComponent } from './dashboard-trainer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardTrainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTrainerRoutingModule {}
