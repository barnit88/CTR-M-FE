import { TestBed } from '@angular/core/testing';

import { PVBPaymentTransactionService } from './pvbpayment-transaction.service';

describe('PVBPaymentTransactionService', () => {
  let service: PVBPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVBPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
