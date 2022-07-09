import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeipaymenttransactioneditComponent } from './peipaymenttransactionedit.component';

describe('PeipaymenttransactioneditComponent', () => {
  let component: PeipaymenttransactioneditComponent;
  let fixture: ComponentFixture<PeipaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeipaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeipaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
