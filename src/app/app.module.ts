import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
    AppRoutingModule,
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
