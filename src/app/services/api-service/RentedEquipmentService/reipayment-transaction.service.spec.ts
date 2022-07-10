import { TestBed } from '@angular/core/testing';

import { REIPaymentTransactionService } from './reipayment-transaction.service';

describe('REIPaymentTransactionService', () => {
  let service: REIPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REIPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
