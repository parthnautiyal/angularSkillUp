import { Component, Input, OnInit } from '@angular/core';
import { Batch } from 'src/app/models/Batch';

@Component({
  selector: 'app-batch-card',
  templateUrl: './batch-card.component.html',
  styleUrls: ['./batch-card.component.sass'],
})
export class BatchCardComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  @Input() index: number = 0;
  @Input() batchData: Batch = {
    id: 0,
    name: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
      isActive: false,
    },
    createdAt: '',
    endDate: '',
    streamName: '',
    noOfTrainers: 0,
    noOfStudents: 0,
    noOfPaths: 0,
    isAccessible: false,
    startDate: '',
    stream: {
      streamId: 0,
      streamName: '',
    },
    progress: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
