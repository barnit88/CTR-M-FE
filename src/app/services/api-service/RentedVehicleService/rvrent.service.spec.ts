import { TestBed } from '@angular/core/testing';

import { RVRentService } from './rvrent.service';

describe('RVRentService', () => {
  let service: RVRentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVRentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
