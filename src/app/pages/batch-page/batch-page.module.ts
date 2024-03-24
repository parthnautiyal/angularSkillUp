import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchPageComponent } from './batch-page.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { PathPageModule } from '../path-page/path-page.module';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { BatchPageRoutingModule } from './batch-page-routing.module';
import { ShimmerComponent } from 'src/app/shimmer/shimmer.component';
import { ShimmerModule } from 'src/app/shimmer/shimmer.module';

@NgModule({
  declarations: [BatchPageComponent, BatchDetailsComponent],
  imports: [CommonModule, CardsModule, ContainersModule,BatchPageRoutingModule,ShimmerModule],
})
export class BatchPageModule {}
