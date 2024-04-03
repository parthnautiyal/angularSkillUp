import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TrainerPathData } from 'src/app/models/TrainerPathData';
import {
  loadTrainerPathData,
  loadTrainerPathDataFailure,
} from 'src/app/state/action/trainerspath.actions';
import {
  selectTrainerPathData,
  selectTrainerPathDataError,
} from 'src/app/state/selector/trainerspath.selector';

@Component({
  selector: 'app-trainer-path-page',
  templateUrl: './trainer-path-page.component.html',
  styleUrls: ['./trainer-path-page.component.sass'],
})
export class TrainerPathPageComponent implements OnInit {
  @Input() id: number = 0;
  pathInfo: TrainerPathData = {
    pathId: 0,
    pathName: '',
    imageUrl: '',
    isAccessible: false,
    isOwner: false,
    description: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    createdAt: '',
    updatedAt: '',
    collaborators: [],
    courses: [],
    courseIds: [],
  };
  erroroccured: boolean = false;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(loadTrainerPathData({ id: this.id }));
    this.store.select(selectTrainerPathDataError).subscribe((error) => {
      if (error != null) this.erroroccured = true;
    });
    this.store.select(selectTrainerPathData).subscribe((pathData) => {
      console.log(pathData);
      this.pathInfo = pathData;
    });
  }

  ngOnInit(): void {}
}
