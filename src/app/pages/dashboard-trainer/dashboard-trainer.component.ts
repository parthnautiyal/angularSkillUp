import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ERROR, HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { loadTrainersCourses } from 'src/app/state/action/trainerscourse.actions';
import { loadTrainersPaths } from 'src/app/state/action/trainerspath.actions';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dashboard-trainer',
  templateUrl: './dashboard-trainer.component.html',
  styleUrls: ['./dashboard-trainer.component.sass'],
})
export class DashboardTrainerComponent implements OnInit {
  firsttime: any;

  constructor(
    private messageService: MessageService,
    private store: Store,
    private trai: TrainerMiscellaneousService
  ) {
    this.firsttime = localStorage.getItem('firsttime');
    if (
      localStorage.getItem('firsttime') == null ||
      localStorage.getItem('firsttime') == undefined
    ) {
      this.firsttime = 'true';
      console.log('im here');
      localStorage.setItem('firsttime', 'true');
    } else localStorage.setItem('firsttime', 'false');

    if (localStorage.getItem('switchedProfile') == 'true') {
      //show toast
      this.trai.success('Switched Profile Successfully');
      localStorage.setItem('switchedProfile', 'false');
    }
  }

  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;
  error = ERROR;

  ngOnInit(): void {
    this.store.dispatch(loadTrainersCourses({ pageNo: 1 }));
    this.store.dispatch(loadTrainersPaths({ pageNo: 1 }));
  }
}
