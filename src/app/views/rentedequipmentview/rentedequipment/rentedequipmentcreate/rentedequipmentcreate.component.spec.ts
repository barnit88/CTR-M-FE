import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedequipmentcreateComponent } from './rentedequipmentcreate.component';

describe('RentedequipmentcreateComponent', () => {
  let component: RentedequipmentcreateComponent;
  let fixture: ComponentFixture<RentedequipmentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedequipmentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedequipmentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
