import { CourseDataService } from "../../services/course-data.service";
import { Component, OnInit } from "@angular/core";
import { Course } from "../../models/Course";
@Component({
  selector: "app-courses-all-section",
  templateUrl: "./courses-all-section.component.html",
  styleUrls: ["./courses-all-section.component.sass"],
})
export class CoursesAllSectionComponent implements OnInit {
  allCourse: any
  constructor(private courseDataService: CourseDataService) {
  }

  ngOnInit(): void {
    this.getCoursesData()
  }
  
  getCoursesData() {
   this.courseDataService.getCourseData().subscribe(
    (response) => {
      this.allCourse = response
    },
    (error) => {console.log(error)})
  }
}
