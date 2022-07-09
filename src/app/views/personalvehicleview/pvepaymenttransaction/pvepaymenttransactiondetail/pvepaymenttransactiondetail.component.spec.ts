import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepaymenttransactiondetailComponent } from './pvepaymenttransactiondetail.component';

describe('PvepaymenttransactiondetailComponent', () => {
  let component: PvepaymenttransactiondetailComponent;
  let fixture: ComponentFixture<PvepaymenttransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepaymenttransactiondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepaymenttransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
