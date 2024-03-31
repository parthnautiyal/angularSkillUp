import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseTrainerComponent } from './create-course-trainer.component';

describe('CreateCourseTrainerComponent', () => {
  let component: CreateCourseTrainerComponent;
  let fixture: ComponentFixture<CreateCourseTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCourseTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCourseTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
