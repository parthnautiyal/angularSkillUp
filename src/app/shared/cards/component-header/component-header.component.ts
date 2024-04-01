import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { Option } from 'src/app/models/Options';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.sass'],
})
export class ComponentHeaderComponent implements OnInit {
  @Input() heading: string = '';

  constructor() {
   
  }

  ngOnInit(): void {
      
  }


}
