import { CoursePageComponent } from './pages/course-page/course-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PathPageComponent } from './pages/path-page/path-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AllSectionContainerComponent } from './shared/containers/all-section-container/all-section-container.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'courses', component: CoursePageComponent },
  { path: 'pathdashboard', component: PathPageComponent },
  { path: 'paths/all', component: AllSectionContainerComponent },
  { path: 'courses/all', component: AllSectionContainerComponent },
  { path: 'batches/all', component: AllSectionContainerComponent },
  { path: 'paths/ongoing', component: AllSectionContainerComponent },
  { path: 'courses/ongoing', component: AllSectionContainerComponent },
  { path: 'user', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
