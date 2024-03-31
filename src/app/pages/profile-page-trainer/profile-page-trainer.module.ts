import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageTrainerComponent } from './profile-page-trainer.component';
import { ProfilePageModule } from '../profile-page/profile-page.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ProfilePageTrainerRoutingModule } from '../profile-page-trainer/profile-page-trainer-routing.module';
@NgModule({
  declarations: [ProfilePageTrainerComponent],
  imports: [
    CommonModule,
    ProfilePageModule,
    CardsModule,
    ProfilePageTrainerRoutingModule,
  ],
  exports: [],
})
export class ProfilePageTrainerModule {}
