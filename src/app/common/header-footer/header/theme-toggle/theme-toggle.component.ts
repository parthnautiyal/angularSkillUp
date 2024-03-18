import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.sass']
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private themeService:ThemeService) { 
    document.body.classList.add('light-theme');
    this.isDarkMode=this.themeService.isDarkMode();
  }

  toggleTheme(){
    this.isDarkMode=!this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
  ngOnInit(): void {
  }

}
