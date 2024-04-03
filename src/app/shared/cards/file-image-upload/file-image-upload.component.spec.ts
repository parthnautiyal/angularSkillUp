import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileImageUploadComponent } from './file-image-upload.component';

describe('FileImageUploadComponent', () => {
  let component: FileImageUploadComponent;
  let fixture: ComponentFixture<FileImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileImageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
