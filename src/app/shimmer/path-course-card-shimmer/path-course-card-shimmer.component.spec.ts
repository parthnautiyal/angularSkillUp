import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PathCourseCardShimmerComponent } from './path-course-card-shimmer.component';

describe('PathCourseCardShimmerComponent', () => {
  let component: PathCourseCardShimmerComponent;
  let fixture: ComponentFixture<PathCourseCardShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathCourseCardShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathCourseCardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default shimmer count if not provided', () => {
    expect(component.shimmerCount).toBe(4); // Assuming the default shimmer count is 4
  });

  it('should set provided shimmer count', () => {
    const shimmerCount = 6;
    component.shimmerCount = shimmerCount;
    expect(component.shimmerCount).toBe(shimmerCount);
  });
});
