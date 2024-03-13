import { CoursePageComponent } from './pages/course-page/course-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AllSectionComponent } from './all-section/paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './all-section/courses-all-section/courses-all-section.component';
import { PathPageComponent } from './pages/path-page/path-page.component';
import { BatchesAllSectionComponent } from './all-section/batches-all-section/batches-all-section.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'courses', component: CoursePageComponent },
  { path: 'pathdashboard', component: PathPageComponent },
  { path: 'paths/all', component: AllSectionComponent },
  { path: 'courses/all', component: CoursesAllSectionComponent },
  { path: 'batches/all', component: BatchesAllSectionComponent },
  { path: 'user', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
