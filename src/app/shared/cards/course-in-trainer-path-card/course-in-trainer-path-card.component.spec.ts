import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInTrainerPathCardComponent } from './course-in-trainer-path-card.component';

describe('CourseInTrainerPathCardComponent', () => {
  let component: CourseInTrainerPathCardComponent;
  let fixture: ComponentFixture<CourseInTrainerPathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInTrainerPathCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInTrainerPathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
