import { TestBed } from '@angular/core/testing';

import { PVIncomeService } from './pvincome.service';

describe('PVIncomeService', () => {
  let service: PVIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
