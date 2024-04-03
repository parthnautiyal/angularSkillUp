import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import {
  setPathCreateCollaborators,
  setSearchCollaborators,
} from 'src/app/state/action/path-create.action';
import { selectPathCreateCollaborators } from 'src/app/state/selector/path-create.selector';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-collaborator-container',
  templateUrl: './add-collaborator-container.component.html',
  styleUrls: ['./add-collaborator-container.component.sass'],
})
export class AddCollaboratorContainerComponent implements OnInit {
  collaborators: User[] = [];
  selectedCollaborators: User[] = [];
  searchValue: string = '';

  i: number = 0;
  loading: boolean = false;
  constructor(
    private trainer: TrainerMiscellaneousService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.i = this.i + 1;
    this.trainer.getAllCollaborators(this.i);
    this.trainer.collaborators$.subscribe((data) => {
      if (this.i === 1) {
        this.collaborators = data;
      } else {
        this.collaborators = [...this.collaborators, ...data];
        this.loading = false;
      }
    });

    this.searchSubject
      .pipe(
        debounceTime(2000),
        switchMap((searchValue) => this.trainer.searchCollaborator(searchValue))
      )
      .subscribe((data) => {
        this.collaborators = data.data;
      });
  }

  ngOnDestroy() {
    this.store.dispatch(
      setPathCreateCollaborators({
        selectedCollaborators: this.selectedCollaborators,
      })
    );
    console.log(this.selectedCollaborators);
  }

  onScroll(percentage: number) {
    if (percentage > 80 && this.i <= 5 && !this.loading) {
      this.loading = true;
      this.i = this.i + 1;
      this.trainer.getAllCollaborators(this.i);
    }
  }

  searchSubject = new Subject<string>();

  submitSearch(event: any) {
    console.log('submitSearch');
    // event.preventDefault();
    this.searchSubject.next(this.searchValue);
  }
}
