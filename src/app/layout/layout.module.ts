import { HeaderFooterModule } from './../common/header-footer/header-footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UserComponent } from './user/user.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ErrorPageModule } from '../error-page/error-page.module';
import { AdminComponent } from './admin/admin.component';
import { ProfilePageTrainerModule } from '../pages/profile-page-trainer/profile-page-trainer.module';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../shared/form/form.module';
import { TrainerPathPageModule } from '../pages/trainer-path-page/trainer-path-page.module';
@NgModule({
  declarations: [LayoutComponent, UserComponent, AdminComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderFooterModule,
    ErrorPageModule,
    ProfilePageTrainerModule,
    FormModule,
    TrainerPathPageModule
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
