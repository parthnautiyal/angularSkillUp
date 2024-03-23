import { Component, OnInit, Input } from '@angular/core';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.sass'],
})
export class CourseCardComponent implements OnInit {
  RouterLinks = RouterLinks;
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;
  @Input() singleCourse: Course = {
    id: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
  };
  constructor() {}

  ngOnInit(): void {}
  isButtonRed: boolean = false;

  toggleColor() {
    this.isButtonRed = !this.isButtonRed;
  }
}
