import { Component, Input, OnInit } from '@angular/core';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Path } from 'src/app/models/Path';

@Component({
  selector: 'app-path-card-trainer',
  templateUrl: './path-card-trainer.component.html',
  styleUrls: ['./path-card-trainer.component.sass'],
})
export class PathCardTrainerComponent implements OnInit {
  @Input() onGoingFlag: boolean = false;
  RouterLinks = RouterLinks;
  isProfile: boolean = false;
  @Input() singlePath: Path = {
    id: 0,
    name: '',
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    noOfCourses: 0,
    progress: 0,
    completedAt: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
