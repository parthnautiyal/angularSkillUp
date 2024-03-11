import { IndivigualCourseComponent } from './pages/indivigual-course/indivigual-course.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerStripComponent } from './banner-strip/banner-strip.component';
import { AllSectionComponent } from './paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './courses-all-section/courses-all-section.component';
import { PathDashboardComponent } from './path-dashboard/path-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: IndivigualCourseComponent },
  { path: 'pathdashboard', component: PathDashboardComponent },
  { path: 'paths/all', component: AllSectionComponent },
  { path: 'course/all', component: CoursesAllSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
