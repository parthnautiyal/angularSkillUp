import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/models/Student';
import { loadAllStudents } from 'src/app/state/action/studentData.actions';
import { selectStudents, selectStudentsError } from 'src/app/state/selector/studentData.selector';

@Component({
  selector: 'app-student-page-trainer',
  templateUrl: './student-page-trainer.component.html',
  styleUrls: ['./student-page-trainer.component.sass'],
})
export class StudentPageTrainerComponent implements OnInit {
  allStudents: Student[] = [];
  loading: Boolean = false;
  i: number = 0;
  error: Boolean = false;
  constructor(private store: Store) {}

  onScroll(percentage: number) {
    if (percentage > 80 && this.i <= 5 && !this.loading) {
      this.loading = true;
      this.i = this.i + 1;
      this.store.dispatch(loadAllStudents({ pageNo: this.i }));
    }
  }


  ngOnInit(): void {
    this.store.dispatch(loadAllStudents({ pageNo: 1 }));
    this.i = this.i + 1;

    this.store.select(selectStudents).subscribe((data) => {
      console.log(data);
      if (this.i === 1) {
        this.allStudents = data;
      } else {
        this.allStudents = [...this.allStudents, ...data];
        this.loading = false;
      }
    });
  }
}

