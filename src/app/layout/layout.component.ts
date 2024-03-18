import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  isLogin: boolean = true;

  constructor() {
    this.isLogin = localStorage.getItem('login') == 'true' ? true : false;
  }

  ngOnInit(): void {}
}
