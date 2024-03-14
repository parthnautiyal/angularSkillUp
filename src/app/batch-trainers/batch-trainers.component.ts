import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-trainers',
  templateUrl: './batch-trainers.component.html',
  styleUrls: ['./batch-trainers.component.sass']
})
export class BatchTrainersComponent implements OnInit {
@Input() trainerData:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
