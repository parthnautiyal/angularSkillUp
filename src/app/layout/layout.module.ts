import { HeaderFooterModule } from './../common/header-footer/header-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { ContainersModule } from '../shared/containers/containers.module';
@NgModule({
  declarations: [LayoutComponent, UserComponent],
  imports: [CommonModule, LayoutRoutingModule, HeaderFooterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
