import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedvehicleeditComponent } from './rentedvehicleedit.component';

describe('RentedvehicleeditComponent', () => {
  let component: RentedvehicleeditComponent;
  let fixture: ComponentFixture<RentedvehicleeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedvehicleeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedvehicleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
