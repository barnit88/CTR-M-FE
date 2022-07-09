import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourpaymentlistComponent } from './labourpaymentlist.component';

describe('LabourpaymentlistComponent', () => {
  let component: LabourpaymentlistComponent;
  let fixture: ComponentFixture<LabourpaymentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabourpaymentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourpaymentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
