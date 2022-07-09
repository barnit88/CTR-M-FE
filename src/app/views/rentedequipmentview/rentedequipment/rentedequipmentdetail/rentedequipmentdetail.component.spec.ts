import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedequipmentdetailComponent } from './rentedequipmentdetail.component';

describe('RentedequipmentdetailComponent', () => {
  let component: RentedequipmentdetailComponent;
  let fixture: ComponentFixture<RentedequipmentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedequipmentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedequipmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
