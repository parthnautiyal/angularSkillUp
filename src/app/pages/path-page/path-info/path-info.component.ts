import { PathDataService } from "../../../services/path-data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-path-info",
  templateUrl: "./path-info.component.html",
  styleUrls: ["./path-info.component.sass"],
})
export class PathInfoComponent implements OnInit {
  pathData: any = {};
  about:string[] = [];
  constructor(private pathDataService: PathDataService) {
    this.pathData = this.pathDataService.getPathData();
    this.about = this.pathData.about.split('\n');
  }

  ngOnInit(): void {}
}
