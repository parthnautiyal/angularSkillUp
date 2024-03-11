import { TestBed } from '@angular/core/testing';

import { CourseInfoDataService } from './course-info-data-service';

describe('CourseInfoDataService', () => {
  let service: CourseInfoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInfoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
