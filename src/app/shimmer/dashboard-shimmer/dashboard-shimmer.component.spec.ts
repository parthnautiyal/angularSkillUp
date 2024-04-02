import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardShimmerComponent } from './dashboard-shimmer.component';

describe('DashboardShimmerComponent', () => {
  let component: DashboardShimmerComponent;
  let fixture: ComponentFixture<DashboardShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default shimmer count if not provided', () => {
    expect(component.shimmerCount).toBe(3); // Assuming the default shimmer count is 3
  });

  it('should set provided shimmer count', () => {
    const shimmerCount = 6;
    component.shimmerCount = shimmerCount;
    expect(component.shimmerCount).toBe(shimmerCount);
  });

  it('should set default height if not provided', () => {
    expect(component.height).toBe(100); // Assuming the default height is 100
  });

  it('should set provided height', () => {
    const height = 200;
    component.height = height;
    expect(component.height).toBe(height);
  });
});
