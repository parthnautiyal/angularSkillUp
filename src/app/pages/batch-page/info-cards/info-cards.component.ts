import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.sass'],
})
export class InfoCardsComponent implements OnInit {
  @Input() singleStudent: any = {};
  constructor() {}

  ngOnInit(): void {}
}
