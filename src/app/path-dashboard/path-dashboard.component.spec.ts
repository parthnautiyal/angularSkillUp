import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDashboardComponent } from './path-dashboard.component';

describe('PathDashboardComponent', () => {
  let component: PathDashboardComponent;
  let fixture: ComponentFixture<PathDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
