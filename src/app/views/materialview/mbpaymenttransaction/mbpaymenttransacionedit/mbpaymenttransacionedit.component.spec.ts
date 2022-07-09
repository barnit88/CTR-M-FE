import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbpaymenttransacioneditComponent } from './mbpaymenttransacionedit.component';

describe('MbpaymenttransacioneditComponent', () => {
  let component: MbpaymenttransacioneditComponent;
  let fixture: ComponentFixture<MbpaymenttransacioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbpaymenttransacioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbpaymenttransacioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
