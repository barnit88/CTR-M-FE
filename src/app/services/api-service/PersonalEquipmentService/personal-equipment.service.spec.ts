import { TestBed } from '@angular/core/testing';

import { PersonalEquipmentService } from './personal-equipment.service';

describe('PersonalEquipmentService', () => {
  let service: PersonalEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
