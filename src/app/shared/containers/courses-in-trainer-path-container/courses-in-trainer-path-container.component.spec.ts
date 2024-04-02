import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInTrainerPathContainerComponent } from './courses-in-trainer-path-container.component';

describe('CoursesInTrainerPathContainerComponent', () => {
  let component: CoursesInTrainerPathContainerComponent;
  let fixture: ComponentFixture<CoursesInTrainerPathContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesInTrainerPathContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesInTrainerPathContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
