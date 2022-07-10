import { TestBed } from '@angular/core/testing';

import { RVExpensesService } from './rvexpenses.service';

describe('RVExpensesService', () => {
  let service: RVExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RVExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
