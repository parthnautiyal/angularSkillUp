import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPathPageInfoCardComponent } from './trainer-path-page-info-card.component';

describe('TrainerPathPageInfoComponent', () => {
  let component: TrainerPathPageInfoCardComponent;
  let fixture: ComponentFixture<TrainerPathPageInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerPathPageInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerPathPageInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
