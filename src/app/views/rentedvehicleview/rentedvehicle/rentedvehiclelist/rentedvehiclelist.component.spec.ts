import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedvehiclelistComponent } from './rentedvehiclelist.component';

describe('RentedvehiclelistComponent', () => {
  let component: RentedvehiclelistComponent;
  let fixture: ComponentFixture<RentedvehiclelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedvehiclelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedvehiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
