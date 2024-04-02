import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.sass'],
})
export class NoContentComponent implements OnInit {
  @Input() chapterFlag: boolean = true;
  @Input() width: number = 500; // Set default value to 'auto'
  @Input() marginTop: number = 0;
  @Input() redirectToHomepage: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
