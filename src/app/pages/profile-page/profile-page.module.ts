import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,ContainersModule
  ]
})
export class ProfilePageModule { }
