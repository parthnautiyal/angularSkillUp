import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchCardComponent } from './batch-card/batch-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { PathCardComponent } from './path-card/path-card.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { CircularProgressBarComponent } from './circular-progress-bar/circular-progress-bar.component';
import { PathCourseCardComponent } from './path-course-card/path-course-card.component';
import { NameInfoCardComponent } from './name-info-card/name-info-card.component';
import { LoadingCardComponent } from './loading-card/loading-card.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RandomColorDirective } from '../containers/card-container/random-color.directive';
import { RouterModule } from '@angular/router';
import { ShimmerLoadingComponent } from '../../shimmer/card-shimmer/shimmer-loading/shimmer-loading.component';
import { ErrorCardComponent } from './error-card/error-card.component';
import { CourseCardInfoTrainerComponent } from './course-card-info-trainer/course-card-info-trainer.component';
import { StreamCardTrainerComponent } from './stream-card-trainer/stream-card-trainer.component';
import { BatchCardTrainerComponent } from './batch-card-trainer/batch-card-trainer.component';
import { PathCardTrainerComponent } from './path-card-trainer/path-card-trainer.component';
import { ProfileCourseCardTrainerComponent } from './profile-course-card-trainer/profile-course-card-trainer.component';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardCourseCardTrainerComponent } from './dashboard-course-card-trainer/dashboard-course-card-trainer.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TrainerDashboardHeaderComponent } from './trainer-dashboard-header/trainer-dashboard-header.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { SwitchRoleComponent } from './switch-role/switch-role.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ScrollTrackerDirective } from '../scroll-tracker.directive';
import { CustomScrollDirective } from '../custom-scroll.directive';
import { CourseInTrainerPathCardComponent } from './course-in-trainer-path-card/course-in-trainer-path-card.component';
import { StudentInfoCardTrainerComponent } from './student-info-card-trainer/student-info-card-trainer.component';
import { TrainerStudentHeaderComponent } from './trainer-student-header/trainer-student-header.component';
import { FileImageUploadComponent } from './file-image-upload/file-image-upload.component';

@NgModule({
  declarations: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    ComponentHeaderComponent,
    FormsComponent,
    CircularProgressBarComponent,
    PathCourseCardComponent,
    NameInfoCardComponent,
    LoadingCardComponent,
    ShimmerLoadingComponent,
    ErrorCardComponent,
    CourseCardInfoTrainerComponent,
    StreamCardTrainerComponent,
    BatchCardTrainerComponent,
    PathCardTrainerComponent,
    ProfileCourseCardTrainerComponent,
    DashboardCourseCardTrainerComponent,
    TrainerDashboardHeaderComponent,
    StudentCardComponent,
    SwitchRoleComponent,
    CourseInTrainerPathCardComponent,
    StudentInfoCardTrainerComponent,
    TrainerStudentHeaderComponent,
    FileImageUploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProgressSpinnerModule,
    RandomColorDirective,
    RouterModule,
    DropdownModule,
    InputSwitchModule,
    SelectButtonModule,
    CustomScrollDirective,
  ],
  exports: [
    BatchCardComponent,
    CourseCardComponent,
    PathCardComponent,
    FormsComponent,
    ComponentHeaderComponent,
    CircularProgressBarComponent,
    PathCourseCardComponent,
    NameInfoCardComponent,
    LoadingCardComponent,
    ShimmerLoadingComponent,
    ErrorCardComponent,
    CourseCardInfoTrainerComponent,
    BatchCardTrainerComponent,
    PathCardTrainerComponent,
    ProfileCourseCardTrainerComponent,
    StreamCardTrainerComponent,
    StudentCardComponent,
    TrainerDashboardHeaderComponent,
    DashboardCourseCardTrainerComponent,
    SwitchRoleComponent,
    CourseInTrainerPathCardComponent,
    StudentInfoCardTrainerComponent,
    TrainerStudentHeaderComponent,
    FileImageUploadComponent,
  ],
})
export class CardsModule {}
