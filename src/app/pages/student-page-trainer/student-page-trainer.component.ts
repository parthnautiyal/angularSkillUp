import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/models/Student';
import { loadAllStudents } from 'src/app/state/action/studentData.actions';
import { selectStudents } from 'src/app/state/selector/studentData.selector';

@Component({
  selector: 'app-student-page-trainer',
  templateUrl: './student-page-trainer.component.html',
  styleUrls: ['./student-page-trainer.component.sass'],
})
export class StudentPageTrainerComponent implements OnInit {
  allStudents: Student[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllStudents({ pageNo: 1 }));
    this.store.select(selectStudents).subscribe((students) => {
      this.allStudents = students;
    });
  }
}
