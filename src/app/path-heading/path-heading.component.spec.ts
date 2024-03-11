import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathHeadingComponent } from './path-heading.component';

describe('PathHeadingComponent', () => {
  let component: PathHeadingComponent;
  let fixture: ComponentFixture<PathHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathHeadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PathHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
