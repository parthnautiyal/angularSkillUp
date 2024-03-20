import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
})
export class CourseCardComponent implements OnInit {
  progress: number = 75;
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;
  @Input() singleCourse: Course = {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: ''
    },
    createdAt: '',
    isFavourite: false
  };
  constructor() {
  }

  ngOnInit(): void {}
  isButtonRed: boolean = false;

  toggleColor() {
    this.isButtonRed = !this.isButtonRed;
  }
}
