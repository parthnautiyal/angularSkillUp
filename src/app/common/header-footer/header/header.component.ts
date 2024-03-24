import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

declare var google: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  userProfile: any;
  isDropdownOpen = false;
  isOrgDropdownOpen = false;
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService, private router: Router) {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    const clickedElement = event.target as Node;
    if (
      this.isDropdownOpen &&
      !document.querySelector('.dropdown')?.contains(clickedElement)
    ) {
      this.isDropdownOpen = false;
    } else if (
      document.querySelector('.profile-image')?.contains(clickedElement) &&
      !this.isDropdownOpen
    ) {
      this.isDropdownOpen = true;
    }
    if (
      this.isOrgDropdownOpen &&
      !document.querySelector('.user-organization')?.contains(clickedElement)
    ) {
      this.isOrgDropdownOpen = false;
    } else if (
      document.querySelector('.org-wrapper')?.contains(clickedElement) &&
      !this.isDropdownOpen
    ) {
      this.isOrgDropdownOpen = true;
    }
  }

  closeDropdown() {
    this.isOrgDropdownOpen = false;
    this.isDropdownOpen = false;
  }
  handleSignout() {
    google.accounts.id.disableAutoSelect();
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
