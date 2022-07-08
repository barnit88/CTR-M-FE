import { TestBed } from '@angular/core/testing';

import { PVEPaymentTransactionService } from './pvepayment-transaction.service';

describe('PVEPaymentTransactionService', () => {
  let service: PVEPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVEPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
