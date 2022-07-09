import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepaymentdetailComponent } from './employeepaymentdetail.component';

describe('EmployeepaymentdetailComponent', () => {
  let component: EmployeepaymentdetailComponent;
  let fixture: ComponentFixture<EmployeepaymentdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepaymentdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepaymentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
