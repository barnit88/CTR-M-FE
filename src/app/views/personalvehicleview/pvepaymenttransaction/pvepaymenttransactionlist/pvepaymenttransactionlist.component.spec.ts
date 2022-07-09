import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepaymenttransactionlistComponent } from './pvepaymenttransactionlist.component';

describe('PvepaymenttransactionlistComponent', () => {
  let component: PvepaymenttransactionlistComponent;
  let fixture: ComponentFixture<PvepaymenttransactionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepaymenttransactionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepaymenttransactionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
