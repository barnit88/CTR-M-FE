import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourpaymentcreateComponent } from './labourpaymentcreate.component';

describe('LabourpaymentcreateComponent', () => {
  let component: LabourpaymentcreateComponent;
  let fixture: ComponentFixture<LabourpaymentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourpaymentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourpaymentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
