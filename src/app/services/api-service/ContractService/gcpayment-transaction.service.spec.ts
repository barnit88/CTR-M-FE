import { TestBed } from '@angular/core/testing';

import { GCPaymentTransactionService } from './gcpayment-transaction.service';

describe('GCPaymentTransactionService', () => {
  let service: GCPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GCPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
