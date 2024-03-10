import { TestBed } from '@angular/core/testing';

import { CourseInfoDataServiceService } from './course-info-data-service.service';

describe('CourseInfoDataServiceService', () => {
  let service: CourseInfoDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInfoDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
