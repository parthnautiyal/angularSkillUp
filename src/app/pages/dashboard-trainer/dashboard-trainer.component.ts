import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ERROR, HEADINGS_TITLE } from 'src/app/constants/headingsTitle';
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
  constructor(private messageService: MessageService, private store: Store) {}
  loading: boolean = true;
  headingsTitle = HEADINGS_TITLE;
  error = ERROR;

  ngOnInit(): void {
    this.store.dispatch(loadTrainersCourses({ pageNo: 1 }));
    this.store.dispatch(loadTrainersPaths({ pageNo: 1 }));
  }
  showError(data: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: data,
    });
  }

  // showSuccess() {
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Logged In',
  //     detail: 'Loggin Successful',
  //   });
  // }
}
