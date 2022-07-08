import { TestBed } from '@angular/core/testing';

import { PEBoughtService } from './pebought.service';

describe('PEBoughtService', () => {
  let service: PEBoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEBoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
