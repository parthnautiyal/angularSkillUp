import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathCardTrainerComponent } from './path-card-trainer.component';

describe('PathCardTrainerComponent', () => {
  let component: PathCardTrainerComponent;
  let fixture: ComponentFixture<PathCardTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathCardTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathCardTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
