import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.sass'],
})
export class NoContentComponent implements OnInit {
  @Input() chapterFlag: boolean = true;
  @Input() width: string = '82vw'; // Set default value to 'auto'
  @Input() height: string = '75vh'; // Set default value to 'auto'
  @Input() marginTop: string = '0px';

  constructor() {}

  ngOnInit(): void {}
}
