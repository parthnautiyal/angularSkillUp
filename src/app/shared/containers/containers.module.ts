import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardsModule } from '../cards/cards.module';
import { AllSectionContainerComponent } from './all-section-container/all-section-container.component';

@NgModule({
  declarations: [CardContainerComponent, AllSectionContainerComponent],
  imports: [CommonModule, CardsModule],
  exports: [CardContainerComponent],
})
export class ContainersModule {}
