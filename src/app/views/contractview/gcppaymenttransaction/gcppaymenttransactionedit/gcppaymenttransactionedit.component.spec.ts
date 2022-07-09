import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcppaymenttransactioneditComponent } from './gcppaymenttransactionedit.component';

describe('GcppaymenttransactioneditComponent', () => {
  let component: GcppaymenttransactioneditComponent;
  let fixture: ComponentFixture<GcppaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcppaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcppaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
