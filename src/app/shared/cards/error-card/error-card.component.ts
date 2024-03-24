import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Title } from 'src/app/constants/enums/title';
import { Error } from 'src/app/models/Error';
import { loadAllBatches } from 'src/app/state/action/batch.action';
import {
  loadAllCourses,
  loadEnrolledCourses,
} from 'src/app/state/action/course.action';
import {
  loadAllPaths,
  loadEnrolledPaths,
} from 'src/app/state/action/path.action';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.sass'],
})
export class ErrorCardComponent implements OnInit {
  @Input() error: Error = {
    message: '',
    code: 0,
  };
  @Input() title: Title = Title.PATHS;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  handleReload() {
    if (this.router.url === '/dashboard') {
      if (this.title === Title.PATHS) {
        this.store.dispatch(loadAllPaths());
      }
      if (this.title === Title.COURSES) {
        this.store.dispatch(loadAllCourses());
      }
      if (this.title === Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
      }
    }
    if (this.router.url === '/user') {
      if (this.title === Title.COURSES) {
        this.store.dispatch(loadEnrolledCourses());
        console.log('Inside error -> ' + this.error.message);
      }
      if (this.title === Title.PATHS) {
        this.store.dispatch(loadEnrolledPaths());
      }
      if (this.title === Title.BATCHES) {
        this.store.dispatch(loadAllBatches());
      }
    }
  }
}
