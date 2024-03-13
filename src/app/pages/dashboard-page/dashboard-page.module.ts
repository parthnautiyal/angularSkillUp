import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardHeaderComponent],
  imports: [CommonModule, ContainersModule],
})
export class DashboardPageModule {}
