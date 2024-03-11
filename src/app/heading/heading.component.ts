import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.sass'],
})
export class BatchHeadingComponent implements OnInit {
  @Input() heading: string = '';

  path: string = '/' + this.heading + '/all';

  constructor() {
    console.log(this.path);
    
  }

  ngOnInit(): void {}
}
