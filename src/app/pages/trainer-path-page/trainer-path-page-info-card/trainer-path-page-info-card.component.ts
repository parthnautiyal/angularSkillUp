import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-path-page-info-card',
  templateUrl: './trainer-path-page-info-card.component.html',
  styleUrls: ['./trainer-path-page-info-card.component.sass']
})

export class TrainerPathPageInfoCardComponent implements OnInit {

  checked: boolean = false;
  @Input()pathCardInfo:any={}

  constructor() { }

  ngOnInit(): void {
    this.checked=this.pathCardInfo.isAccessible;
  }

  publishPath() {
    this.pathCardInfo.isAccessible = !this.pathCardInfo.isAccessible;
  }

}
