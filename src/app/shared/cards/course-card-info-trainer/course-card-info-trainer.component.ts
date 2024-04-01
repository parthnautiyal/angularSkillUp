import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-card-info-trainer',
  templateUrl: './course-card-info-trainer.component.html',
  styleUrls: ['./course-card-info-trainer.component.sass'],
})
export class CourseCardInfoTrainerComponent implements OnInit {
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
