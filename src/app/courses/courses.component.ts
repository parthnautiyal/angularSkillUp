import { CourseDataService } from '../services/course-data.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../types/Course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
})
export class CoursesComponent implements OnInit {
  allCourses: any[] = [];
  constructor(private courseDataService: CourseDataService) {
    this.allCourses = this.courseDataService.getData();
  }

  ngOnInit(): void {}
}
