import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpaymenttransacionlistComponent } from './mbpaymenttransacionlist.component';

describe('MbpaymenttransacionlistComponent', () => {
  let component: MbpaymenttransacionlistComponent;
  let fixture: ComponentFixture<MbpaymenttransacionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbpaymenttransacionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbpaymenttransacionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
