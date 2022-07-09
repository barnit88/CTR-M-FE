import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvbpaymenttransactiondetailComponent } from './pvbpaymenttransactiondetail.component';

describe('PvbpaymenttransactiondetailComponent', () => {
  let component: PvbpaymenttransactiondetailComponent;
  let fixture: ComponentFixture<PvbpaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvbpaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvbpaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
