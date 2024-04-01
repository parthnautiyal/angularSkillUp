import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/Chapter';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';

@Component({
  selector: 'app-show-chapter',
  templateUrl: './show-chapter.component.html',
  styleUrls: ['./show-chapter.component.sass'],
})
export class ShowChapterComponent implements OnInit {
  isReorder: boolean = false;
  allChapters: Chapter[] = [];
  reorderArray: number[] = [];

  @Input() courseId: number = 305;

  constructor(private trainer: TrainerMiscellaneousService) {}

  ngOnInit(): void {
    console.log(this.courseId);

    this.trainer.getCourseChapters(this.courseId);
    this.trainer.getCourseChapters$.subscribe((data) => {
      console.log(data);
      this.allChapters = [...data];
    });
  }
  handleReorder() {
    this.isReorder = true;
  }

  handleReorderSubmit() {
    this.reorderArray = this.allChapters.map((chapter) => chapter.id);

    this.trainer
      .reorderChapters(this.courseId, this.reorderArray)
      .subscribe((data) => {
        console.log(data);
        this.trainer.getCourseChapters(this.courseId);
        this.isReorder = false;
      });
  }
  handleReorderCancel() {
    this.isReorder = false;
  }
}
