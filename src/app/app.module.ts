import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';
import { CoursePageModule } from './pages/course-page/course-page.module';
import { PathPageModule } from './pages/path-page/path-page.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoginComponent],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
    CoursePageModule,
    PathPageModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
