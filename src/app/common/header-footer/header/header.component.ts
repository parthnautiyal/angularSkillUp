import { Component, OnInit } from '@angular/core';
import { BatchDataService } from 'src/app/services/batch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  batchData: any;
  constructor(private batchService: BatchDataService) {}
  isDropdownOpen = false;
  isOrgDropdownOpen = false;
  user = {
    name: 'Naman Gupta',
    email: 'naman.gupta@zopsmart.com',
  };
  profileUrl =
    'https://lh3.googleusercontent.com/a/ACg8ocKgtfnOsRdE9C-aj022TPXRRe6OJ4Dnc5Bj4DkCc6K4Rg=s96-c';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleOrgDropdown() {
    this.isOrgDropdownOpen = !this.isOrgDropdownOpen;
  }
  closeOrgOutside() {
    this.isOrgDropdownOpen = false;
  }

  ngOnInit(): void {
    this.getBatchesData();
  }

  getBatchesData() {
    // return this.batchDataService.getData();
    this.batchService.getAll().subscribe(
      (response) => {
        this.batchData = response;
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
