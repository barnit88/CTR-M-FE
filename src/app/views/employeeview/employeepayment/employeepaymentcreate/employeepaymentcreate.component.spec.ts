import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepaymentcreateComponent } from './employeepaymentcreate.component';

describe('EmployeepaymentcreateComponent', () => {
  let component: EmployeepaymentcreateComponent;
  let fixture: ComponentFixture<EmployeepaymentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepaymentcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepaymentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
