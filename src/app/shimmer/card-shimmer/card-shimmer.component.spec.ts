import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardShimmerComponent } from './card-shimmer.component';

describe('CardShimmerComponent', () => {
  let component: CardShimmerComponent;
  let fixture: ComponentFixture<CardShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

