import { PathDataService } from '../../services/path-data.service';
import { Component, OnInit } from '@angular/core';

import { Paths } from '../../models/Paths';
@Component({
  selector: 'app-all-section',
  templateUrl: './all-section.component.html',
  styleUrls: ['./all-section.component.sass'],
})
export class AllSectionComponent implements OnInit {
  allPath: any;
  constructor(private pathDataService: PathDataService) {}
  ngOnInit(): void {
    this.getPathsData();
  }

  getPathsData() {
    this.pathDataService.getDataV2().subscribe(
      (response) => {
        this.allPath = response;
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
