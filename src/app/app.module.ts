import { CoursePageComponent } from './pages/course-page/course-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PathInfoComponent } from './pages/path-page/path-info/path-info.component';
import { AllSectionComponent } from './all-section/paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './all-section/courses-all-section/courses-all-section.component';
import { CoursesBannerComponent } from './pages/course-page/courses-banner/courses-banner.component';
import { CourseAboutSectionComponent } from './pages/course-page/course-about-section/course-about-section.component';
import { ChapterComponent } from './pages/course-page/chapter/chapter.component';
import { ChapterContentContainerComponent } from './pages/course-page/chapter/chapter-wrapper/chapter-content-container/chapter-content-container.component';
import { ChapterWrapperComponent } from './pages/course-page/chapter/chapter-wrapper/chapter-wrapper.component';
import { PathPageContentComponent } from './pages/path-page/path-page-wrapper/path-page-content/path-page-content.component';
import { PathPageComponent } from './pages/path-page/path-page.component';
import { PathPageWrapperComponent } from './pages/path-page/path-page-wrapper/path-page-wrapper.component';
import { BatchesAllSectionComponent } from './all-section/batches-all-section/batches-all-section.component';
import { LayoutModule } from './layout/layout.module';
import { CardsModule } from './shared/cards/cards.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { DashboardPageModule } from './pages/dashboard-page/dashboard-page.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllSectionComponent,
    CoursesAllSectionComponent,
    CoursesBannerComponent,
    CoursePageComponent,
    CourseAboutSectionComponent,
    ChapterComponent,
    ChapterContentContainerComponent,
    ChapterWrapperComponent,
    PathPageContentComponent,
    PathInfoComponent,
    PathPageComponent,
    PathPageWrapperComponent,
    BatchesAllSectionComponent,
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    CardsModule,
    ProfilePageModule,
    DashboardPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
