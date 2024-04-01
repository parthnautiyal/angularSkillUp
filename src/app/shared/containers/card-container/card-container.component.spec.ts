import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardContainerComponent } from './card-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { NgZone } from '@angular/core';
import {
  selectAllCourses,
  selectAllCoursesError,
  selectAllCoursesLoading,
  selectEnrolledCourses,
  selectEnrolledCoursesError,
  selectEnrolledCoursesLoading,
} from 'src/app/state/selector/course.selector';
import {
  selectBatches,
  selectBatchesError,
  selectBatchesLoading,
  selectEnrolledBatches,
  selectEnrolledBatchesError,
  selectEnrolledBatchesLoading,
} from 'src/app/state/selector/batch.selector';
import {
  selectAllPaths,
  selectAllPathsError,
  selectAllPathsLoading,
  selectEnrolledPaths,
  selectEnrolledPathsError,
  selectEnrolledPathsLoading,
} from 'src/app/state/selector/path.selector';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      providers: [NgZone],
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should handle COURSES title when router URL is /dashboard', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/dashboard');
      spyOn(store, 'select').and.callThrough();

      component.title = 'COURSES';
      component.ngOnInit();

      expect(store.select).toHaveBeenCalledWith(selectAllCourses);
      expect(store.select).toHaveBeenCalledWith(selectAllCoursesError);
      expect(store.select).toHaveBeenCalledWith(selectAllCoursesLoading);
    });

    it('should handle COURSES title when router URL is not /dashboard', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/other');
      spyOn(store, 'select').and.callThrough();

      component.title = 'COURSES';
      component.ngOnInit();

      expect(store.select).toHaveBeenCalledWith(selectEnrolledCourses);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledCoursesError);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledCoursesLoading);
    });

    it('should handle BATCHES title when router URL is not /user', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/other');
      spyOn(store, 'select').and.callThrough();

      component.title = 'BATCHES';
      component.ngOnInit();

      expect(component.height).toEqual(200);
      expect(component.enrolled).toEqual(false);
      expect(store.select).toHaveBeenCalledWith(selectBatches);
      expect(store.select).toHaveBeenCalledWith(selectBatchesError);
      expect(store.select).toHaveBeenCalledWith(selectBatchesLoading);
    });

    it('should handle BATCHES title when router URL is /user', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/user');
      spyOn(store, 'select').and.callThrough();

      component.title = 'BATCHES';
      component.ngOnInit();

      expect(component.height).toEqual(102);
      expect(component.enrolled).toEqual(true);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledBatches);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledBatchesError);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledBatchesLoading);
    });

    it('should handle PATHS title when router URL is /dashboard', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/dashboard');
      spyOn(store, 'select').and.callThrough();

      component.title = 'PATHS';
      component.ngOnInit();

      expect(store.select).toHaveBeenCalledWith(selectAllPaths);
      expect(store.select).toHaveBeenCalledWith(selectAllPathsError);
      expect(store.select).toHaveBeenCalledWith(selectAllPathsLoading);
    });

    it('should handle PATHS title when router URL is not /dashboard', () => {
      spyOnProperty(component.router, 'url').and.returnValue('/other');
      spyOn(store, 'select').and.callThrough();

      component.title = 'PATHS';
      component.ngOnInit();

      expect(store.select).toHaveBeenCalledWith(selectEnrolledPaths);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledPathsError);
      expect(store.select).toHaveBeenCalledWith(selectEnrolledPathsLoading);
    });
  });
});
