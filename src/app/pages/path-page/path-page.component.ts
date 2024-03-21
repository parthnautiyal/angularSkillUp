import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadPathById } from 'src/app/state/action/path.action';

@Component({
  selector: 'app-path-page',
  templateUrl: './path-page.component.html',
  styleUrls: ['./path-page.component.sass'],
})
export class PathPageComponent implements OnInit {
  //When the page is navigated back then implement this method
  id: string = '';
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(loadPathById({ id: this.id }));
  }
}
