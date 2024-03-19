import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import { PathPageModule } from './pages/path-page/path-page.module';
import { BatchPageModule } from './pages/batch-page/batch-page.module';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZopsmartApiInterceptorService } from './services/zopsmart-api-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { courseReducer } from './state/reducer/course.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/effects/course.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BatchEffects } from './state/effects/batch.effect';
import { batchReducer } from './state/reducer/batch.reducer';

import { CircularProgressBarComponent } from './shared/circular-progress-bar/circular-progress-bar.component';
@NgModule({
  declarations: [AppComponent, CircularProgressBarComponent],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
    CoursePageModule,
    PathPageModule,
    BatchPageModule,
    FormsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
    StoreModule.forRoot({ courses: courseReducer, batch: batchReducer }),
    EffectsModule.forRoot([CourseEffects, BatchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZopsmartApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
