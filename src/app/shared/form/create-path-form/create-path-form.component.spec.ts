import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CreatePathFormComponent } from './create-path-form.component';
import { TrainerMiscellaneousService } from 'src/app/services/trainer-miscellaneous.service';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

describe('CreatePathFormComponent', () => {
  let component: CreatePathFormComponent;
  let fixture: ComponentFixture<CreatePathFormComponent>;
  let mockTrainerMiscellaneousService: jasmine.SpyObj<TrainerMiscellaneousService>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    const trainerSpy = jasmine.createSpyObj('TrainerMiscellaneousService', ['uploadImage']);
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      declarations: [ CreatePathFormComponent ],
      providers: [
        { provide: TrainerMiscellaneousService, useValue: trainerSpy },
        { provide: Store, useValue: storeSpy },
        FormBuilder
      ]
    })
    .compileComponents();

    mockTrainerMiscellaneousService = TestBed.inject(TrainerMiscellaneousService) as jasmine.SpyObj<TrainerMiscellaneousService>;
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.isAddCourse).toBeFalse();
    expect(component.isCollab).toBeFalse();
    expect(component.isImageUploaded).toBeFalse();
    expect(component.imgUrl).toBe('');
    expect(component.i).toBe(0);
    expect(component.currentCourses).toEqual([]);
    expect(component.currentCollaborators).toEqual([]);
    expect(component.createPathForm.get('pathTitle')?.value).toBe('');
    expect(component.createPathForm.get('pathDescription')?.value).toBe('');
    expect(component.createPathForm.get('pathAbout')?.value).toBe('');
    expect(component.createPathForm.get('pathPublish')?.value).toBe('');
  });

  it('should handle form submission', () => {
    const formData = {
      pathTitle: 'Test Path',
      pathDescription: 'Description',
      pathAbout: 'About',
      pathPublish: 'Publish'
    };
    component.createPathForm.setValue(formData);
    spyOn(console, 'log');

    component.handleSubmitForm();

    expect(console.log).toHaveBeenCalledWith(formData);
  });

  it('should handle removal of collaborators', () => {
    const testCollaborators = [
      {
        email: "user1@example.com",
        id: 1,
        imageUrl: "https://example.com/user1.jpg",
        name: "Alice",
        isActive: true,
      },
      {
        email: "user2@example.com",
        id: 2,
        imageUrl: "https://example.com/user2.jpg",
        name: "Bob",
      },
    ];
    component.currentCollaborators = [...testCollaborators];
    const idToRemove = 1;

    component.handleRemoveCollaborator(idToRemove);

    expect(component.currentCollaborators.length).toBe(testCollaborators.length - 1);
    expect(component.currentCollaborators.some(collab => collab.id === idToRemove)).toBeFalse();
    expect(mockStore.dispatch).toHaveBeenCalledOnceWith(jasmine.objectContaining({
      selectedCollaborators: jasmine.arrayContaining(component.currentCollaborators)
    }));
  });

  it('should trigger file upload', () => {
    const inputClickSpy = spyOn(document, 'getElementById').and.returnValue({
      click: () => {} // Mocking the click method with an empty function
    } as HTMLElement); // Providing correct type annotation

    component.triggerInputClick();
    expect(inputClickSpy).toHaveBeenCalledWith('pathImage');
  });

  it('should handle file upload', fakeAsync(() => {
    const testFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const uploadResponse = { data: { imageUpload: { originalImgURL: 'test-url' } } };
    mockTrainerMiscellaneousService.uploadImage.and.returnValue(of(uploadResponse));
    const inputElement: Partial<HTMLInputElement> = {
      files: [testFile] as any,
      accept: '',
      align: '',
      alt: '',
      autocomplete: '',
      // Add other necessary properties here, if needed
    } as HTMLInputElement;

    component.handleFileUpload({ target: inputElement } as unknown as Event);

    tick(); // Simulate passage of time to complete the upload

    expect(mockTrainerMiscellaneousService.uploadImage).toHaveBeenCalledWith(testFile);
    expect(component.isImageUploaded).toBeTrue();
    expect(component.imgUrl).toBe(uploadResponse.data.imageUpload.originalImgURL);
  }));

  it('should toggle add course form', () => {
    component.isAddCourse = false;
    component.handleAddCourse(new Event('click'));
    expect(component.isAddCourse).toBeTrue();

    component.handleAddCourse(new Event('click'));
    expect(component.isAddCourse).toBeFalse();
  });

  it('should toggle collaborator form', () => {
    component.isCollab = false;
    component.handleCollaborator(new Event('click'));
    expect(component.isCollab).toBeTrue();

    component.handleCollaborator(new Event('click'));
    expect(component.isCollab).toBeFalse();
  });
});
