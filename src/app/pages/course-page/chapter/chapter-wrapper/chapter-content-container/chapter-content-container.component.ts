import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-content-container',
  templateUrl: './chapter-content-container.component.html',
  styleUrls: ['./chapter-content-container.component.sass'],
})
export class ChapterContentContainerComponent implements OnInit {
  @Input() allChapters: any = {};
  constructor() {}

  ngOnInit(): void {}
}
