import { BatchDataService } from './../services/batch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-all-section',
  templateUrl: './batches-all-section.component.html',
  styleUrls: ['./batches-all-section.component.sass']
})
export class BatchesAllSectionComponent implements OnInit {

  batchCardArray:any[]=[];
  constructor(private batchDataService:BatchDataService) {
    this.batchCardArray=this.batchDataService.getData();
   }

  ngOnInit(): void {
  }

}
