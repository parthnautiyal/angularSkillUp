import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateResource, Resource } from 'src/app/models/CreateCourse';
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
  copyCurrentResource: CreateResource = {
    resourceName: '',
    resourceLink: '',
    resourceType: '',
  };

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
        console.log('inside state');

        this.copyCurrentResource = {
          resourceName: data.resourceName,
          resourceLink: data.resourceLink,
          resourceType: data.resourceType,
        };
        console.log(this.copyCurrentResource);
        this.copyResource = [...this.allResources];
        this.copyResource.push(this.copyCurrentResource);
        const payLoad = {
          resources: this.copyResource,
        };
        this.trainer.patchCourse(this.courseId, payLoad).subscribe((data) => {
          console.log(data);
          this.trainer.getCourseResources(this.courseId);
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
  handleDeleteResource(index: number) {
    this.allResources.splice(index, 1);
    const payLoad = {
      resources: this.allResources,
    };
    this.trainer.patchCourse(this.courseId, payLoad).subscribe((data) => {
      console.log(data);
      this.trainer.getCourseResources(this.courseId);
    });
  }
}
