import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardTrainerComponent } from './course-card-trainer.component';

describe('CourseCardTrainerComponent', () => {
  let component: CourseCardTrainerComponent;
  let fixture: ComponentFixture<CourseCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
