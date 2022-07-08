import { TestBed } from '@angular/core/testing';

import { PVBoughtService } from './pvbought.service';

describe('PVBoughtService', () => {
  let service: PVBoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVBoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
