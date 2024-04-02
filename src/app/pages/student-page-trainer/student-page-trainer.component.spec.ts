import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPageTrainerComponent } from './student-page-trainer.component';

describe('StudentPageTrainerComponent', () => {
  let component: StudentPageTrainerComponent;
  let fixture: ComponentFixture<StudentPageTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPageTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPageTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
