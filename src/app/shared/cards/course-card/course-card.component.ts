import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.sass"],
})
export class CourseCardComponent implements OnInit {
  @Input() singleCourse: any = {};
  constructor() {}

  ngOnInit(): void {}
}
