import { IndivigualCourseComponent } from './pages/indivigual-course/indivigual-course.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllSectionComponent } from './paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './courses-all-section/courses-all-section.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: IndivigualCourseComponent },
  { path: 'paths/all', component: AllSectionComponent },
  { path: 'course/all', component: CoursesAllSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
