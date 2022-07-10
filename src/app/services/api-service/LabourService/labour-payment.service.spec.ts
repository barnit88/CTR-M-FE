import { TestBed } from '@angular/core/testing';

import { LabourPaymentService } from './labour-payment.service';

describe('LabourPaymentService', () => {
  let service: LabourPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
