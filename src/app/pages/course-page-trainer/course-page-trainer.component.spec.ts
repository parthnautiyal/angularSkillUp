import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageTrainerComponent } from './course-page-trainer.component';

describe('CoursePageTrainerComponent', () => {
  let component: CoursePageTrainerComponent;
  let fixture: ComponentFixture<CoursePageTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePageTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePageTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
