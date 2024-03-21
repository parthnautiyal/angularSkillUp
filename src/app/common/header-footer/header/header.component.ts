import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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

  constructor(
    private pathDataService: PathDataService,
    private router: Router,
    private eref: ElementRef
  ) {
    // this.pathDataService.getRefreshToken().subscribe(() => {
    setInterval(() => {
      this.pathDataService.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    const clickedElement = event.target as Node;
    if (this.isDropdownOpen && !document.querySelector('.dropdown')?.contains(clickedElement)){
      this.isDropdownOpen = false;
    }
    else if (document.querySelector('.profile-image')?.contains(clickedElement) && !this.isDropdownOpen) {
      this.isDropdownOpen = true;
    }
    if (this.isOrgDropdownOpen && !document.querySelector('.user-organization')?.contains(clickedElement)){
      this.isOrgDropdownOpen = false;
    }else if (document.querySelector('.org-image')?.contains(clickedElement) && !this.isDropdownOpen){
      this.isOrgDropdownOpen = true;
    }
  }
  
  closeDropdown() {
    this.isOrgDropdownOpen = false;
    this.isDropdownOpen = false;
  }

  handleSignout() {
    handleSignOut();
    sessionStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
    console.log('signout');
    this.closeDropdown();
  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
    console.log('Profile Picture ' + this.userProfile.picture);
  }
}
