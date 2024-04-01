import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resource } from 'src/app/models/CreateCourse';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { selectResource } from 'src/app/state/selector/path-create.selector';

@Component({
  selector: 'app-show-resource',
  templateUrl: './show-resource.component.html',
  styleUrls: ['./show-resource.component.sass'],
})
export class ShowResourceComponent implements OnInit {
  createResouce: boolean = false;
  copyResource: Resource[] = [];
  @Input() courseId: number = 283;
  allResources: Resource[] = [];

  constructor(
    private trainer: TrainerMiscellaneousService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.trainer.getCourseResources(this.courseId);
    this.trainer.getCourseResources$.subscribe((data) => {
      this.allResources = data;
    });

    this.store.select(selectResource).subscribe((data) => {
      if (data.id != null) {
        data.id = '';
        this.copyResource = [...this.allResources];
        this.copyResource.push(data);
        this.trainer
          .patchCourse(this.courseId, this.copyResource)
          .subscribe((data) => {
            console.log(data);
          });
      }
    });
  }

  handleResourceButton() {
    this.createResouce = true;
  }

  reset() {
    this.createResouce = false;
  }
}
