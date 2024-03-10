import { CourseDataService } from './../services/course-data.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../types/Course';
@Component({
  selector: 'app-courses-all-section',
  templateUrl: './courses-all-section.component.html',
  styleUrls: ['./courses-all-section.component.sass'],
})
export class CoursesAllSectionComponent implements OnInit {
  allCourse: Course[] = [];
  constructor(private courseDataService: CourseDataService) {
    this.allCourse = this.courseDataService.getData();
  }

  ngOnInit(): void {}
}
