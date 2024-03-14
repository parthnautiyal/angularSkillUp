import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchPeersComponent } from './batch-peers.component';

describe('BatchPeersComponent', () => {
  let component: BatchPeersComponent;
  let fixture: ComponentFixture<BatchPeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchPeersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
