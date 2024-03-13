import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchPageComponent } from './batch-page.component';
import { CardsModule } from 'src/app/shared/cards/cards.module';



@NgModule({
  declarations: [
    BatchPageComponent
  ],
  imports: [
    CommonModule,CardsModule
  ]
})
export class BatchPageModule { }
