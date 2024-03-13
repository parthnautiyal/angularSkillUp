import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AllSectionComponent } from './all-section/paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './all-section/courses-all-section/courses-all-section.component';
import { BatchesAllSectionComponent } from './all-section/batches-all-section/batches-all-section.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import { PathPageModule } from './pages/path-page/path-page.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllSectionComponent,
    CoursesAllSectionComponent,
    BatchesAllSectionComponent,
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
    CoursePageModule,
    PathPageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
