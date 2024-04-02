import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { TrainerPathPageInfoCardComponent } from './trainer-path-page-info-card/trainer-path-page-info-card.component';
import { TrainerPathPageComponent } from './trainer-path-page.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { FormsModule } from '@angular/forms';
import { TrainerPathPageRoutingModule } from './trainer-path-page-routing.module';
import { ErrorPageModule } from 'src/app/error-page/error-page.module';

@NgModule({
  declarations: [TrainerPathPageInfoCardComponent, TrainerPathPageComponent],
  imports: [
    CommonModule,
    CardsModule,
    InputSwitchModule,
    ContainersModule,
    FormsModule,
    TrainerPathPageRoutingModule,
    ErrorPageModule
  ],
  exports: [TrainerPathPageComponent, TrainerPathPageInfoCardComponent],
})
export class TrainerPathPageModule {}
