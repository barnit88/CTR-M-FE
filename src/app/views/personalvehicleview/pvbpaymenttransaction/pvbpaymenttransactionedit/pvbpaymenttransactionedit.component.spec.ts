import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvbpaymenttransactioneditComponent } from './pvbpaymenttransactionedit.component';

describe('PvbpaymenttransactioneditComponent', () => {
  let component: PvbpaymenttransactioneditComponent;
  let fixture: ComponentFixture<PvbpaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvbpaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvbpaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
