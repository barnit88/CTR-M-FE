import { TestBed } from '@angular/core/testing';

import { PEIncomeService } from './peincome.service';

describe('PEIncomeService', () => {
  let service: PEIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
