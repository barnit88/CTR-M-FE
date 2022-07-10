import { TestBed } from '@angular/core/testing';

import { RentedVehicleService } from './rented-vehicle.service';

describe('RentedVehicleService', () => {
  let service: RentedVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentedVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
