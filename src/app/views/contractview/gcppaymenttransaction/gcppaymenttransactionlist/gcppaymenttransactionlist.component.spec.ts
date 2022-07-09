import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcppaymenttransactionlistComponent } from './gcppaymenttransactionlist.component';

describe('GcppaymenttransactionlistComponent', () => {
  let component: GcppaymenttransactionlistComponent;
  let fixture: ComponentFixture<GcppaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcppaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcppaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
