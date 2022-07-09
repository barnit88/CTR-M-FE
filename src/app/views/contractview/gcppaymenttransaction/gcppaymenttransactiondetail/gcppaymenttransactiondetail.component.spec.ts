import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcppaymenttransactiondetailComponent } from './gcppaymenttransactiondetail.component';

describe('GcppaymenttransactiondetailComponent', () => {
  let component: GcppaymenttransactiondetailComponent;
  let fixture: ComponentFixture<GcppaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcppaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcppaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
