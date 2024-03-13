import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PathInfoComponent } from './pages/path-page/path-info/path-info.component';
import { AllSectionComponent } from './all-section/paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './all-section/courses-all-section/courses-all-section.component';
import { PathPageContentComponent } from './pages/path-page/path-page-wrapper/path-page-content/path-page-content.component';
import { PathPageComponent } from './pages/path-page/path-page.component';
import { PathPageWrapperComponent } from './pages/path-page/path-page-wrapper/path-page-wrapper.component';
import { BatchesAllSectionComponent } from './all-section/batches-all-section/batches-all-section.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllSectionComponent,
    CoursesAllSectionComponent,
    PathPageContentComponent,
    PathInfoComponent,
    PathPageComponent,
    PathPageWrapperComponent,
    BatchesAllSectionComponent,
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
    CoursePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
