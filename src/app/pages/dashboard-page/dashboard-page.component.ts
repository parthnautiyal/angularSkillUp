import { Component, OnInit } from '@angular/core';
import { PathDataService } from 'src/app/services/path-data.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private apiService: PathDataService) {
    this.apiService.getPaths();
  }
  loading: boolean = false;
  headingsTitle: string[] = ['batches', 'paths', 'courses'];

  ngOnInit(): void {}
}
