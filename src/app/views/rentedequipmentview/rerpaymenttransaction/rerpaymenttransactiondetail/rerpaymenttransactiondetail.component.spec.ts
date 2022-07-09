import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerpaymenttransactiondetailComponent } from './rerpaymenttransactiondetail.component';

describe('RerpaymenttransactiondetailComponent', () => {
  let component: RerpaymenttransactiondetailComponent;
  let fixture: ComponentFixture<RerpaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerpaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerpaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
