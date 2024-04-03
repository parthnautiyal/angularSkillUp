import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { ERROR, HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { loadAllBatches } from 'src/app/state/action/batch.actions';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.actions';
import { loadAllPaths } from 'src/app/state/action/path.actions';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.sass'],
})
export class DashboardPageComponent implements OnInit {
  firsttime: any;
  constructor(
    private trainer: TrainerMiscellaneousService,
    private store: Store
  ) {
    this.firsttime = localStorage.getItem('firsttime');

    if (localStorage.getItem('switchedProfile') == 'true') {
      console.log('im am hereeeeeee aa');
      //show toast
      this.trainer.success('Switched Profile Successfully');
      localStorage.setItem('switchedProfile', 'false');
    }
  }
  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;
  error = ERROR;

  ngOnInit(): void {
    this.store.dispatch(loadAllCourses());
    this.store.dispatch(loadEnrolledCourses());
    this.store.dispatch(loadAllBatches());
    this.store.dispatch(loadAllPaths());
  }
}
