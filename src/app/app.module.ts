import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './error-page/page-not-found/page-not-found.module';
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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PathEffects } from './state/effects/path.effect';
import { pathReducer } from './state/reducer/path.reducer';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
    AppRoutingModule,
    StoreModule.forRoot({
      courses: courseReducer,
      batch: batchReducer,
      path: pathReducer,
    }),
    EffectsModule.forRoot([CourseEffects, BatchEffects, PathEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
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
