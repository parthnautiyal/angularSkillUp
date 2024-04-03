import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ConfirmationService } from 'primeng/api';
import { CreateCourse } from 'src/app/models/CreateCourse';
import { User } from 'src/app/models/User';
import { ThemeService } from 'src/app/services/theme.service';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { uploadImage } from 'src/app/state/action/imageUpload.actions';
import { deletePathCreateCollaborator } from 'src/app/state/action/path-create.action';
import {
  selectImageUrl,
  selectUploadError,
  selectUploading,
} from 'src/app/state/selector/ImageUpload.selector';
import { selectPathCreateCollaborators } from 'src/app/state/selector/path-create.selector';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.sass'],
  providers: [ConfirmationService],
})
export class CreateCourseFormComponent implements OnInit {
  isUpdate: boolean = false;
  showError: boolean = false;
  currentCollaborators: User[] = [];
  courseId: number = 316;
  isCollab: boolean = false;
  isCourseCreated: boolean = false;
  isDetailsForm: boolean = true;
  isChaptersForm: boolean = false;
  isResourcesForm: boolean = false;
  imgUrl: string = '';
  isLoading: boolean = false;
  isImageUploaded: boolean = false;
  experiences: String[] = ['Beginner', 'Intermediate', 'Expert'];
  selectedExperience: string = '';
  isDarkMode: boolean = false;
  readyCourseData: CreateCourse = {
    about: '',
    collaboratorEmailIds: [],
    collaboratorIds: [],
    description: 'This is a sample description of course',
    imageUrl: '',
    isAccessible: false,
    level: '',
    name: '',
    prerequisites: [],
    resources: [],
  };

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
    courseLevel: [''],
  });

  constructor(
    private fb: FormBuilder,
    private trainer: TrainerMiscellaneousService,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private themeService: ThemeService
  ) {
    if (this.router.url.includes('update')) {
      this.isUpdate = true;
      this.courseId = this.activatedRoute.snapshot.params['id'];
      this.trainer.getTrainerCourseById(this.courseId);
      this.trainer.getTrainerCourse$.subscribe((data) => {
        console.log(data);

        if (data != null) {
          this.createBasicDetailsCourseForm.setValue({
            courseName: data.courseName,
            courseAbout: data.about,
            courseLevel: data.level,
          });
          this.imgUrl = data.imageUrl;
          this.isImageUploaded = true;
          this.selectedExperience = data.level;
          this.readyCourseData = {
            about: data.about,
            collaboratorEmailIds: data.collaborators.map(
              (collaborator) => collaborator.email
            ),
            collaboratorIds: data.collaborators.map(
              (collaborator) => collaborator.id
            ),
            description: data.description,
            imageUrl: data.imageUrl,
            isAccessible: data.isAccessible,
            level: data.level,
            name: data.courseName,
            prerequisites: data.prerequisites,
            resources: [],
          };
        }
      });
    }
  }

  handleSubmit() {
    this.createBasicDetailsCourseForm.value.courseLevel =
      this.selectedExperience;
    console.log(this.createBasicDetailsCourseForm.value.courseLevel);
    console.log(this.selectedExperience);

    console.log(this.createBasicDetailsCourseForm.value);

    console.log(this.createBasicDetailsCourseForm.valid);
    console.log('Image uploaded', this.isImageUploaded);
    console.log(this.selectedExperience);
    if (
      this.createBasicDetailsCourseForm.valid &&
      this.isImageUploaded &&
      this.selectedExperience
    ) {
      console.log('Form Submitted');
      this.addValuesToReadyCourseData();
      console.log(this.readyCourseData);

      if (this.isUpdate) {
        this.trainer
          .patchTrainerCourse(this.courseId, this.readyCourseData)
          .subscribe((data) => {
            console.log(data);
            this.trainer.success('Course Updated Successfully');
            this.isCourseCreated = true;
          });
        return;
      } else {
        this.trainer.createCourse(this.readyCourseData).subscribe((data) => {
          console.log(data);
          this.trainer.success('Course Created Successfully');
          this.isCourseCreated = true;
        });
      }
    } else {
      console.log('error');
      this.trainer.failure('Please fill all the fields');
      this.showError = true;
    }
  }

  addValuesToReadyCourseData() {
    this.readyCourseData.about =
      this.createBasicDetailsCourseForm.value.courseAbout || '';
    console.log(this.createBasicDetailsCourseForm.value.courseLevel);

    this.readyCourseData.level = this.selectedExperience;
    this.readyCourseData.name =
      this.createBasicDetailsCourseForm.value.courseName || '';
    this.readyCourseData.imageUrl = this.imgUrl;
    this.readyCourseData.isAccessible = true;
  }

  ngOnInit(): void {
    this.themeService.isDarkMode().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
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
    if (selectedFile) {
      this.store.dispatch(uploadImage({ file: selectedFile }));
      this.store.select(selectImageUrl).subscribe((data) => {
        if (data) {
          console.log('Data:', data);
          this.isImageUploaded = true;
          this.imgUrl = data;
        }
      });
      this.store.select(selectUploading).subscribe((data) => {
        console.log('loading:', data);
        this.isLoading = data;
      });
      this.store.select(selectUploadError).subscribe((data) => {
        if (data != null && data != undefined && data.length > 1) {
          console.log('Error:', data);
          this.isImageUploaded = false;
          this.imgUrl = '';
          this.trainer.failure('Image Upload Failed');
        }
      });
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
    console.log('Chapters Clicked', this.isChaptersForm);
  }
  handleResourcesClick() {
    this.isDetailsForm = false;
    this.isChaptersForm = false;
    this.isResourcesForm = true;
  }

  removeFile() {
    this.isImageUploaded = false;

    this.imgUrl = '';
  }
}
