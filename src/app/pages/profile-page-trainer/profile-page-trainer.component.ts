import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileCourse } from 'src/app/models/Course';
import { Path } from 'src/app/models/Path';
import { loadTrainersProfileCourses } from 'src/app/state/action/trainerscourse.actions';
import { loadTrainersProfilePaths } from 'src/app/state/action/trainerspath.actions';
import { selectTrainersProfileCourses } from 'src/app/state/selector/trainerscourse.selector';
import { selectTrainersProfilePaths } from 'src/app/state/selector/trainerspath.selector';

@Component({
  selector: 'app-profile-page-trainer',
  templateUrl: './profile-page-trainer.component.html',
  styleUrls: ['./profile-page-trainer.component.sass'],
})
export class ProfilePageTrainerComponent implements OnInit {
  userProfile: any;
  allpaths: Path[] = [];
  allCourses: ProfileCourse[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '');
    this.store.dispatch(loadTrainersProfilePaths());
    this.store.dispatch(loadTrainersProfileCourses());
    this.store.select(selectTrainersProfilePaths).subscribe((path) => {
      this.allpaths = path;
    });

    this.store.select(selectTrainersProfileCourses).subscribe((courses) => {
      this.allCourses = courses;
      console.log(this.allCourses);
    });
  }
}
