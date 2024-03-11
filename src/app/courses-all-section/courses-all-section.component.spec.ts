import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAllSectionComponent } from './courses-all-section.component';

describe('CoursesAllSectionComponent', () => {
  let component: CoursesAllSectionComponent;
  let fixture: ComponentFixture<CoursesAllSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesAllSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesAllSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
