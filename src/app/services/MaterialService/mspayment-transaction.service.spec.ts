import { TestBed } from '@angular/core/testing';

import { MSPaymentTransactionService } from './mspayment-transaction.service';

describe('MSPaymentTransactionService', () => {
  let service: MSPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MSPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
