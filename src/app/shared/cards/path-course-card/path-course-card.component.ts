import { Component, Input, OnInit } from '@angular/core';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-path-course-card',
  templateUrl: './path-course-card.component.html',
  styleUrls: ['./path-course-card.component.sass'],
})
export class PathCourseCardComponent implements OnInit {
  RouterLinks = RouterLinks;
  @Input() flag = false;
  @Input() courseData: Course = {
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
  constructor() {
    console.log(this.courseData);
  }

  ngOnInit(): void {}
}
