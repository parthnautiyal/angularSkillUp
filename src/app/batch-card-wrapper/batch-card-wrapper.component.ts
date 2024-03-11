import { BatchDataService } from './../services/batch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-card-wrapper',
  templateUrl: './batch-card-wrapper.component.html',
  styleUrls: ['./batch-card-wrapper.component.sass'],
})
export class BatchCardWrapperComponent implements OnInit {
  batchDataArray: any[] = [];

  constructor(private batchDataService: BatchDataService) {
    this.batchDataArray = this.batchDataService.getData();
  }

  ngOnInit(): void {}
}
