// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { of, throwError } from 'rxjs';
// import { TrainersAllSectionContainerComponent } from './trainers-all-section-container.component';

// describe('TrainersAllSectionContainerComponent', () => {
//   let component: TrainersAllSectionContainerComponent;
//   let fixture: ComponentFixture<TrainersAllSectionContainerComponent>;
//   let mockStore: jasmine.SpyObj<Store>;
//   let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
//   let mockRouter: jasmine.SpyObj<Router>;

//   beforeEach(async () => {
//     mockStore = jasmine.createSpyObj('Store', ['dispatch', 'select']);
//     mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['url']);
//     mockRouter = jasmine.createSpyObj('Router', ['url']);

//     await TestBed.configureTestingModule({
//       declarations: [TrainersAllSectionContainerComponent],
//       providers: [
//         { provide: Store, useValue: mockStore },
//         { provide: ActivatedRoute, useValue: mockActivatedRoute },
//         { provide: Router, useValue: mockRouter },
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TrainersAllSectionContainerComponent);
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
//     it('should initialize component properties for paths when prefix is all', () => {
//       // Arrange
//       mockActivatedRoute.url.and.returnValue(of([{ path: 'paths' }, { path: 'all' }]));

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.heading).toEqual('paths');
//       expect(component.prefix).toEqual('all');
//       expect(component.height).toEqual(112);
//       expect(component.loading).toBeTruthy();
//       expect(component.error).toBeFalsy();
//     });

//     it('should initialize component properties for courses when prefix is my', () => {
//       // Arrange
//       mockActivatedRoute.url.and.returnValue(of([{ path: 'courses' }, { path: 'my' }]));

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.heading).toEqual('courses');
//       expect(component.prefix).toEqual('my');
//       expect(component.height).toEqual(262);
//       expect(component.loading).toBeTruthy();
//       expect(component.error).toBeFalsy();
//     });

//     it('should initialize component properties for batches when prefix is all and heading is batches', () => {
//       // Arrange
//       mockActivatedRoute.url.and.returnValue(of([{ path: 'batches' }, { path: 'all' }]));

//       // Act
//       component.ngOnInit();

//       // Assert
//       expect(component.heading).toEqual('batches');
//       expect(component.prefix).toEqual('all');
//       expect(component.height).toEqual(200);
//       expect(component.loading).toBeTruthy();
//       expect(component.error).toBeFalsy();
//     });

//     // Add more tests for other combinations of heading and prefix
//   });

//   describe('getAllPaths', () => {
//     it('should dispatch loadAllPaths action and handle success response', () => {
//       // Arrange
//       const paths = [{ id: 1, name: 'Path 1' }];
//       mockStore.select.and.returnValue(of(paths));

//       // Act
//       component.getAllPaths();

//       // Assert
//       expect(mockStore.dispatch).toHaveBeenCalledOnceWith(loadAllPaths());
//       expect(component.allPathsData).toEqual(paths);
//       expect(component.loading).toBeFalsy();
//       expect(component.error).toBeFalsy();
//     });

//     it('should handle error response', () => {
//       // Arrange
//       const error = { message: 'Error occurred', code: 500 };
//       mockStore.select.and.returnValue(of(error));

//       // Act
//       component.getAllPaths();

//       // Assert
//       expect(mockStore.dispatch).toHaveBeenCalledOnceWith(loadAllPaths());
//       expect(component.error).toBeTruthy();
//       expect(component.errorCard.message).toEqual(['Error occurred']);
//       expect(component.errorCard.code).toEqual([500]);
//     });

//     it('should handle loading state', () => {
//       // Arrange
//       mockStore.select.and.returnValue(of(null));

//       // Act
//       component.getAllPaths();

//       // Assert
//       expect(component.loading).toBeTruthy();
//     });

//     // Add more tests for other scenarios like empty response, loading state, etc.
//   });

//   // Add similar describe blocks for other methods like getAllCourses, getAllBatches, etc.
// });
