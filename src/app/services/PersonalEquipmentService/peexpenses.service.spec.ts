import { TestBed } from '@angular/core/testing';

import { PEExpensesService } from './peexpenses.service';

describe('PEExpensesService', () => {
  let service: PEExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PEExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
