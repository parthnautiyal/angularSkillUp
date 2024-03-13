import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchPageComponent } from './batch-page.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ComponentHeaderComponent } from 'src/app/shared/cards/component-header/component-header.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { PathCardComponent } from 'src/app/shared/cards/path-card/path-card.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { BatchTrainersComponent } from './batch-trainers/batch-trainers.component';
import { BatchPeersComponent } from './batch-peers/batch-peers.component';



@NgModule({
  declarations: [
    
    BatchPageComponent,
    BatchDetailsComponent,
    InfoCardsComponent,
    BatchTrainersComponent,
    BatchPeersComponent,
  ],
  imports: [
    CommonModule,
    CardsModule
  ]
})
export class BatchPageModule { }
