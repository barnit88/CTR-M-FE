import { TestBed } from '@angular/core/testing';

import { ExtendTakeContractService } from './extend-take-contract.service';

describe('ExtendTakeContractService', () => {
  let service: ExtendTakeContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendTakeContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
