import { TestBed } from '@angular/core/testing';

import { REExpensesService } from './reexpenses.service';

describe('REExpensesService', () => {
  let service: REExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
