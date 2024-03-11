import { Component, OnInit, Input } from '@angular/core';
import { Paths } from 'src/app/types/Paths';
@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.sass'],
})
export class PathComponent implements OnInit {
  @Input() singlePath: any = {};
  constructor() {}

  ngOnInit(): void {}
}
