import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTrainerComponent } from './dashboard-trainer.component';
import { DashboardTrainerRoutingModule } from './dashboard-trainer-routing.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';

@NgModule({
  declarations: [DashboardTrainerComponent],
  imports: [CommonModule, DashboardTrainerRoutingModule, CardsModule],
})
export class DashboardTrainerModule {}
