import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCardWrapperComponent } from './batch-card-wrapper.component';

describe('BatchCardWrapperComponent', () => {
  let component: BatchCardWrapperComponent;
  let fixture: ComponentFixture<BatchCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchCardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
