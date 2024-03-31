import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardInfoTrainerComponent } from './course-card-info-trainer.component';

describe('CourseCardInfoTrainerComponent', () => {
  let component: CourseCardInfoTrainerComponent;
  let fixture: ComponentFixture<CourseCardInfoTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardInfoTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardInfoTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
