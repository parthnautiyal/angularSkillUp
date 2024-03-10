import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStripComponent } from './banner-strip.component';

describe('BannerStripComponent', () => {
  let component: BannerStripComponent;
  let fixture: ComponentFixture<BannerStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
