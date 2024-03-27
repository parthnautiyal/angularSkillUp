import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorCardComponent } from './error-card.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Title } from 'src/app/constants/enums/title';
import { of } from 'rxjs';
import { loadEnrolledCourses } from 'src/app/state/action/course.actions';
import { loadPathById, loadAllPaths } from 'src/app/state/action/path.actions';

describe('ErrorCardComponent', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;
  let routerMock: any;
  let storeSpy: jasmine.SpyObj<Store>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    routerMock = { url: '/other' };

    storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);

    await TestBed.configureTestingModule({
      declarations: [ErrorCardComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeSpy },
        { provide: MessageService, useValue: messageServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty error and Title.PATHS', () => {
    expect(component.error.message).toBe('');
    expect(component.error.code).toBe(0);
    expect(component.title).toBe(Title.PATHS);
  });

  it('should handle reload when url is /user', () => {
    // Arrange
    routerMock.url = '/user';

    // Act
    component.handleReload();

    // Assert
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadEnrolledCourses());
  });

  it('should handle reload when url is /batchpage', () => {
    // Arrange
    routerMock.url = '/batchpage';

    // Act
    component.handleReload();

    // Assert
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should handle reload when url is /pathdashboard', () => {
    // Arrange
    routerMock.url = '/pathdashboard/1';

    // Act
    component.handleReload();

    // Assert
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadPathById({ id: '1' }));
  });

  it('should handle reload when url is /course', () => {
    // Arrange
    routerMock.url = '/course/1';

    // Act
    component.handleReload();

    // Assert
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should handle reload when url is other than /user, /batchpage, /pathdashboard, /course', () => {
    // Arrange
    routerMock.url = '/other';

    // Act
    component.handleReload();

    // Assert
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadAllPaths());
  });

  it('should call showInfo on ngOnInit', () => {
    // Act
    component.ngOnInit();

    // Assert
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'info',
      summary: 'Removed',
      detail: 'Removed from Favorites -> ',
    });
  });

});
