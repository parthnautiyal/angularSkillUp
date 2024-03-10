import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { PathsComponent } from './paths/paths.component';
import { PathComponent } from './path/path.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllSectionComponent } from './paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './courses-all-section/courses-all-section.component';
import { PathHeadingComponent } from './path-heading/path-heading.component';
import { CourseHeadingComponent } from './course-heading/course-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardHeaderComponent,
    PathsComponent,
    PathComponent,
    CoursesComponent,
    CourseComponent,
    DashboardComponent,
    AllSectionComponent,
    CoursesAllSectionComponent,
    PathHeadingComponent,
    CourseHeadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
