import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PathDataService } from 'src/app/services/path-data.service';

declare var handleSignOut: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  userProfile: any;
  isDropdownOpen = false;
  isOrgDropdownOpen = false;
  user = {
    name: 'Naman Gupta',
    email: 'naman.gupta@zopsmart.com',
  };
  profileUrl =
    'https://lh3.googleusercontent.com/a/ACg8ocKgtfnOsRdE9C-aj022TPXRRe6OJ4Dnc5Bj4DkCc6K4Rg=s96-c';

  constructor(
    private pathDataService: PathDataService,
    private router: Router
  ) {
    // this.pathDataService.getRefreshToken().subscribe(() => {
    setInterval(() => {
      this.pathDataService.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
    // });
    // this.pathDataService.getRefreshToken().subscribe((res: any) => {
    //   localStorage.setItem('token', res.data.accessToken);
    //   console.log('token refreshed');
    // });
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

  handleSignout() {
    handleSignOut();
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
    console.log('signout');

    this.toggleDropdown();
  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }
}
