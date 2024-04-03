import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerStudentHeaderComponent } from './trainer-student-header.component';

describe('TrainerStudentHeaderComponent', () => {
  let component: TrainerStudentHeaderComponent;
  let fixture: ComponentFixture<TrainerStudentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerStudentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerStudentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
