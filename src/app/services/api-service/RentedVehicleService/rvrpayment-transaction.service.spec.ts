import { TestBed } from '@angular/core/testing';

import { RVRPaymentTransactionService } from './rvrpayment-transaction.service';

describe('RVRPaymentTransactionService', () => {
  let service: RVRPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVRPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
