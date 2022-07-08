import { TestBed } from '@angular/core/testing';

import { ExtendGiveContractService } from './extend-give-contract.service';

describe('ExtendGiveContractService', () => {
  let service: ExtendGiveContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtendGiveContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
