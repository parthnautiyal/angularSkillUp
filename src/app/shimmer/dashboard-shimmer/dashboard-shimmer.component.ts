import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-shimmer',
  templateUrl: './dashboard-shimmer.component.html',
  styleUrls: ['./dashboard-shimmer.component.sass'],
})
export class DashboardShimmerComponent implements OnInit {
  @Input() shimmerCount: number = 9;

  constructor() {}

  ngOnInit() {}
}
