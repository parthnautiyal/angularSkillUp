import { PathDataService } from './../services/path-data.service';
import { Component, OnInit } from '@angular/core';
import { Paths } from '../types/Paths';
@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.sass'],
})
export class PathsComponent implements OnInit {
  allPaths: any[] = [];
  constructor(private pathDataService: PathDataService) {
    this.allPaths = this.pathDataService.getData().slice(0, 10);
  }
  ngOnInit(): void {}
}
