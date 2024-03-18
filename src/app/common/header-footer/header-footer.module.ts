import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from './header/theme-toggle/theme-toggle.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ThemeToggleComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,RouterModule, MatIconModule
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class HeaderFooterModule { }
