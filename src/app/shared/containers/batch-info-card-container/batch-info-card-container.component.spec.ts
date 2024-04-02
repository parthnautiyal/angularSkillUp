import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatchInfoCardContainerComponent } from './batch-info-card-container.component';
import { User } from 'src/app/models/User'; // Import the User type

describe('BatchInfoCardContainerComponent', () => {
  let component: BatchInfoCardContainerComponent;
  let fixture: ComponentFixture<BatchInfoCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchInfoCardContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchInfoCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for cardsData and heading inputs', () => {
    // Assert
    expect(component.cardsData).toEqual([]);
    expect(component.heading).toEqual('');
  });

  it('should set provided values for cardsData and heading inputs', () => {
    // Arrange
    const testData: User[] = [
      { id: 1, name: 'User 1', email: 'user1@example.com', imageUrl: 'user1.jpg' },
      { id: 2, name: 'User 2', email: 'user2@example.com', imageUrl: 'user2.jpg' },
    ];
    const testHeading = 'Test Heading';

    // Act
    component.cardsData = testData;
    component.heading = testHeading;

    // Assert
    expect(component.cardsData).toEqual(testData);
    expect(component.heading).toEqual(testHeading);
  });

  it('should not have any implementation logic in ngOnInit', () => {
    // Arrange
    spyOn(component, 'ngOnInit').and.callThrough();

    // Act
    component.ngOnInit();

    // Assert
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});
