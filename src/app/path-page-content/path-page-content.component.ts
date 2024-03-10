import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-page-content',
  templateUrl: './path-page-content.component.html',
  styleUrls: ['./path-page-content.component.sass']
})
export class PathPageContentComponent implements OnInit {
 @Input() courseData:any={};
  constructor() { }

  ngOnInit(): void {
  }

}
