import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepaymentlistComponent } from './employeepaymentlist.component';

describe('EmployeepaymentlistComponent', () => {
  let component: EmployeepaymentlistComponent;
  let fixture: ComponentFixture<EmployeepaymentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeepaymentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeepaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
