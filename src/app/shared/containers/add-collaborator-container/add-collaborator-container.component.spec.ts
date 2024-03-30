import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollaboratorContainerComponent } from './add-collaborator-container.component';

describe('AddCollaboratorContainerComponent', () => {
  let component: AddCollaboratorContainerComponent;
  let fixture: ComponentFixture<AddCollaboratorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCollaboratorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCollaboratorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
