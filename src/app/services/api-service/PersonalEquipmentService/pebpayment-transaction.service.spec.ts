import { TestBed } from '@angular/core/testing';

import { PEBPaymentTransactionService } from './pebpayment-transaction.service';

describe('PEBPaymentTransactionService', () => {
  let service: PEBPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEBPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
