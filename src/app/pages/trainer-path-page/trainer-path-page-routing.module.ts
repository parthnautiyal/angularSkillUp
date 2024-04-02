import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TrainerPathPageComponent } from './trainer-path-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrainerPathPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerPathPageRoutingModule {}
