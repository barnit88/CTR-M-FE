import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeipaymenttransactioncreateComponent } from './peipaymenttransactioncreate.component';

describe('PeipaymenttransactioncreateComponent', () => {
  let component: PeipaymenttransactioncreateComponent;
  let fixture: ComponentFixture<PeipaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeipaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeipaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
