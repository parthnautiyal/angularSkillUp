import { Component, Input, OnInit } from '@angular/core';
import { PathDataService } from '../../../../services/path-data.service';
import { Course } from 'src/app/models/Course';
import { Chapter } from 'src/app/models/Chapter';

@Component({
  selector: 'app-chapter-wrapper',
  templateUrl: './chapter-wrapper.component.html',
  styleUrls: ['./chapter-wrapper.component.sass'],
})
export class ChapterWrapperComponent implements OnInit {
  isClicked = true;

  @Input() courseTitles: Chapter = {
    id: 0,
    name: '',
    resourceResponses: [],
    quizResponses: [],
    progress: 0,
  };
  @Input() index: number = 0;

  handleClick() {
    this.isClicked = !this.isClicked;
  }
  constructor() {
    console.log('courseTitles', this.courseTitles);
  }

  ngOnInit(): void {}
}
