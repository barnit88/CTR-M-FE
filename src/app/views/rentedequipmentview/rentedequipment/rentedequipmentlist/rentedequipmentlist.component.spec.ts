import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedequipmentlistComponent } from './rentedequipmentlist.component';

describe('RentedequipmentlistComponent', () => {
  let component: RentedequipmentlistComponent;
  let fixture: ComponentFixture<RentedequipmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentedequipmentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedequipmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
