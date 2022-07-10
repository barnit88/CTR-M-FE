import { TestBed } from '@angular/core/testing';

import { PVExpensesService } from './pvexpenses.service';

describe('PVExpensesService', () => {
  let service: PVExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PVExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
