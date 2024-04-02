import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-in-trainer-path-card',
  templateUrl: './course-in-trainer-path-card.component.html',
  styleUrls: ['./course-in-trainer-path-card.component.sass']
})
export class CourseInTrainerPathCardComponent implements OnInit {
  @Input() course:any={};

  formattedDate : string | null = '';

  constructor(private datePipe : DatePipe) { 
  }

  ngOnInit(): void {
    console.log(this.course)
    const timestamp = this.course.createdAt;

    const parsedDate = new Date(timestamp);

    this.formattedDate = this.datePipe.transform(parsedDate, 'dd MMM yyyy');
  }

}
