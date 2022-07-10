import { TestBed } from '@angular/core/testing';

import { TCPaymentTransactionService } from './tcpayment-transaction.service';

describe('TCPaymentTransactionService', () => {
  let service: TCPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TCPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
