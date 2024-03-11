import { IndivigualCourseComponent } from './pages/indivigual-course/indivigual-course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { PathsComponent } from './paths/paths.component';
import { PathComponent } from './path/path.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course-card/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerStripComponent } from './banner-strip/banner-strip.component';
import { PathInfoComponent } from './path-info/path-info.component';
import { AllSectionComponent } from './paths-all-section/all-section.component';
import { CoursesAllSectionComponent } from './courses-all-section/courses-all-section.component';
import { CoursesBannerComponent } from './courses-banner/courses-banner.component';
import { CourseAboutSectionComponent } from './course-about-section/course-about-section.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterContentContainerComponent } from './chapter-content-container/chapter-content-container.component';
import { ChapterWrapperComponent } from './chapter-wrapper/chapter-wrapper.component';
import { PathPageContentComponent } from './path-page-content/path-page-content.component';
import { PathDashboardComponent } from './path-dashboard/path-dashboard.component';
import { PathPageWrapperComponent } from './path-page-wrapper/path-page-wrapper.component';
import { BatchCardComponent } from './batch-card/batch-card.component';
import { BatchHeadingComponent } from './heading/heading.component';
import { BatchCardWrapperComponent } from './batch-card-wrapper/batch-card-wrapper.component';
import { BatchesAllSectionComponent } from './batches-all-section/batches-all-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardHeaderComponent,
    PathsComponent,
    PathComponent,
    CoursesComponent,
    CourseComponent,
    DashboardComponent,
    AllSectionComponent,
    CoursesAllSectionComponent,
    CoursesBannerComponent,
    IndivigualCourseComponent,
    CourseAboutSectionComponent,
    ChapterComponent,
    ChapterContentContainerComponent,
    ChapterWrapperComponent,
    PathPageContentComponent,
    PathInfoComponent,
    BannerStripComponent,
    PathDashboardComponent,
    PathPageWrapperComponent,
    BatchCardComponent,
    BatchHeadingComponent,
    BatchCardWrapperComponent,
    BatchesAllSectionComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
