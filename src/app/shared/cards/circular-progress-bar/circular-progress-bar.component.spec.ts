import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircularProgressBarComponent } from './circular-progress-bar.component';

describe('CircularProgressBarComponent', () => {
  let component: CircularProgressBarComponent;
  let fixture: ComponentFixture<CircularProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default progress value', () => {
    expect(component.progress).toEqual(75);
  });

  it('should return correct style for progress', () => {
    const style = component.getStyle();
    expect(style.background).toEqual('conic-gradient(#8DD000 75%, #f2f2f4 75%)');
  });

  it('should update style when progress changes', () => {
    component.progress = 50;
    const style = component.getStyle();
    expect(style.background).toEqual('conic-gradient(#8DD000 50%, #f2f2f4 50%)');
  });
});
