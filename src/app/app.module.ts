import { CoursePageComponent } from "./pages/course-page/course-page.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardHeaderComponent } from "./pages/dashboard-page/dashboard-header/dashboard-header.component";
import { PathCardComponent } from "./shared/cards/path-card/path-card.component";
import { CourseCardComponent } from "./shared/cards/course-card/course-card.component";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { PathInfoComponent } from "./pages/path-page/path-info/path-info.component";
import { AllSectionComponent } from "./all-section/paths-all-section/all-section.component";
import { CoursesAllSectionComponent } from "./all-section/courses-all-section/courses-all-section.component";
import { CoursesBannerComponent } from "./pages/course-page/courses-banner/courses-banner.component";
import { CourseAboutSectionComponent } from "./pages/course-page/course-about-section/course-about-section.component";
import { ChapterComponent } from "./pages/course-page/chapter/chapter.component";
import { ChapterContentContainerComponent } from "./pages/course-page/chapter/chapter-wrapper/chapter-content-container/chapter-content-container.component";
import { ChapterWrapperComponent } from "./pages/course-page/chapter/chapter-wrapper/chapter-wrapper.component";
import { PathPageContentComponent } from "./pages/path-page/path-page-wrapper/path-page-content/path-page-content.component";
import { PathPageComponent } from "./pages/path-page/path-page.component";
import { PathPageWrapperComponent } from "./pages/path-page/path-page-wrapper/path-page-wrapper.component";
import { BatchCardComponent } from "./shared/cards/batch-card/batch-card.component";
import { BatchHeadingComponent } from "./pages/dashboard-page/dashboard-container/dashboard-container.component";
import { BatchesAllSectionComponent } from "./all-section/batches-all-section/batches-all-section.component";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardHeaderComponent,
    PathCardComponent,
    CourseCardComponent,
    DashboardPageComponent,
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
    BatchCardComponent,
    BatchHeadingComponent,
    BatchesAllSectionComponent,
  ],

  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
