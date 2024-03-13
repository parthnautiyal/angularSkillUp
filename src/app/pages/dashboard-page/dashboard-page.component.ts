import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  constructor() {}
  headingsTitle: string[] = ['batches', 'paths', 'courses'];

  ngOnInit(): void {}
}
