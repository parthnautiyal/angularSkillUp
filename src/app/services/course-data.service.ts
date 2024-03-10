import { Injectable } from '@angular/core';
import { Course } from '../types/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseDataService {
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
  getData() {
    return this.allCourses;
  }
  constructor() {}
}
