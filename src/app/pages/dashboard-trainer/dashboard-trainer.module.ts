import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTrainerComponent } from './dashboard-trainer.component';
import { DashboardTrainerRoutingModule } from './dashboard-trainer-routing.module';

@NgModule({
  declarations: [DashboardTrainerComponent],
  imports: [CommonModule, DashboardTrainerRoutingModule],
})
export class DashboardTrainerModule {}
