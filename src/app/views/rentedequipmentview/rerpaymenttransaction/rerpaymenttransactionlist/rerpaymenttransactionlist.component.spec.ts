import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerpaymenttransactionlistComponent } from './rerpaymenttransactionlist.component';

describe('RerpaymenttransactionlistComponent', () => {
  let component: RerpaymenttransactionlistComponent;
  let fixture: ComponentFixture<RerpaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerpaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerpaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
