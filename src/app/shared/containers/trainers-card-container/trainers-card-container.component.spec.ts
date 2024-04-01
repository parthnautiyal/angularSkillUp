import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersCardContainerComponent } from './trainers-card-container.component';

describe('TrainersCardContainerComponent', () => {
  let component: TrainersCardContainerComponent;
  let fixture: ComponentFixture<TrainersCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
