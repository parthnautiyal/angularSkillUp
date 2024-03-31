import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageTrainerComponent } from './profile-page-trainer.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageTrainerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageTrainerRoutingModule {}
