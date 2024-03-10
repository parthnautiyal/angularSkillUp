import { Component, OnInit } from '@angular/core';
import { Course } from '../types/Course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  allCourses: Course[] = [
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
    {
      image: './assets/course.webp',
      title: 'Java Script Monthly forum',
      author: 'Nyaz khan',
    },
  ];
}
