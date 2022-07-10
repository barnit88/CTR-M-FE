import { TestBed } from '@angular/core/testing';

import { RVIPaymentTranactionService } from './rvipayment-tranaction.service';

describe('RVIPaymentTranactionService', () => {
  let service: RVIPaymentTranactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVIPaymentTranactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
