import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';

declare var google: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  selectedRole: string='';
  userProfile: any;
  isDropdownOpen = false;
  isOrgDropdownOpen = false;
  isDarkMode: boolean = false;
  isResponsive: boolean = false;
  searchQuery: string = '';
  selectedUserRole: string = localStorage.getItem('selectedRole') || 'TRAINER';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private trainer: TrainerMiscellaneousService
  ) {
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
    this.trainer.success('Logged Out successfully');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
    this.closeDropdown();
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.isResponsive = window.innerWidth <= 768;
  }

  ngOnInit(): void {
    this.selectedRole = localStorage.getItem('selectedRole') || '' ;

    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
    setTimeout(() => {
      this.onResize();
    }, 100);
  }

  submitSearch() {
    // console.log(this.searchQuery); // replace this with your actual logic
    if (!this.searchQuery) {
      // If searchQuery is null or empty, return early
      return;
    }
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
  }
}
