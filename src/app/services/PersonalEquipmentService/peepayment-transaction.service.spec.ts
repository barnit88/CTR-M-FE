import { TestBed } from '@angular/core/testing';

import { PEEPaymentTransactionService } from './peepayment-transaction.service';

describe('PEEPaymentTransactionService', () => {
  let service: PEEPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEEPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
