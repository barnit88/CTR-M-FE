import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspaymenttransactioncreateComponent } from './mspaymenttransactioncreate.component';

describe('MspaymenttransactioncreateComponent', () => {
  let component: MspaymenttransactioncreateComponent;
  let fixture: ComponentFixture<MspaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
