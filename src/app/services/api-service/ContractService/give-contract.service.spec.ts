import { TestBed } from '@angular/core/testing';

import { GiveContractService } from './give-contract.service';

describe('GiveContractService', () => {
  let service: GiveContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiveContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
