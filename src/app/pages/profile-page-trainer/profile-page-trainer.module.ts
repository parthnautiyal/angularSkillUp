import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageTrainerComponent } from './profile-page-trainer.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ProfilePageTrainerRoutingModule } from '../profile-page-trainer/profile-page-trainer-routing.module';
@NgModule({
  declarations: [ProfilePageTrainerComponent],
  imports: [CommonModule, CardsModule, ProfilePageTrainerRoutingModule],
})
export class ProfilePageTrainerModule {}
