import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepaymenttransactioncreateComponent } from './pvepaymenttransactioncreate.component';

describe('PvepaymenttransactioncreateComponent', () => {
  let component: PvepaymenttransactioncreateComponent;
  let fixture: ComponentFixture<PvepaymenttransactioncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepaymenttransactioncreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepaymenttransactioncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
