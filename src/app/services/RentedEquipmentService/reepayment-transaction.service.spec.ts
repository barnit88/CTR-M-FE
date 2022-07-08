import { TestBed } from '@angular/core/testing';

import { REEPaymentTransactionService } from './reepayment-transaction.service';

describe('REEPaymentTransactionService', () => {
  let service: REEPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REEPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
