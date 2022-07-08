import { TestBed } from '@angular/core/testing';

import { REIncomeService } from './reincome.service';

describe('REIncomeService', () => {
  let service: REIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
