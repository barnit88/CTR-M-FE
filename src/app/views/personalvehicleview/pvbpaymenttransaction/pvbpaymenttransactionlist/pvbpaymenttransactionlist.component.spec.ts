import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvbpaymenttransactionlistComponent } from './pvbpaymenttransactionlist.component';

describe('PvbpaymenttransactionlistComponent', () => {
  let component: PvbpaymenttransactionlistComponent;
  let fixture: ComponentFixture<PvbpaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvbpaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvbpaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
