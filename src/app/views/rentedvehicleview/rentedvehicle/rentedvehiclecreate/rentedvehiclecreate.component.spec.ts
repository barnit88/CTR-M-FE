import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedvehiclecreateComponent } from './rentedvehiclecreate.component';

describe('RentedvehiclecreateComponent', () => {
  let component: RentedvehiclecreateComponent;
  let fixture: ComponentFixture<RentedvehiclecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedvehiclecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedvehiclecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
