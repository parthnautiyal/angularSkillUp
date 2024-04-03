import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from 'src/app/models/Options';

@Component({
  selector: 'app-trainer-dashboard-header',
  templateUrl: './trainer-dashboard-header.component.html',
  styleUrls: ['./trainer-dashboard-header.component.sass'],
})
export class TrainerDashboardHeaderComponent implements OnInit {
  @Input() heading: string = '';
  Options: Option[];
  placeholder: string = 'Create Content';

  constructor(private router: Router) {
    this.Options = [
      { name: 'Create Path', link: '/path/new' },
      { name: 'Create Course', link: '/new/course' },
    ];
  }

  ngOnInit(): void {}
  onOptionSelect(link: string) {
    this.router.navigateByUrl(link);
  }
}
