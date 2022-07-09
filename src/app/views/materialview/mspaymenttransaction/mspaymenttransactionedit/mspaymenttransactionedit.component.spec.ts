import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspaymenttransactioneditComponent } from './mspaymenttransactionedit.component';

describe('MspaymenttransactioneditComponent', () => {
  let component: MspaymenttransactioneditComponent;
  let fixture: ComponentFixture<MspaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
