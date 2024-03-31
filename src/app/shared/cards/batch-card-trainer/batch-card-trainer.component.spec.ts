import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCardTrainerComponent } from './batch-card-trainer.component';

describe('BatchCardTrainerComponent', () => {
  let component: BatchCardTrainerComponent;
  let fixture: ComponentFixture<BatchCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
