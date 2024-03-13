import { CourseDataService } from '../../../services/course-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-banner',
  templateUrl: './courses-banner.component.html',
  styleUrls: ['./courses-banner.component.sass'],
})
export class CoursesBannerComponent implements OnInit {
  constructor(courseDataService: CourseDataService) {
    this.CourseDetails = courseDataService.getAboutInfo();
  }

  ngOnInit(): void {}
  CourseDetails: any = {};
}
