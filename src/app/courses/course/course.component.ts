import { Component, OnInit ,Input} from '@angular/core';
import { Course } from 'src/app/types/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {
  @Input() singleCourse: Course = {} as Course;
  constructor() { }

  ngOnInit(): void {
  }

}
