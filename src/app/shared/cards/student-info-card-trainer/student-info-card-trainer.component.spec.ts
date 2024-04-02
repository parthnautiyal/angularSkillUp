import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoCardTrainerComponent } from './student-info-card-trainer.component';

describe('StudentInfoCardTrainerComponent', () => {
  let component: StudentInfoCardTrainerComponent;
  let fixture: ComponentFixture<StudentInfoCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
