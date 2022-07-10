import { TestBed } from '@angular/core/testing';

import { PersonalVehicleService } from './personal-vehicle.service';

describe('PersonalVehicleService', () => {
  let service: PersonalVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
