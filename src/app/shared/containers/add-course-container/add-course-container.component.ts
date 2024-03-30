import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { setPathCreateCourse } from 'src/app/state/action/path-create.action';

@Component({
  selector: 'app-add-course-container',
  templateUrl: './add-course-container.component.html',
  styleUrls: ['./add-course-container.component.sass'],
})
export class AddCourseContainerComponent implements OnInit {
  courses: any[] = [];
  selectedCourses: any[] = [];
  i: number = 0;
  loading: boolean = false;
  constructor(
    private trainer: TrainerMiscellaneousService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.i = this.i + 1;
    this.trainer.getCourses(this.i);
    this.trainer.courses$.subscribe((data) => {
      if (this.i === 1) {
        this.courses = data;
      } else {
        this.courses = [...this.courses, ...data];
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
    this.store.dispatch(
      setPathCreateCourse({ selectedCourses: this.selectedCourses })
    );
    console.log(this.selectedCourses);
  }

  onScroll(percentage: number) {
    if (percentage > 80 && this.i <= 5 && !this.loading) {
      this.loading = true;
      this.i = this.i + 1;
      this.trainer.getCourses(this.i);
    }
  }
}
