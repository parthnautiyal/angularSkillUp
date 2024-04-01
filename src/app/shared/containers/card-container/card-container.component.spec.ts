// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NgZone } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { of } from 'rxjs';
// import { CardContainerComponent } from './card-container.component';
// import { Title } from 'src/app/constants/enums/title';
// import {
//   selectAllCourses,
//   selectAllCoursesError,
//   selectAllCoursesLoading,
//   selectEnrolledCourses,
//   selectEnrolledCoursesError,
//   selectEnrolledCoursesLoading,
// } from 'src/app/state/selector/course.selector';
// import {
//   selectBatches,
//   selectBatchesError,
//   selectBatchesLoading,
//   selectEnrolledBatches,
//   selectEnrolledBatchesError,
//   selectEnrolledBatchesLoading,
// } from 'src/app/state/selector/batch.selector';
// import {
//   selectAllPaths,
//   selectAllPathsError,
//   selectAllPathsLoading,
//   selectEnrolledPaths,
//   selectEnrolledPathsError,
//   selectEnrolledPathsLoading,
// } from 'src/app/state/selector/path.selector';
// import { MessageService } from 'primeng/api';
// import { EnrolledBatches } from 'src/app/models/EnrolledBatches';

// describe('CardContainerComponent', () => {
//   let component: CardContainerComponent;
//   let fixture: ComponentFixture<CardContainerComponent>;
//   let mockStore: jasmine.SpyObj<Store>;
//   let mockNgZone: jasmine.SpyObj<NgZone>;

//   beforeEach(async () => {
//     mockStore = jasmine.createSpyObj('Store', ['select']);
//     mockNgZone = jasmine.createSpyObj('NgZone', ['run']);

//     await TestBed.configureTestingModule({
//       declarations: [CardContainerComponent],
//       imports: [RouterTestingModule],
//       providers: [
//         { provide: Store, useValue: mockStore },
//         { provide: NgZone, useValue: mockNgZone },
//         MessageService,
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CardContainerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     fixture.destroy();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('ngOnInit', () => {
//     it('should initialize component for COURSES title and /dashboard route', () => {
//       // Arrange
//       component.title = Title.COURSES;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/dashboard');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(262);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllCourses);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllCoursesError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllCoursesLoading);
//     });

//     it('should initialize component for COURSES title and non-dashboard route', () => {
//       // Arrange
//       component.title = Title.COURSES;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/other');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(262);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledCourses);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledCoursesError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledCoursesLoading);
//     });

//     it('should initialize component for BATCHES title and non-user route', () => {
//       // Arrange
//       component.title = Title.BATCHES;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/other');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(200);
//       expect(component.enrolled).toBeFalse();
//       expect(mockStore.select).toHaveBeenCalledWith(selectBatches);
//       expect(mockStore.select).toHaveBeenCalledWith(selectBatchesError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectBatchesLoading);
//     });

//     it('should initialize component for BATCHES title and user route', () => {
//       // Arrange
//       component.title = Title.BATCHES;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/user');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(102);
//       expect(component.enrolled).toBeTrue();
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledBatches);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledBatchesError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledBatchesLoading);
//     });

//     it('should initialize component for PATHS title and /dashboard route', () => {
//       // Arrange
//       component.title = Title.PATHS;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/dashboard');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(112);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllPaths);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllPathsError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectAllPathsLoading);
//     });

//     it('should initialize component for PATHS title and non-dashboard route', () => {
//       // Arrange
//       component.title = Title.PATHS;
//       spyOnProperty(mockStore, 'select').and.returnValues(of([]), of(null), of(true));
//       spyOnProperty(component.router, 'url', 'get').and.returnValue('/other');

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.height).toBe(112);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledPaths);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledPathsError);
//       expect(mockStore.select).toHaveBeenCalledWith(selectEnrolledPathsLoading);
//     });
//   });

//   describe('onResize', () => {
//     it('should set shimmerCount to 1 if window width is less than or equal to 768', () => {
//       // Arrange
//       spyOnProperty(window, 'innerWidth', 'get').and.returnValue(768);

//       // Act
//       component.onResize();

//       // Assert
//       expect(component.shimmerCount).toBe(1);
//     });

//     it('should set shimmerCount to 3 if window width is greater than 768', () => {
//       // Arrange
//       spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1024);

//       // Act
//       component.onResize();

//       // Assert
//       expect(component.shimmerCount).toBe(3);
//     });
//   });

//   describe('ngOnDestroy', () => {
//     it('should set allPaths to undefined', () => {
//       // Arrange
//       component.allPaths = [/* some value */];

//       // Act
//       component.ngOnDestroy();

//       // Assert
//       expect(component.allPaths).toBeUndefined();
//     });
//   });
// });
