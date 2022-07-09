import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedvehicledetailComponent } from './rentedvehicledetail.component';

describe('RentedvehicledetailComponent', () => {
  let component: RentedvehicledetailComponent;
  let fixture: ComponentFixture<RentedvehicledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedvehicledetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedvehicledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
