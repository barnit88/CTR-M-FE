import { TestBed } from '@angular/core/testing';

import { LabourSiteService } from './labour-site.service';

describe('LabourSiteService', () => {
  let service: LabourSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
