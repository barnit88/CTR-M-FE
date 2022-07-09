import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeipaymenttransactionlistComponent } from './peipaymenttransactionlist.component';

describe('PeipaymenttransactionlistComponent', () => {
  let component: PeipaymenttransactionlistComponent;
  let fixture: ComponentFixture<PeipaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeipaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeipaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
