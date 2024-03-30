import { CreatePath } from './../../../models/CreatePath';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { deletePathCreateCollaborator } from 'src/app/state/action/path-create.action';
import {
  selectPathCreateCollaborators,
  selectPathCreateCourses,
} from 'src/app/state/selector/path-create.selector';

@Component({
  selector: 'app-create-path-form',
  templateUrl: './create-path-form.component.html',
  styleUrls: ['./create-path-form.component.sass'],
  providers: [ConfirmationService],
})
export class CreatePathFormComponent implements OnInit {
  noErrors: boolean = false;
  isAddCourse: boolean = false;
  isCollab: boolean = false;
  isImageUploaded: boolean = false;
  imgUrl: string = '';
  i: number = 0;
  currentCourses: Course[] = [];
  currentCollaborators: User[] = [];
  createdPathData: CreatePath = {
    about: '',
    collaboratorEmailIds: [],
    collaboratorIds: [],
    courseIds: [],
    description: '',
    imageUrl: '',
    isAccessible: false,
    name: '',
  };

  createPathForm = this.fb.group({
    pathTitle: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(150)],
    ],
    pathDescription: [
      '',
      [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(255),
      ],
    ],
    pathAbout: [
      '',
      [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(2500),
      ],
    ],
    pathPublish: ['', Validators.required],
  });

  constructor(
    private trainer: TrainerMiscellaneousService,
    private store: Store,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.store.select(selectPathCreateCourses).subscribe((data) => {
      if (data != null && data.length > 0) {
        console.log(data);
        this.currentCourses = [...data];
      }
    });
    this.store.select(selectPathCreateCollaborators).subscribe((data) => {
      if (data != null && data.length > 0) {
        console.log(data);

        this.currentCollaborators = [...data];
      }
    });
  }

  handleSubmitForm() {
    //check the form is valid
    if (
      this.createPathForm.invalid ||
      !this.isImageUploaded ||
      this.currentCourses.length === 0
    ) {
      this.confirmationService.confirm({
        message: 'Please enter valid details',
      });
    } else {
      this.noErrors = true;
      this.confirmationService.confirm({
        message: 'Are you sure you want to create this path?',
        accept: () => {
          this.addDataToCreatPath();
          this.trainer
            .createPathTrainer(this.createdPathData)
            .subscribe((data) => {
              console.log(data);
            });
          console.log(this.createdPathData);
        },
      });
    }
  }

  addDataToCreatPath() {
    this.createdPathData.about = this.createPathForm.value.pathAbout || '';
    this.createdPathData.description =
      this.createPathForm.value.pathDescription || '';
    this.createdPathData.name = this.createPathForm.value.pathTitle || '';
    this.createdPathData.imageUrl = this.imgUrl;
    this.createdPathData.isAccessible =
      this.createPathForm.value.pathPublish === 'public' ? true : false;
    if (this.currentCollaborators.length > 0) {
      this.createdPathData.courseIds = this.currentCourses.map(
        (course) => course.courseId || 0
      );
    }

    this.createdPathData.collaboratorIds = this.currentCollaborators.map(
      (collab) => collab.id
    );
  }

  handleRemoveCollaborator(id: number) {
    const index = this.currentCollaborators.findIndex(
      (collab) => collab.id === id
    );

    if (index > -1) {
      this.currentCollaborators = [
        ...this.currentCollaborators.slice(0, index),
        ...this.currentCollaborators.slice(index + 1),
      ];
    }
    this.store.dispatch(
      deletePathCreateCollaborator({
        selectedCollaborators: this.currentCollaborators,
      })
    );
  }

  triggerInputClick(): void {
    const inputElement = document.getElementById('pathImage');
    if (inputElement) {
      inputElement.click();
    }
  }

  handleFileUpload(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedFile = inputElement.files?.[0];
    this.trainer.uploadImage(selectedFile as File).subscribe((data) => {
      this.isImageUploaded = true;
      this.imgUrl = data.data.imageUpload.originalImgURL;
    });
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  }

  handleAddCourse(event: Event) {
    event.stopPropagation();
    this.isAddCourse = !this.isAddCourse;
  }

  handleCollaborator(event: Event) {
    event.stopPropagation();
    this.isCollab = !this.isCollab;
  }
}
