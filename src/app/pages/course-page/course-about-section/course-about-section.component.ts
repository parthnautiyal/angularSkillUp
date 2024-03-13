import { CourseDataService } from '../../../services/course-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-about-section',
  templateUrl: './course-about-section.component.html',
  styleUrls: ['./course-about-section.component.sass'],
})
export class CourseAboutSectionComponent implements OnInit {
  about: String[] = [];

  constructor(private courseDataService: CourseDataService) {
    this.about = this.courseDataService.getAboutInfo().about.split('\n');
  }

  ngOnInit(): void {}
}
