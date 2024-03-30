import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-card-trainer',
  templateUrl: './course-card-trainer.component.html',
  styleUrls: ['./course-card-trainer.component.sass'],
})
export class CourseCardTrainerComponent implements OnInit {
  @Input() course: Course = {
    id: 0,
    courseId: 0,
    name: '',
    courseName: '',
    imageUrl: '',
    isAccessible: false,
    description: '',
    about: '',
    createdBy: { id: 0, name: '', imageUrl: '', email: '' },
    createdAt: '',
    isFavourite: false,
    progress: 0,
    enrolledAt: '',
    completedAt: '',
    noOfChapters: 0,
    updatedAt: '',
    level: 0,
    collaborators: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
