import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-in-trainer-path-container',
  templateUrl: './courses-in-trainer-path-container.component.html',
  styleUrls: ['./courses-in-trainer-path-container.component.sass']
})
export class CoursesInTrainerPathContainerComponent implements OnInit {
  @Input() courses: any;

  constructor() { }

  ngOnInit(): void {
    console.log("courses",this.courses)
  }

}
