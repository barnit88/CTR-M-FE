import { TestBed } from '@angular/core/testing';

import { RVIncomeService } from './rvincome.service';

describe('RVIncomeService', () => {
  let service: RVIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
