import { TestBed } from '@angular/core/testing';

import { MBPaymentTransactionService } from './mbpayment-transaction.service';

describe('MBPaymentTransactionService', () => {
  let service: MBPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MBPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
