import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePathFormComponent } from './create-path-form/create-path-form.component';
import { ContainersModule } from '../containers/containers.module';
import { ClickOutsideDirective } from '../click-outside.directive';
import { OrderListModule } from 'primeng/orderlist';
import { CardsModule } from '../cards/cards.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInputValidationDirective } from '../app-input-validation.directive';

@NgModule({
  declarations: [CreatePathFormComponent],
  imports: [
    CommonModule,
    ContainersModule,
    ClickOutsideDirective,
    OrderListModule,
    CardsModule,
    ReactiveFormsModule,
    AppInputValidationDirective,
  ],
  exports: [CreatePathFormComponent],
})
export class FormModule {}
