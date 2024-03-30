import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePathFormComponent } from './create-path-form.component';

describe('CreatePathFormComponent', () => {
  let component: CreatePathFormComponent;
  let fixture: ComponentFixture<CreatePathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePathFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
