import { TestBed } from '@angular/core/testing';

import { PEIPaymentTransctionService } from './peipayment-transction.service';

describe('PEIPaymentTransctionService', () => {
  let service: PEIPaymentTransctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEIPaymentTransctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
