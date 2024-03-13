import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  batchData : any
  constructor(
    private batchService : BatchDataService
  ) {}

  ngOnInit(): void {
    this.getBatchesData()
  }

  getBatchesData() {
    // return this.batchDataService.getData();
   this.batchService.getAll().subscribe(
    (response) => {
      this.batchData = response
    },
    (error) => {console.log(error)})
  }
}
