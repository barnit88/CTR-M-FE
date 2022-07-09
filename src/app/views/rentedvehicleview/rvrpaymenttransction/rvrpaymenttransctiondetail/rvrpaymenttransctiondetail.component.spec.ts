import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvrpaymenttransctiondetailComponent } from './rvrpaymenttransctiondetail.component';

describe('RvrpaymenttransctiondetailComponent', () => {
  let component: RvrpaymenttransctiondetailComponent;
  let fixture: ComponentFixture<RvrpaymenttransctiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RvrpaymenttransctiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvrpaymenttransctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
