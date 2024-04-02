// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { Store, StoreModule, combineReducers } from '@ngrx/store';
// import { of } from 'rxjs';
// import { ConfirmationService } from 'primeng/api';
// import { CreateCourseFormComponent } from './create-course-form.component';
// import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
// import { deletePathCreateCollaborator } from 'src/app/state/action/path-create.action';
// import { selectPathCreateCollaborators } from 'src/app/state/selector/path-create.selector';
// import * as fromPathCreate from 'src/app/state/reducer/path-create.reducer';

// describe('CreateCourseFormComponent', () => {
//   let component: CreateCourseFormComponent;
//   let fixture: ComponentFixture<CreateCourseFormComponent>;
//   let mockStore: Store;
//   let mockTrainerMiscellaneousService: jasmine.SpyObj<TrainerMiscellaneousService>;

//   beforeEach(async () => {
//     const trainerServiceSpy = jasmine.createSpyObj('TrainerMiscellaneousService', ['uploadImage']);

//     await TestBed.configureTestingModule({
//       declarations: [CreateCourseFormComponent],
//       imports: [
//         ReactiveFormsModule,
//         StoreModule.forRoot({}),
//         StoreModule.forFeature(fromPathCreate.pathCreateFeatureKey, fromPathCreate.reducer),
//       ],
//       providers: [
//         FormBuilder,
//         ConfirmationService,
//         { provide: TrainerMiscellaneousService, useValue: trainerServiceSpy }
//       ]
//     }).compileComponents();

//     mockStore = TestBed.inject(Store);
//     mockTrainerMiscellaneousService = TestBed.inject(TrainerMiscellaneousService) as jasmine.SpyObj<TrainerMiscellaneousService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CreateCourseFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();

//     // Provide a mock value for the selectPathCreateCollaborators selector
//     const mockCollaborators: User[] = [{ email: 'test@example.com', id: 1, imageUrl: 'image.jpg', name: 'Test User' }];
//     spyOn(mockStore, 'select').and.returnValue(of(mockCollaborators));
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('handleSubmit should submit form when valid data is provided', () => {
//     component.createBasicDetailsCourseForm.setValue({
//       courseName: 'Test Course',
//       courseAbout: 'Lorem ipsum dolor sit amet',
//       courseLevel: 'Beginner'
//     });
//     component.selectedExperience = 'Beginner';
//     component.isImageUploaded = true;
//     spyOn(console, 'log');

//     component.handleSubmit();

//     expect(console.log).toHaveBeenCalledWith('Form Submitted');
//   });

//   it('handleSubmit should not submit form when invalid data is provided', () => {
//     component.createBasicDetailsCourseForm.setValue({
//       courseName: '', // Invalid
//       courseAbout: 'Lorem ipsum dolor sit amet',
//       courseLevel: 'Beginner'
//     });
//     component.selectedExperience = 'Beginner';
//     component.isImageUploaded = false; // Invalid
//     spyOn(console, 'log');

//     component.handleSubmit();

//     expect(console.log).not.toHaveBeenCalledWith('Form Submitted');
//   });

//   it('ngOnInit should initialize component and subscribe to store selector', () => {
//     const mockCollaborators = [{ id: 1, name: 'John Doe', email: 'john@example.com', imageUrl: 'image.jpg' }];
//     mockStore.select.and.returnValue(of(mockCollaborators));

//     component.ngOnInit();

//     expect(component.currentCollaborators).toEqual(mockCollaborators);
//   });

//   it('triggerInputClick should trigger click event on input element', () => {
//     const clickSpy = spyOn(document.getElementById('pathImage')!, 'click');

//     component.triggerInputClick();

//     expect(clickSpy).toHaveBeenCalled();
//   });

//   it('handleFileUpload should upload image and set isImageUploaded and imgUrl', () => {
//     const mockFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
//     const mockResponse = { data: { imageUpload: { originalImgURL: 'test.jpg' } } };
//     mockTrainerMiscellaneousService.uploadImage.and.returnValue(of(mockResponse));
//     const inputElement = { files: [mockFile] } as unknown as HTMLInputElement;
//     const event = { target: inputElement } as unknown as Event;

//     component.handleFileUpload(event);

//     expect(mockTrainerMiscellaneousService.uploadImage).toHaveBeenCalledWith(mockFile);
//     expect(component.isImageUploaded).toBeTrue();
//     expect(component.imgUrl).toEqual(mockResponse.data.imageUpload.originalImgURL);
//   });

//   it('handleCollaborator should toggle isCollab property', () => {
//     component.isCollab = false;

//     component.handleCollaborator({} as Event);

//     expect(component.isCollab).toBeTrue();
//   });

//   it('handleRemoveCollaborator should remove collaborator and dispatch action', () => {
//     const mockCollaborators = [
//       { id: 1, name: 'John Doe', email: 'john@example.com', imageUrl: 'image1.jpg' },
//       { id: 2, name: 'Jane Doe', email: 'jane@example.com', imageUrl: 'image2.jpg' }
//     ];
//     component.currentCollaborators = [...mockCollaborators];

//     component.handleRemoveCollaborator(1);

//     expect(component.currentCollaborators.length).toBe(1);
//     expect(component.currentCollaborators[0].id).toBe(2);
//     expect(mockStore.dispatch).toHaveBeenCalledWith(
//       deletePathCreateCollaborator({ selectedCollaborators: component.currentCollaborators })
//     );
//   });

//   it('handleBasicClick should set isDetailsForm to true and others to false', () => {
//     component.isChaptersForm = true;
//     component.isResourcesForm = true;

//     component.handleBasicClick();

//     expect(component.isDetailsForm).toBeTrue();
//     expect(component.isChaptersForm).toBeFalse();
//     expect(component.isResourcesForm).toBeFalse();
//   });

//   it('handleChaptersClick should set isChaptersForm to true and others to false', () => {
//     component.isDetailsForm = true;
//     component.isResourcesForm = true;

//     component.handleChaptersClick();

//     expect(component.isChaptersForm).toBeTrue();
//     expect(component.isDetailsForm).toBeFalse();
//     expect(component.isResourcesForm).toBeFalse();
//   });

//   it('handleResourcesClick should set isResourcesForm to true and others to false', () => {
//     component.isDetailsForm = true;
//     component.isChaptersForm = true;

//     component.handleResourcesClick();

//     expect(component.isResourcesForm).toBeTrue();
//     expect(component.isDetailsForm).toBeFalse();
//     expect(component.isChaptersForm).toBeFalse();
//   });
// });
