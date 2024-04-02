import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePathFormComponent } from './create-path-form/create-path-form.component';
import { ContainersModule } from '../containers/containers.module';
import { ClickOutsideDirective } from '../click-outside.directive';
import { OrderListModule } from 'primeng/orderlist';
import { CardsModule } from '../cards/cards.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CreateResourceComponent } from './create-course-form/create-resource/create-resource.component';
import { DropdownModule } from 'primeng/dropdown';
import { CreateChapterComponent } from './create-course-form/create-chapter/create-chapter.component';
import { ShowChapterComponent } from './create-course-form/show-chapter/show-chapter.component';
import { ShowResourceComponent } from './create-course-form/show-resource/show-resource.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CreatePathFormComponent,
    CreateCourseFormComponent,
    CreateResourceComponent,
    CreateChapterComponent,
    ShowChapterComponent,
    ShowResourceComponent,
  ],
  imports: [
    CommonModule,
    ContainersModule,
    ClickOutsideDirective,
    OrderListModule,
    CardsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    SelectButtonModule,
    FormsModule,
    DropdownModule,
    ToastModule
  ],
  exports: [CreatePathFormComponent, CreateCourseFormComponent],
})
export class FormModule {}
