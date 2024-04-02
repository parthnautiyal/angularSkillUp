import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { TrainerPathPageInfoCardComponent } from './trainer-path-page-info-card/trainer-path-page-info-card.component';
import { TrainerPathPageComponent } from './trainer-path-page.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TrainerPathPageInfoCardComponent,
    TrainerPathPageComponent,

  ],
  imports: [
    CommonModule,
    CardsModule,
    InputSwitchModule,
    ContainersModule,
    FormsModule
  ],
  exports: [TrainerPathPageComponent, TrainerPathPageInfoCardComponent]
})
export class TrainerPathPageModule { }
