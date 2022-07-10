import { TestBed } from '@angular/core/testing';

import { MaterialUsedService } from './material-used.service';

describe('MaterialUsedService', () => {
  let service: MaterialUsedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialUsedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
