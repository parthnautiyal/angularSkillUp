import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAllSectionContainerComponent } from './trainers-all-section-container.component';

describe('TrainersAllSectionContainerComponent', () => {
  let component: TrainersAllSectionContainerComponent;
  let fixture: ComponentFixture<TrainersAllSectionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersAllSectionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersAllSectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
