import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllPaths } from 'src/app/state/action/path.action';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.sass'],
})
export class ErrorCardComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleReload() {
    this.store.dispatch(loadAllPaths());
  }
}
