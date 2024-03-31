import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageTrainerComponent } from './profile-page-trainer.component';

describe('ProfilePageTrainerComponent', () => {
  let component: ProfilePageTrainerComponent;
  let fixture: ComponentFixture<ProfilePageTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
