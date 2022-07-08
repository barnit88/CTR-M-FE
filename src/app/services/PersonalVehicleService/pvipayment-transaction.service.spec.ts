import { TestBed } from '@angular/core/testing';

import { PVIPaymentTransactionService } from './pvipayment-transaction.service';

describe('PVIPaymentTransactionService', () => {
  let service: PVIPaymentTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVIPaymentTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
