import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { PathPageContentComponent } from './path-page-wrapper/path-page-content/path-page-content.component';
import { PathInfoComponent } from './path-info/path-info.component';
import { PathPageWrapperComponent } from './path-page-wrapper/path-page-wrapper.component';
import { PathPageComponent } from './path-page.component';

@NgModule({
  declarations: [
    PathPageContentComponent,
    PathInfoComponent,
    PathPageComponent,
    PathPageWrapperComponent,
  ],
  imports: [CommonModule, CardsModule],
  exports : [PathPageContentComponent]
})
export class PathPageModule {}
