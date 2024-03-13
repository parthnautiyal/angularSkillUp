import { PathDataService } from "../../services/path-data.service";
import { Component, OnInit } from "@angular/core";

import { Paths } from "../../models/Paths";
@Component({
  selector: "app-all-section",
  templateUrl: "./all-section.component.html",
  styleUrls: ["./all-section.component.sass"],
})
export class AllSectionComponent implements OnInit {
  allPath: Paths[] = [];
  constructor(private pathDataService: PathDataService) {
    this.allPath = this.pathDataService.getData();
  }
  ngOnInit(): void {}
}
