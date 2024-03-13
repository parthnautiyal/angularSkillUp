import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ContainersModule } from 'src/app/shared/containers/containers.module';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,ContainersModule
  ]
})
export class ProfilePageModule { }
