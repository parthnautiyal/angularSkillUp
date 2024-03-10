import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHeadingComponent } from './course-heading.component';

describe('CourseHeadingComponent', () => {
  let component: CourseHeadingComponent;
  let fixture: ComponentFixture<CourseHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
