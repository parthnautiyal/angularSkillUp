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
  Options: Option[];
  placeholder: string = 'Create Content';

  constructor(private router: Router) {
    this.Options = [
      { name: 'Create Path', link: '/path/new' },
      { name: 'Create Course', link: '/course/new' },
    ];
  }

  ngOnInit(): void {}
  onOptionSelect(link: string) {
    this.router.navigateByUrl(link);
  }
}
