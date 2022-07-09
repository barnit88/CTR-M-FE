import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeipaymenttransactiondetailComponent } from './peipaymenttransactiondetail.component';

describe('PeipaymenttransactiondetailComponent', () => {
  let component: PeipaymenttransactiondetailComponent;
  let fixture: ComponentFixture<PeipaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeipaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeipaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
