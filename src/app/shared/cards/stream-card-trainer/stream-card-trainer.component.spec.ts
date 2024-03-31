import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCardTrainerComponent } from './stream-card-trainer.component';

describe('StreamCardTrainerComponent', () => {
  let component: StreamCardTrainerComponent;
  let fixture: ComponentFixture<StreamCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
