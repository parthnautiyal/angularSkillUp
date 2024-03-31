import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCourseCardTrainerComponent } from './dashboard-course-card-trainer.component';

describe('DashboardCourseCardTrainerComponent', () => {
  let component: DashboardCourseCardTrainerComponent;
  let fixture: ComponentFixture<DashboardCourseCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCourseCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCourseCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
