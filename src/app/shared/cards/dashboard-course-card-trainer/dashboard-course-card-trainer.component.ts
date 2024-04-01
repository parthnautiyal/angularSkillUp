import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-dashboard-course-card-trainer',
  templateUrl: './dashboard-course-card-trainer.component.html',
  styleUrls: ['./dashboard-course-card-trainer.component.sass'],
})
export class DashboardCourseCardTrainerComponent implements OnInit {
  i: number = 0;
  loading: boolean = false;
  checked: boolean = false;

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
  courses: any[] = [];

  toggleChecked() {
    this.checked = !this.checked;
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.checked = this.course.isAccessible;
  }
}
