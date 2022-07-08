import { TestBed } from '@angular/core/testing';

import { RERentService } from './rerent.service';

describe('RERentService', () => {
  let service: RERentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RERentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
