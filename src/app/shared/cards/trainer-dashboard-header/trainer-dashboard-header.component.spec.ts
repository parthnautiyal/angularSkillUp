import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDashboardHeaderComponent } from './trainer-dashboard-header.component';

describe('TrainerDashboardHeaderComponent', () => {
  let component: TrainerDashboardHeaderComponent;
  let fixture: ComponentFixture<TrainerDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerDashboardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
