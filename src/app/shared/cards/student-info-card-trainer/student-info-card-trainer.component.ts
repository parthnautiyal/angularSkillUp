import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-info-card-trainer',
  templateUrl: './student-info-card-trainer.component.html',
  styleUrls: ['./student-info-card-trainer.component.sass'],
})
export class StudentInfoCardTrainerComponent implements OnInit {
  student: Student = {
    id: 1,
    name: 'Rajiv Sirothia',
    email: 'rajiv.sirothia@zopsmart.com',
    imageUrl:
      'https://lh3.googleusercontent.com/a/AEdFTp5RPxggOVTeAj-uvBcdDXc76wt2d37foV6x9Rz6=s96-c',
    noOfCourseEnrollments: 25,
    noOfPathEnrollments: 11,
    noOfCompletedPaths: 0,
    noOfCompletedCourse: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
