import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspaymenttransactiondetailComponent } from './mspaymenttransactiondetail.component';

describe('MspaymenttransactiondetailComponent', () => {
  let component: MspaymenttransactiondetailComponent;
  let fixture: ComponentFixture<MspaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
