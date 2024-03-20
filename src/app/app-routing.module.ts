import { CoursePageComponent } from './pages/course-page/course-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PathPageComponent } from './pages/path-page/path-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';
import { AllSectionContainerComponent } from './shared/containers/all-section-container/all-section-container.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CircularProgressBarComponent } from './shared/cards/circular-progress-bar/circular-progress-bar.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./pages/dashboard-page/dashboard-page.module').then(
  //       (m) => m.DashboardPageModule
  //     ),
  // },
  { path: 'course/:id', component: CoursePageComponent },
  { path: 'pathdashboard/:id', component: PathPageComponent },
  { path: 'paths/all', component: AllSectionContainerComponent },
  { path: 'courses/all', component: AllSectionContainerComponent },
  { path: 'batches/all', component: AllSectionContainerComponent },
  { path: 'paths/ongoing', component: AllSectionContainerComponent },
  { path: 'courses/ongoing', component: AllSectionContainerComponent },
  { path: 'courses/favourites', component: AllSectionContainerComponent },
  { path: 'batchpage/:id', component: BatchPageComponent },
  { path: 'user', component: ProfilePageComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'progress', component: CircularProgressBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
