import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass'],
})
export class FormsComponent implements OnInit {
  binding: any = {
    title: String,
    description: String,
  };

  title = 'Angular Template Driven Form';
  loginUser(item: any) {
    console.log(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
