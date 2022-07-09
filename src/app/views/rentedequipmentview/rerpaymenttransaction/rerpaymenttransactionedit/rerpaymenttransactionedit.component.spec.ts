import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerpaymenttransactioneditComponent } from './rerpaymenttransactionedit.component';

describe('RerpaymenttransactioneditComponent', () => {
  let component: RerpaymenttransactioneditComponent;
  let fixture: ComponentFixture<RerpaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerpaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerpaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
