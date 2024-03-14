import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';

@Component({
  selector: 'app-batch-page',
  templateUrl: './batch-page.component.html',
  styleUrls: ['./batch-page.component.sass']
})
export class BatchPageComponent implements OnInit {

  trainerData:any[]=[];
  studentData:any[]=[];
  batchDetails:any[]=[];
  paths:any[]=[];

  
  constructor(private batchDataService:BatchDataService) {
    const batchData = batchDataService.getBatchData();
     this.batchDetails = batchData[0];
     this.studentData = batchData[1];
     this.trainerData = batchData[2];
     this.paths = batchData[3];
   }

  ngOnInit(): void {
  }

}
