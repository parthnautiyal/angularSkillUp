import { CourseDataService } from "../../../services/course-data.service";
import { PathDataService } from "../../../services/path-data.service";
import { Component, Input, OnInit } from "@angular/core";
import { BatchDataService } from "../../../services/batch-data.service";
@Component({
  selector: "app-dashboard-container",
  templateUrl: "./dashboard-container.component.html",
  styleUrls: ["./dashboard-container.component.sass"],
})
export class BatchHeadingComponent implements OnInit {
  @Input() title: string = "";
  batchData : any
  coursesData : any
  pathData : any
  // path: string = '';

  constructor(
    private batchDataService: BatchDataService,
    private pathDataService: PathDataService,
    private courseDataService: CourseDataService
  ) {}
  
  ngOnInit() :void {
    this.getBatchesData()
    this.getCoursesData()
    this.getPathsData()
  }
  
  
  getBatchesData() {
    // return this.batchDataService.getData();
   this.batchDataService.getAll().subscribe(
    (response) => {
      this.batchData = response
    },
    (error) => {console.log(error)})
  }

  getCoursesData() {
    // return this.courseDataService.getData();
   this.courseDataService.getCourseData().subscribe(
    (response) => {
      this.coursesData = response
    },
    (error) => {console.log(error)})
  }

  getPathsData() {
    this.pathDataService.getDataV2().subscribe(
    (response) => {
      this.pathData = response
    },
    (error) => {console.log(error)})
  }
}
