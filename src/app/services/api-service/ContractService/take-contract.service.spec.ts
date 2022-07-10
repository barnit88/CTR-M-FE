import { TestBed } from '@angular/core/testing';

import { TakeContractService } from './take-contract.service';

describe('TakeContractService', () => {
  let service: TakeContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
