import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvbpaymenttransactioncreateComponent } from './pvbpaymenttransactioncreate.component';

describe('PvbpaymenttransactioncreateComponent', () => {
  let component: PvbpaymenttransactioncreateComponent;
  let fixture: ComponentFixture<PvbpaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvbpaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvbpaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
