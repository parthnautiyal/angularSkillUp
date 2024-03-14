import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-peers',
  templateUrl: './batch-peers.component.html',
  styleUrls: ['./batch-peers.component.sass'],
})
export class BatchPeersComponent implements OnInit {
  @Input() studentData: any = [];
  constructor() {}

  ngOnInit(): void {}
}
