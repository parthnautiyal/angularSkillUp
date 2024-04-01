import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/Chapter';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';

@Component({
  selector: 'app-show-chapter',
  templateUrl: './show-chapter.component.html',
  styleUrls: ['./show-chapter.component.sass'],
})
export class ShowChapterComponent implements OnInit {
  allChapters: Chapter[] = [];

  @Input() courseId: number = 305;

  constructor(private trainer: TrainerMiscellaneousService) {}

  ngOnInit(): void {
    console.log(this.courseId);

    this.trainer.getCourseChapters(this.courseId);
    this.trainer.getCourseChapters$.subscribe((data) => {
      console.log(data);
      this.allChapters = data;
    });
  }
}
