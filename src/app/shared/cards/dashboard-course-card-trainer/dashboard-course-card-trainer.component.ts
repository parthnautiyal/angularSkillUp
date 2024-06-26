import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/Course';
import {
  PublishTrainersCourse,
  RemoveTrainersCourse,
} from 'src/app/state/action/trainerscourse.actions';

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

  toggleChecked(id: any) {
    // this.checked = !this.checked;

    this.store.dispatch(
      PublishTrainersCourse({
        id: id,
        body: { isAccessible: this.checked },
      })
    );
  }
  RemoveCourse(id: any) {
    this.store.dispatch(RemoveTrainersCourse({ id }));
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.checked = this.course.isAccessible;
  }
}
