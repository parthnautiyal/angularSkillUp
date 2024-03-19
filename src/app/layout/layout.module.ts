import { HeaderFooterModule } from './../common/header-footer/header-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';
@NgModule({
  declarations: [LayoutComponent, UserComponent],
  imports: [CommonModule, AppRoutingModule, HeaderFooterModule, AuthModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
