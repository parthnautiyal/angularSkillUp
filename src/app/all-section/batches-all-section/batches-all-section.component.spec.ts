import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesAllSectionComponent } from './batches-all-section.component';

describe('BatchesAllSectionComponent', () => {
  let component: BatchesAllSectionComponent;
  let fixture: ComponentFixture<BatchesAllSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchesAllSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BatchesAllSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
