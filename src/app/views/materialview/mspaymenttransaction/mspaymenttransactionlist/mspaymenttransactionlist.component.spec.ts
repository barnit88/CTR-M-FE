import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspaymenttransactionlistComponent } from './mspaymenttransactionlist.component';

describe('MspaymenttransactionlistComponent', () => {
  let component: MspaymenttransactionlistComponent;
  let fixture: ComponentFixture<MspaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
