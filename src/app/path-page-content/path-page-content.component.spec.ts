import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathPageContentComponent } from './path-page-content.component';

describe('PathPageContentComponent', () => {
  let component: PathPageContentComponent;
  let fixture: ComponentFixture<PathPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathPageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
