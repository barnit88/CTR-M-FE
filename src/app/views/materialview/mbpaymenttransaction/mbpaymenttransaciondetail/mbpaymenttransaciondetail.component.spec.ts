import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpaymenttransaciondetailComponent } from './mbpaymenttransaciondetail.component';

describe('MbpaymenttransaciondetailComponent', () => {
  let component: MbpaymenttransaciondetailComponent;
  let fixture: ComponentFixture<MbpaymenttransaciondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbpaymenttransaciondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbpaymenttransaciondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
