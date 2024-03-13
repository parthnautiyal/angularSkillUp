import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ContainersModule } from 'src/app/shared/containers/containers.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';



@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,ContainersModule,CardsModule
  ]
})
export class ProfilePageModule { }
