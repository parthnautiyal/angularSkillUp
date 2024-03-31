import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-card-trainer',
  templateUrl: './batch-card-trainer.component.html',
  styleUrls: ['./batch-card-trainer.component.sass'],
})
export class BatchCardTrainerComponent implements OnInit {
  @Input() index: number = 0;
  @Input() progress: number = 0;

  @Input() batchData: any = {
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
    progress: 10,
  };

  constructor() {}

  ngOnInit(): void {}
}
