import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepaymenttransactioneditComponent } from './pvepaymenttransactionedit.component';

describe('PvepaymenttransactioneditComponent', () => {
  let component: PvepaymenttransactioneditComponent;
  let fixture: ComponentFixture<PvepaymenttransactioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepaymenttransactioneditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepaymenttransactioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
