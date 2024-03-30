import { TestBed } from '@angular/core/testing';

import { TrainerMiscellaneousService } from './trainer-miscellaneous.service';

describe('TrainerMiscellaneousService', () => {
  let service: TrainerMiscellaneousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerMiscellaneousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
