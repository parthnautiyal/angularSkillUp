import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';

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

  constructor(private overLay: OverlayContainer) { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleOrgDropdown() {
    this.isOrgDropdownOpen = !this.isOrgDropdownOpen;
  }
  closeOrgOutside(){
    this.isOrgDropdownOpen =false
  }

  toggleControl = new FormControl(false);
  @HostBinding('class') className = ''
  darkClassName = 'theme-dark';
  lightClassName = "theme-light";

  ngOnInit(){
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode? this.darkClassName : this.lightClassName;
      if(darkMode){
        this.overLay.getContainerElement().classList.add(this.darkClassName);
      }
      else{
        this.overLay.getContainerElement().classList.remove(this.darkClassName);
      }
    })
  }
}
