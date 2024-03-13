import { BatchDataService } from "../../services/batch-data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-batches-all-section",
  templateUrl: "./batches-all-section.component.html",
  styleUrls: ["./batches-all-section.component.sass"],
})
export class BatchesAllSectionComponent implements OnInit {
  batchCardData: any
  constructor(private batchDataService: BatchDataService) {
  }

  ngOnInit(): void {
    this.getBatchesData()
  }

  getBatchesData() {
    // return this.batchDataService.getData();
   this.batchDataService.getAll().subscribe(
    (response) => {
      this.batchCardData = response
    },
    (error) => {console.log(error)})
  }
}

