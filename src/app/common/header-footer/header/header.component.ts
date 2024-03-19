import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';
import { PathDataService } from 'src/app/services/path-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  isOrgDropdownOpen = false;

  user = {
    name: '',
    email: '',
  };
  profileUrl = '';

  constructor(
    private pathDataService: PathDataService,
    private batchService: BatchDataService
  ) {
    this.batchService.getBatchDetails().subscribe((data: any) => {
      console.log(data);

      this.user.name = data.data[0].createdBy.name;
      this.user.email = data.data[0].createdBy.email;
      this.profileUrl = data.data[0].createdBy.imageUrl;
      console.log(this.user);
      console.log(this.profileUrl);
    });

    setInterval(() => {
      this.pathDataService.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isOrgDropdownOpen = false;
  }
  toggleOrgDropdown() {
    this.isOrgDropdownOpen = !this.isOrgDropdownOpen;
    this.isDropdownOpen = false;
  }
  closeOrgOutside() {
    this.isOrgDropdownOpen = false;
  }

  ngOnInit(): void {}
}
