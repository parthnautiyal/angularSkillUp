import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivigualCourseComponent } from './indivigual-course.component';

describe('IndivigualCourseComponent', () => {
  let component: IndivigualCourseComponent;
  let fixture: ComponentFixture<IndivigualCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivigualCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndivigualCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
