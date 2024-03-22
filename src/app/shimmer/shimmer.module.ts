import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from './shimmer.component';
import { ShimmerLoadingComponent } from '../shared/cards/shimmer-loading/shimmer-loading.component';
import { CardsModule } from '../shared/cards/cards.module';
import { CardShimmerComponent } from './card-shimmer/card-shimmer.component';
import { DashboardShimmerComponent } from './dashboard-shimmer/dashboard-shimmer.component';

@NgModule({
  imports: [CommonModule, CardsModule],
  declarations: [ShimmerComponent,CardShimmerComponent,DashboardShimmerComponent],
  exports: [ShimmerComponent,CardShimmerComponent,DashboardShimmerComponent],
})
export class ShimmerModule {}
