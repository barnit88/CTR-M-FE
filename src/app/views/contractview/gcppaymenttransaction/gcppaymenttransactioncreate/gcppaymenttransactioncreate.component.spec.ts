import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcppaymenttransactioncreateComponent } from './gcppaymenttransactioncreate.component';

describe('GcppaymenttransactioncreateComponent', () => {
  let component: GcppaymenttransactioncreateComponent;
  let fixture: ComponentFixture<GcppaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcppaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcppaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
