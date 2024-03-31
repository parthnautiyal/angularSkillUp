import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { deletePathCreateCollaborator } from 'src/app/state/action/path-create.action';
import { selectPathCreateCollaborators } from 'src/app/state/selector/path-create.selector';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.sass'],
  providers: [ConfirmationService],
})
export class CreateCourseFormComponent implements OnInit {
  currentCollaborators: User[] = [];
  courseId: number = 285;
  isCollab: boolean = false;
  isCourseCreated: boolean = false;
  isDetailsForm: boolean = true;
  isChaptersForm: boolean = false;
  isResourcesForm: boolean = false;
  imgUrl: string = '';
  isImageUploaded: boolean = false;
  experiences: String[] = ['Beginner', 'Intermediate', 'Expert'];
  selectedExperience: string = '';

  createBasicDetailsCourseForm = this.fb.group({
    courseName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(150)],
    ],
    courseAbout: [
      '',
      [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(2500),
      ],
    ],
    courseLevel: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private trainer: TrainerMiscellaneousService,
    private store: Store
  ) {}

  handleSubmit() {
    if (
      this.createBasicDetailsCourseForm.valid &&
      this.isImageUploaded &&
      this.selectedExperience !== ''
    ) {
      console.log('Form Submitted');
    } else {
    }
  }

  ngOnInit(): void {
    this.store.select(selectPathCreateCollaborators).subscribe((data) => {
      if (data != null && data.length > 0) {
        console.log(data);

        this.currentCollaborators = [...data];
      }
    });
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

  handleCollaborator(event: Event) {
    event.stopPropagation();
    this.isCollab = !this.isCollab;
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

  handleBasicClick() {
    this.isDetailsForm = true;
    this.isChaptersForm = false;
    this.isResourcesForm = false;
  }
  handleChaptersClick() {
    this.isDetailsForm = false;
    this.isChaptersForm = true;
    this.isResourcesForm = false;
  }
  handleResourcesClick() {
    this.isDetailsForm = false;
    this.isChaptersForm = false;
    this.isResourcesForm = true;
  }
}
