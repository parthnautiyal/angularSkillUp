import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCourseCardTrainerComponent } from './profile-course-card-trainer.component';

describe('ProfileCourseCardTrainerComponent', () => {
  let component: ProfileCourseCardTrainerComponent;
  let fixture: ComponentFixture<ProfileCourseCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCourseCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCourseCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
