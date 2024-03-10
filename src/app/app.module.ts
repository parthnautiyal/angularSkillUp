import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { PathsComponent } from './paths/paths.component';
import { PathComponent } from './paths/path/path.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerStripComponent } from './dashboard/banner-strip/banner-strip.component';
import { PathInfoComponent } from './path-info/path-info.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, FooterComponent, DashboardHeaderComponent, PathsComponent, PathComponent, CoursesComponent, CourseComponent, DashboardComponent, BannerStripComponent, PathInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
