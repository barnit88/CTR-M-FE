import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvepensesdetailComponent } from './pvepensesdetail.component';

describe('PvepensesdetailComponent', () => {
  let component: PvepensesdetailComponent;
  let fixture: ComponentFixture<PvepensesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvepensesdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvepensesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
