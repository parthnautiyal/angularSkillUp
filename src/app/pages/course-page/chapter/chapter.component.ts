import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../../services/course-data.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})
export class ChapterComponent implements OnInit {
  allChapters: any = {};
  constructor(private allChapterServices: CourseDataService) {
    this.allChapters = this.allChapterServices.getChapterData();
    console.log('allChapters', this.allChapters);
  }
  ngOnInit(): void {}
}
