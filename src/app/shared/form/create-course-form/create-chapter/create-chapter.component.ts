import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateChapter, Quiz, Resource } from 'src/app/models/CreateCourse';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import {
  selectQuiz,
  selectResource,
} from 'src/app/state/selector/path-create.selector';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.sass'],
})
export class CreateChapterComponent implements OnInit {
  @Input() courseId = 283;
  @Output() close = new EventEmitter<void>();
  showContent: boolean = false;
  showError: boolean = false;
  showQuiz: boolean = false;
  allReady: boolean = false;
  allContents: Resource[] = [];
  allQuizes: Quiz[] = [];
  chapter: CreateChapter = {
    name: '',
    resources: [],
    quizzes: [],
  };

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private trainer: TrainerMiscellaneousService
  ) {}

  createChapter = this.fb.group({
    chapterName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
  });

  ngOnInit(): void {
    this.store.select(selectResource).subscribe((res) => {
      console.log(res);

      if (res.id != null) {
        this.allContents.push(res);
        console.log(this.allContents);
      }
    });
    this.store.select(selectQuiz).subscribe((res) => {
      console.log(res);

      if (res.id != null) {
        this.allQuizes.push(res);
        console.log(this.allQuizes);
      }
    });
  }

  handleSubmit() {
    console.log(this.createChapter.valid);
    console.log(this.allContents.length);
    console.log(this.allQuizes.length);

    if (
      this.createChapter.valid &&
      (this.allContents.length > 0 || this.allQuizes.length > 0)
    ) {
      this.chapter.name = this.createChapter.value.chapterName || '';
      this.chapter.resources = this.allContents;
      this.chapter.quizzes = this.allQuizes;
      this.trainer
        .createChapter(this.courseId, this.chapter)
        .subscribe((res) => {
          console.log(res);
        });
      console.log(this.chapter);
      this.close.emit();
    } else {
      console.log('error');

      this.showError = true;
    }
  }

  deleteContent(index: number) {
    this.allContents.splice(index, 1);
  }

  handleContentButton() {
    this.showContent = true;
    this.showQuiz = false;
  }
  handleQuizButton() {
    this.showContent = false;
    this.showQuiz = true;
  }
  reset() {
    this.showQuiz = false;
    this.showContent = false;
  }
  checkValidity() {
    if (this.createChapter.valid) {
      this.allReady = true;
    } else {
      this.allReady = false;
    }
  }
}
