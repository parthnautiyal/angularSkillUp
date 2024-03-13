import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isDropdownOpen=false;
  isOrgDropdownOpen=false;
  user={
    name:"Naman Gupta",
    email:"naman.gupta@zopsmart.com"
  }
  profileUrl="https://lh3.googleusercontent.com/a/ACg8ocKgtfnOsRdE9C-aj022TPXRRe6OJ4Dnc5Bj4DkCc6K4Rg=s96-c"


  constructor() { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isOrgDropdownOpen = false;
  }
  toggleOrgDropdown() {
    this.isOrgDropdownOpen = !this.isOrgDropdownOpen;
    this.isDropdownOpen = false;
  }
  closeOrgOutside(){
    this.isOrgDropdownOpen =false;
  }
  

  ngOnInit(): void {}
}
