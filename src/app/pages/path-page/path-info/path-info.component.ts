import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPathById } from 'src/app/state/action/path.actions';
import { selectPathById } from 'src/app/state/selector/path.selector';
import { PathData } from 'src/app/models/Path';

@Component({
  selector: 'app-path-info',
  templateUrl: './path-info.component.html',
  styleUrls: ['./path-info.component.sass'],
})
export class PathInfoComponent implements OnInit {
  id: string = '';
  pathData: PathData = {
    id: 0,
    name: '',
    imageUrl: '',
    about: '',
    createdBy: {
      id: 0,
      name: '',
      imageUrl: '',
      email: '',
    },
    updatedAt: '',
    noOfCourses: 0,
    isEnrolled: false,
    isCompleted: false,
    createdAt: '',
    courses: [],
  };
  about: string = '';
  constructor(private store: Store, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.store.select(selectPathById).subscribe((path) => {
      this.pathData = path;
      this.about = this.pathData.about;
      console.log(this.about);
    });
  }
}
