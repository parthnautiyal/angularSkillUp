import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  handelButtonClick() {
    this.eventEmitter.emit(true);
  }
}
