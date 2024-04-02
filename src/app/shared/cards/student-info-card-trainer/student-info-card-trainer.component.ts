import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-info-card-trainer',
  templateUrl: './student-info-card-trainer.component.html',
  styleUrls: ['./student-info-card-trainer.component.sass'],
})
export class StudentInfoCardTrainerComponent implements OnInit {
  @Input() student: Student = {
    id: 0,
    name: '',
    email: '',
    imageUrl: '',
    noOfCourseEnrollments: 0,
    noOfPathEnrollments: 0,
    noOfCompletedPaths: 0,
    noOfCompletedCourse: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
