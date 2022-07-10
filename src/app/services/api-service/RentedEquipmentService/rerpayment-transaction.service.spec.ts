import { TestBed } from '@angular/core/testing';

import { RERPaymentTransactionService } from './rerpayment-transaction.service';

describe('RERPaymentTransactionService', () => {
  let service: RERPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RERPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
