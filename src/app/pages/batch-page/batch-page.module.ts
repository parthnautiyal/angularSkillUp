import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchPageComponent } from './batch-page.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { BatchTrainersComponent } from './batch-trainers/batch-trainers.component';
import { BatchPeersComponent } from './batch-peers/batch-peers.component';
import { PathPageModule } from '../path-page/path-page.module';

@NgModule({
  declarations: [
    BatchPageComponent,
    BatchDetailsComponent,
    InfoCardsComponent,
    BatchTrainersComponent,
    BatchPeersComponent,
  ],
  imports: [CommonModule, CardsModule, PathPageModule],
})
export class BatchPageModule {}
