import { Store, select } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { QuizTypes } from 'src/app/models/QuizTypes';
import { Quiz, Resource } from 'src/app/models/CreateCourse';
import { setQuiz, setResource } from 'src/app/state/action/path-create.action';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.sass'],
})
export class CreateResourceComponent implements OnInit {
  @Input() courseId = 0;
  @Input() type = 'QUIZ';
  isVisible: boolean = true;
  imgUrl: string = '';
  allReady: boolean = false;
  fileUrl: string = '';
  isShowError: boolean = false;
  isShowUploadBox: boolean = true;
  isImageUploaded: boolean = false;
  isFileUploaded: boolean = false;
  isLink: boolean = true;
  finalResource: Resource = {
    resourceName: '',
    resourceLink: '',
    resourceType: '',
  };
  finalQuiz: Quiz = {
    quizType: '',
    name: '',
    quizLink: '',
    passingMarks: 0,
  };
  quizTypes: QuizTypes[] = [
    {
      name: 'Google Form',
      value: 'GOOGLE_FORM',
    },
    {
      name: 'Test Paper',
      value: 'TEST_PAPER',
    },
  ];
  selectedQuizType: QuizTypes = {
    name: '',
    value: '',
  };
  constructor(
    private trainer: TrainerMiscellaneousService,
    private fb: FormBuilder,
    private store: Store
  ) {}

  contenForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(150)],
    ],
    type: [''],
    contentLink: [''],
  });

  quizForm = this.fb.group({
    quizTitle: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
    ],
    quizLink: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000),
      ],
    ],
    quizPassingScore: [0, [Validators.required]],
  });

  ngOnInit(): void {}
  checkValidity() {
    if (this.contenForm.valid || this.quizForm.valid) {
      this.allReady = true;
    } else {
      this.allReady = false;
    }
  }

  handleQuizSubmit() {
    if (this.quizForm.valid) {
      this.finalQuiz.quizType = this.selectedQuizType.value;
      this.finalQuiz.name = this.quizForm.value.quizTitle || '';
      this.finalQuiz.quizLink = this.quizForm.value.quizLink || '';
      this.finalQuiz.passingMarks = this.quizForm.value.quizPassingScore || 0;
      console.log('Quiz:', this.finalQuiz);
      this.store.dispatch(setQuiz({ quiz: this.finalQuiz }));
      this.isVisible = false;
    } else {
      this.isShowError = true;
    }
  }

  handleContentSubmit() {
    if (
      this.isFileUploaded ||
      this.isImageUploaded ||
      this.contenForm.value.contentLink
    ) {
      this.finalResource.resourceName = this.contenForm.value.title || '';
      if (this.isImageUploaded) {
        this.finalResource.resourceType = 'FILE';
        this.finalResource.resourceLink = this.imgUrl;
      } else if (this.isFileUploaded) {
        this.finalResource.resourceType = 'FILE';
        this.finalResource.resourceLink = this.fileUrl;
      } else {
        this.finalResource.resourceType = 'LINK';
        this.finalResource.resourceLink =
          this.contenForm.value.contentLink || '';
      }
      console.log('Resource:', this.finalResource);
      this.store.dispatch(setResource({ resource: this.finalResource }));
      this.isVisible = false;
    } else {
      console.log('Please upload a file or image');
      this.isShowError = true;
    }
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

    if (selectedFile?.type === 'application/pdf') {
      this.trainer.uploadFile(selectedFile as File).subscribe((data) => {
        this.isFileUploaded = true;
        this.fileUrl = data.data.url;
        this.isShowUploadBox = false;
        console.log(data.data.url);
      });
    } else {
      this.trainer.uploadImage(selectedFile as File).subscribe((data) => {
        this.isImageUploaded = true;
        // this.isShowUploadBox = false;
        this.imgUrl = data.data.imageUpload.originalImgURL;
      });
    }

    // this.trainer.uploadImage(selectedFile as File).subscribe((data) => {
    //   this.isImageUploaded = true;
    //   this.imgUrl = data.data.imageUpload.originalImgURL;
    // });
    if (selectedFile?.type === 'application/pdf') {
      console.log('Selected file:', selectedFile.type);
    }
  }

  removeFile() {
    this.isShowUploadBox = true;
    this.isImageUploaded = false;
    this.isFileUploaded = false;
    this.imgUrl = '';
    this.fileUrl = '';
  }

  handleCancelButton() {
    this.isVisible = false;
  }

  ngOnDestroy() {
    this.courseId = 0;
    this.type = 'QUIZ';
    this.isVisible = true;
    this.imgUrl = '';
    this.allReady = false;
    this.fileUrl = '';
    this.isShowError = false;
    this.isShowUploadBox = true;
    this.isImageUploaded = false;
    this.isFileUploaded = false;
    this.isLink = true;
    this.finalResource = {
      resourceName: '',
      resourceLink: '',
      resourceType: '',
    };
    this.finalQuiz = {
      quizType: '',
      name: '',
      quizLink: '',
      passingMarks: 0,
    };
    this.selectedQuizType = {
      name: '',
      value: '',
    };
    this.contenForm.reset();
    this.quizForm.reset();
  }
}
