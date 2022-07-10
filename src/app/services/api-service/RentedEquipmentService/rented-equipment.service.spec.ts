import { TestBed } from '@angular/core/testing';

import { RentedEquipmentService } from './rented-equipment.service';

describe('RentedEquipmentService', () => {
  let service: RentedEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentedEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
