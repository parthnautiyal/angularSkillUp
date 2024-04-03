import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AllSectionContainerComponent } from '../shared/containers/all-section-container/all-section-container.component';
import { PageNotFoundComponent } from '../error-page/page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { TrainersAllSectionContainerComponent } from '../shared/containers/all-section-container copy/trainers-all-section-container.component';
import { CreateCourseFormComponent } from '../shared/form/create-course-form/create-course-form.component';
import { CreatePathFormComponent } from '../shared/form/create-path-form/create-path-form.component';

const routesCurr: Route =
  localStorage.getItem('selectedRole') === 'TRAINER'
    ? {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full',
          },
          {
            path: 'paths/all',
            component: TrainersAllSectionContainerComponent,
          },
          {
            path: 'batches/all',
            component: TrainersAllSectionContainerComponent,
          },

          {
            path: 'courses/all',
            component: TrainersAllSectionContainerComponent,
          },
          {
            path: 'user/students/all',
            loadChildren: () =>
              import(
                '../pages/student-page-trainer/student-page-trainer.module'
              ).then((e) => e.StudentPageTrainerModule),
          },

          {
            path: 'course/:id',
            loadChildren: () =>
              import(
                '../pages/course-page-trainer/course-page-trainer.module'
              ).then((e) => e.CoursePageTrainerModule),
          },

          {
            path: 'user',
            loadChildren: () =>
              import(
                '../pages/profile-page-trainer/profile-page-trainer.module'
              ).then((e) => e.ProfilePageTrainerModule),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import(
                '../pages/dashboard-trainer/dashboard-trainer.module'
              ).then((e) => e.DashboardTrainerModule),
          },
          {
            path: 'path/update/:id',
            component: CreatePathFormComponent,
          },
          {
            path: 'path/:id',
            loadChildren: () =>
              import(
                '../pages/trainer-path-page/trainer-path-page.module'
              ).then((e) => e.TrainerPathPageModule),
          },

          {
            path: 'course/:id/update',
            component: CreateCourseFormComponent,
          },
          {
            path: 'path/new',
            component: CreatePathFormComponent,
          },
          {
            path: 'course/new',
            component: CreateCourseFormComponent,
          },
          {
            path: 'path/:id',

            loadChildren: () =>
              import(
                '../pages/trainer-path-page/trainer-path-page.module'
              ).then((e) => e.TrainerPathPageModule),
          },
          { path: '**', component: PageNotFoundComponent },
        ],
      }
    : {
        path: '',
        component: UserComponent,
        children: [
          {
            path: '',
            redirectTo: '/login',
            pathMatch: 'full',
          },

          {
            path: 'dashboard',
            loadChildren: () =>
              import('../pages/dashboard-page/dashboard-page.module').then(
                (e) => e.DashboardPageModule
              ),
          },
          {
            path: 'pathdashboard/:id',
            loadChildren: () =>
              import('../pages/path-page/path-page.module').then(
                (e) => e.PathPageModule
              ),
          },
          {
            path: 'batchpage/:id',
            loadChildren: () =>
              import('../pages/batch-page/batch-page.module').then(
                (m) => m.BatchPageModule
              ),
          },
          {
            path: 'course/:id',
            loadChildren: () =>
              import('../pages/course-page/course-page.module').then(
                (m) => m.CoursePageModule
              ),
          },
          {
            path: 'user',
            loadChildren: () =>
              import('../pages/profile-page/profile-page.module').then(
                (m) => m.ProfilePageModule
              ),
          },
          {
            path: 'testing',
            loadChildren: () =>
              import(
                '../pages/dashboard-trainer/dashboard-trainer.module'
              ).then((m) => m.DashboardTrainerModule),
          },
          {
            path: 'paths/all',
            component: AllSectionContainerComponent,
          },
          {
            path: 'courses/all',
            component: AllSectionContainerComponent,
          },
          {
            path: 'batches/all',
            component: AllSectionContainerComponent,
          },
          {
            path: 'paths/ongoing',
            component: AllSectionContainerComponent,
          },
          {
            path: 'courses/ongoing',
            component: AllSectionContainerComponent,
          },
          {
            path: 'courses/favourites',
            component: AllSectionContainerComponent,
          },
          {
            path: 'courses/favourites',
            component: AllSectionContainerComponent,
          },
          {
            path: 'search',
            loadChildren: () =>
              import('../pages/search-page/search-page.module').then(
                (m) => m.SearchPageModule
              ),
          },
          { path: '**', component: PageNotFoundComponent },
        ],
      };
const routes: Routes = [routesCurr];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
