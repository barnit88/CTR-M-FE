import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourpaymentdetailComponent } from './labourpaymentdetail.component';

describe('LabourpaymentdetailComponent', () => {
  let component: LabourpaymentdetailComponent;
  let fixture: ComponentFixture<LabourpaymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourpaymentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourpaymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
