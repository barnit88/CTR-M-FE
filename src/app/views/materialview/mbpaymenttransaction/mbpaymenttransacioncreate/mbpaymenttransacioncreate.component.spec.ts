import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpaymenttransacioncreateComponent } from './mbpaymenttransacioncreate.component';

describe('MbpaymenttransacioncreateComponent', () => {
  let component: MbpaymenttransacioncreateComponent;
  let fixture: ComponentFixture<MbpaymenttransacioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbpaymenttransacioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbpaymenttransacioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
