import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { StudentPageTrainerComponent } from './student-page-trainer.component';
import { StudentPageTrainerRoutingModule } from './student-page-trainer-routing.module';

@NgModule({
  declarations: [StudentPageTrainerComponent],
  imports: [CommonModule, CardsModule, StudentPageTrainerRoutingModule],
  exports: [StudentPageTrainerComponent],
})
export class StudentPageTrainerModule {}
