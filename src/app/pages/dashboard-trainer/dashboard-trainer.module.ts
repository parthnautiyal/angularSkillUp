import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTrainerComponent } from './dashboard-trainer.component';
import { DashboardTrainerRoutingModule } from './dashboard-trainer-routing.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { ScrollTrackerDirective } from 'src/app/shared/scroll-tracker.directive';
import { FormModule } from 'src/app/shared/form/form.module';
import { ContainersModule } from 'src/app/shared/containers/containers.module';

@NgModule({
  declarations: [DashboardTrainerComponent],
  imports: [
    CommonModule,
    DashboardTrainerRoutingModule,
    CardsModule,
    ListboxModule,
    FormsModule,
    ScrollTrackerDirective,
    FormModule,
    ContainersModule,
  ],
})
export class DashboardTrainerModule {}
