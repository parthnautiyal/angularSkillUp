import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from './shimmer.component';
import { ShimmerLoadingComponent } from '../shared/cards/shimmer-loading/shimmer-loading.component';
import { CardsModule } from '../shared/cards/cards.module';
import { BatchCardShimmerComponent } from './batch-card-shimmer/batch-card-shimmer.component';
import { DashboardShimmerComponent } from './dashboard-shimmer/dashboard-shimmer.component';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [ShimmerComponent,BatchCardShimmerComponent,DashboardShimmerComponent],
  exports: [ShimmerComponent,BatchCardShimmerComponent,DashboardShimmerComponent],
})
export class ShimmerModule {}
