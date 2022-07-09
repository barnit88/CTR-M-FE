import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerpaymenttransactioncreateComponent } from './rerpaymenttransactioncreate.component';

describe('RerpaymenttransactioncreateComponent', () => {
  let component: RerpaymenttransactioncreateComponent;
  let fixture: ComponentFixture<RerpaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerpaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerpaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
