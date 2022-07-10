import { TestBed } from '@angular/core/testing';

import { RVEPaymentTransactionService } from './rvepayment-transaction.service';

describe('RVEPaymentTransactionService', () => {
  let service: RVEPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVEPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
