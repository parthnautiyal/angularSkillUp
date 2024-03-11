import { Component, OnInit } from '@angular/core';
import { PathDataService } from '../services/path-data.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.sass'],
})
export class ChapterComponent implements OnInit {
  allChapters: any = {};
  constructor(private allChapterServices: PathDataService) {
    this.allChapters = this.allChapterServices.getChapterData();
    console.log('allChapters', this.allChapters);
  }
  ngOnInit(): void {}
}
