import { Component, OnInit, Input } from '@angular/core';
import { RouterLinks } from 'src/app/constants/enums/routerLinks';
import { Path } from 'src/app/models/Path';
@Component({
  selector: 'app-path-card',
  templateUrl: './path-card.component.html',
  styleUrls: ['./path-card.component.sass'],
})
export class PathCardComponent implements OnInit {
  RouterLinks = RouterLinks;
  isProfile: boolean =
    localStorage.getItem('profile') === 'true' ? true : false;

  progress: number = 69;
  @Input() singlePath: any = {
    id: 0,
    name: '',
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    noOfCourses: 0,
    progress: 0,
    completedAt: null,
  };
  constructor() {
    console.log(this.singlePath);
  }

  ngOnInit(): void {}
}
