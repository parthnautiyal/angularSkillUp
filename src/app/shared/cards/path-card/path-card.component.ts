import { Component, OnInit, Input } from '@angular/core';
import { Path } from 'src/app/models/Path';
@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.sass'],
})
export class PathCardComponent implements OnInit {
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  progress: number = 69;
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
