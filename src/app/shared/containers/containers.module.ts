import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [CardContainerComponent],
  imports: [CommonModule, CardsModule],
  exports: [CardContainerComponent],
})
export class ContainersModule {}
